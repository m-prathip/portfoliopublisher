const rateLimit = require('express-rate-limit');
const securityLogger = require('../utils/securityLogger');

const handleLimit = (msg, limiterType) => (req, res) => {
  securityLogger.rateLimitBreach({
    ip: req.ip || req.headers['x-forwarded-for'],
    path: req.originalUrl || req.url,
    userAgent: req.headers['user-agent'],
    limiterType
  });
  return res.status(429).json({ message: msg });
};

// Account creation limiter: strictly limits registration attempts per IP to prevent spam accounts.
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 registrations per hour per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('Too many accounts created from this IP. Please try again after an hour.', 'registerLimiter')
});

// Login limiter: protects against brute force & credential stuffing.
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 login attempts per 15 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('Too many login attempts. Account temporarily throttled for 15 minutes.', 'loginLimiter')
});

// OTP verification: tighter, per-IP, to slow code-guessing.
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('Too many OTP verification attempts. Please wait and try again.', 'otpLimiter')
});

// Forgot-password / resend: prevents email-bombing a victim.
const forgotLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('Too many password reset requests. Please try again later.', 'forgotLimiter')
});

// AI Generation limiter: protects AI LLM tokens from abuse/depletion.
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 AI questions per 15 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('AI request limit reached. Please wait a few minutes before asking more questions.', 'aiLimiter')
});

// Global limiter for general API routes to prevent DDoS and scraping.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  handler: handleLimit('Too many API requests from this IP. Throttled for abuse protection.', 'apiLimiter')
});

// Bot & Automated Script Protection Middleware
const BAD_USER_AGENTS = [
  /scrapy/i,
  /python-requests/i,
  /httpclient/i,
  /libwww-perl/i,
  /go-http-client/i,
  /nikto/i,
  /sqlmap/i,
  /zgrab/i,
  /masscan/i,
  /nmap/i
];

const botProtection = (req, res, next) => {
  // Allow test runners in test environment
  if (process.env.NODE_ENV === 'test') {
    return next();
  }

  const ua = req.headers['user-agent'] || '';

  // Block empty user agents on state-changing API endpoints
  if (!ua && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    securityLogger.suspiciousActivity({
      type: 'MISSING_USER_AGENT',
      ip: req.ip || req.headers['x-forwarded-for'],
      path: req.originalUrl,
      userAgent: 'EMPTY',
      details: 'Blocked request with missing User-Agent header'
    });
    return res.status(403).json({ message: 'Access denied: User-Agent header required.' });
  }

  // Block known malicious automation/scraping user-agents
  const isBadAgent = BAD_USER_AGENTS.some((pattern) => pattern.test(ua));
  if (isBadAgent) {
    securityLogger.suspiciousActivity({
      type: 'AUTOMATED_SCRAPER_BLOCKED',
      ip: req.ip || req.headers['x-forwarded-for'],
      path: req.originalUrl,
      userAgent: ua,
      details: 'Blocked request matching automated bot pattern'
    });
    return res.status(403).json({ message: 'Access denied: Automated bot detected.' });
  }

  next();
};

module.exports = {
  authLimiter: registerLimiter,
  registerLimiter,
  loginLimiter,
  otpLimiter,
  forgotLimiter,
  aiLimiter,
  apiLimiter,
  botProtection
};
