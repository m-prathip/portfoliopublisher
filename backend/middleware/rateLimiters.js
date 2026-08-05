const rateLimit = require('express-rate-limit');

const json = (msg) => (req, res) => res.status(429).json({ message: msg });

// Login / register: protects against brute force & credential stuffing.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: json('Too many attempts. Please try again in a few minutes.')
});

// Specific strict limiter for /login endpoint
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: json('Too many login attempts. Please try again in a minute.')
});

// OTP verification: tighter, per-IP, to slow code-guessing.
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler: json('Too many OTP attempts. Please wait and try again.')
});

// Forgot-password / resend: prevents email-bombing a victim.
const forgotLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: json('Too many requests. Please try again later.')
});

// Global limiter for general API routes to prevent DDoS and abuse.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
  handler: json('Too many requests from this IP, please try again after 15 minutes.')
});

module.exports = { authLimiter, loginLimiter, otpLimiter, forgotLimiter, apiLimiter };
