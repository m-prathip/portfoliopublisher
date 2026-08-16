/**
 * XSS & Script Injection Prevention Middleware
 * Recursively sanitizes string inputs in req.body, req.query, and req.params
 * to strip executable script tags and dangerous HTML/javascript protocol vectors.
 */

const sanitizeString = (str) => {
  if (typeof str !== 'string') return str;

  return str
    // Remove script tags and their contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove dangerous inline event handlers (e.g. onload=, onerror=, onclick=)
    .replace(/on\w+\s*=\s*(["'])[\s\S]*?\1/gi, '')
    .replace(/on\w+\s*=\s*[^>\s]+/gi, '')
    // Neutralize javascript: pseudo-protocols
    .replace(/javascript\s*:/gi, 'no-javascript:');
};

const sanitizeValue = (val) => {
  if (typeof val === 'string') {
    return sanitizeString(val);
  }
  if (Array.isArray(val)) {
    return val.map(sanitizeValue);
  }
  if (val !== null && typeof val === 'object') {
    const cleaned = {};
    for (const key of Object.keys(val)) {
      cleaned[key] = sanitizeValue(val[key]);
    }
    return cleaned;
  }
  return val;
};

const sanitizeInput = (req, res, next) => {
  if (req.body) {
    req.body = sanitizeValue(req.body);
  }
  if (req.query) {
    req.query = sanitizeValue(req.query);
  }
  if (req.params) {
    req.params = sanitizeValue(req.params);
  }
  next();
};

module.exports = sanitizeInput;
