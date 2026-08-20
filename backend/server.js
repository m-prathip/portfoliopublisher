const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const dotenv = require('dotenv');
const path = require('path');
const compression = require('compression');
const { apiLimiter, botProtection } = require('./middleware/rateLimiters');
const securityLogger = require('./utils/securityLogger');

const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Behind a proxy (Render/Vercel/Heroku) so secure cookies + rate-limit
// see the real client IP and protocol.
app.set('trust proxy', 1);

// ─── Enforce HTTPS in Production ───────────────────────
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// ─── Security headers (HSTS + Helmet) ──────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }, // allow /uploads to be embedded by frontend
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  }
}));

// ─── CORS ──────────────────────────────────────────────
const envOrigins = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : [];
const defaultOrigins = ['https://portfoliopublisher.vercel.app', 'http://localhost:5173'];
const allowedOrigins = [...envOrigins, ...defaultOrigins]
  .map((o) => o.trim().replace(/\/$/, ''));

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin.replace(/\/$/, ''))) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

const sanitizeInput = require('./middleware/sanitizeInput');

// ─── Body parsing, compression & sanitization ──────────
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());
app.use(mongoSanitize()); // strips $ and . from keys → blocks NoSQL injection
app.use(sanitizeInput);   // strips script tags and dangerous HTML → blocks XSS / script injection

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ─── Routes & Anti-Abuse Protection ────────────────────
app.use('/api', botProtection, apiLimiter);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/education', require('./routes/education'));
app.use('/api/experience', require('./routes/experience'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/achievements', require('./routes/achievements'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/certificates', require('./routes/certificates'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/whyhire', require('./routes/whyHire'));

// Health check
app.get('/', (req, res) => res.json({ message: 'Portfolio API is running!' }));
app.get('/health', (req, res) => res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() }));

// ─── 404 Handler & Security Logging ─────────────────────
app.use((req, res) => {
  securityLogger.apiError({
    status: 404,
    message: 'Route not found',
    method: req.method,
    url: req.originalUrl,
    ip: req.ip || req.headers['x-forwarded-for'],
    userAgent: req.headers['user-agent']
  });
  res.status(404).json({ message: 'Route not found' });
});

// ─── Centralized Error Handler ──────────────────────────
app.use((err, req, res, next) => {
  const status = err.status || 500;
  
  securityLogger.apiError({
    status,
    message: err.message,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip || req.headers['x-forwarded-for'],
    userAgent: req.headers['user-agent'],
    stack: err.stack
  });

  const isProd = process.env.NODE_ENV === 'production';
  res.status(status).json({
    message: status >= 500 && isProd ? 'Something went wrong' : err.message
  });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
} else {
  connectDB().catch(console.error);
}

module.exports = app;
