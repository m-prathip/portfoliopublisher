const { getClientIp } = require('../utils/device');

// In-memory store for tracking failed login attempts
// Map structure: IP -> { count: number, lockedUntil: Date | null }
const failedAttempts = new Map();

// Configuration
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// Progressive delay based on attempt count (in ms)
// 1st fail: 1s, 2nd: 2s, 3rd: 4s, 4th: 8s
const progressiveDelay = (count) => {
  if (count <= 0) return 0;
  return Math.min(Math.pow(2, count - 1) * 1000, 8000);
};

const getFailedAttempts = (ip) => {
  return failedAttempts.get(ip) || { count: 0, lockedUntil: null };
};

const checkLockout = async (req, res, next) => {
  const ip = getClientIp(req);
  const record = getFailedAttempts(ip);

  if (record.lockedUntil && record.lockedUntil > new Date()) {
    // Keep it generic to not reveal lockout vs bad password
    return res.status(401).json({ message: 'Invalid credentials or account locked. Please try again later.' });
  }

  // If locked out period has passed, reset the count
  if (record.lockedUntil && record.lockedUntil <= new Date()) {
    failedAttempts.delete(ip);
  }

  // Apply progressive delay if they have failed before but aren't fully locked out yet
  const delayMs = progressiveDelay(record.count);
  if (delayMs > 0) {
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }

  next();
};

const recordFailedAttempt = (ip) => {
  const record = getFailedAttempts(ip);
  record.count += 1;

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MS);
  }

  failedAttempts.set(ip, record);
  return record;
};

const resetFailedAttempts = (ip) => {
  failedAttempts.delete(ip);
};

module.exports = {
  checkLockout,
  recordFailedAttempt,
  resetFailedAttempts,
  MAX_ATTEMPTS
};
