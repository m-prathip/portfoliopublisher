/**
 * Security Logging Utility
 * Standardized logging for authentication events, rate-limit breaches, API errors, and suspicious traffic.
 */

const logEvent = (type, severity, data) => {
  const timestamp = new Date().toISOString();
  const payload = {
    timestamp,
    type,
    severity,
    ...data
  };

  const formattedLog = `[SECURITY][${severity}][${type}] ${timestamp} - ${JSON.stringify(data)}`;

  if (severity === 'CRITICAL' || severity === 'HIGH' || severity === 'ERROR') {
    console.error(formattedLog);
  } else if (severity === 'WARN') {
    console.warn(formattedLog);
  } else {
    console.log(formattedLog);
  }

  return payload;
};

const securityLogger = {
  authAttempt: ({ email, username, ip, userAgent, success, reason }) => {
    logEvent('AUTH_ATTEMPT', success ? 'INFO' : 'WARN', {
      email,
      username,
      ip,
      userAgent,
      success,
      reason: reason || (success ? 'authenticated' : 'failed')
    });
  },

  rateLimitBreach: ({ ip, path, userAgent, limiterType }) => {
    logEvent('RATE_LIMIT_EXCEEDED', 'WARN', {
      ip,
      path,
      userAgent,
      limiterType
    });
  },

  apiError: ({ status, message, method, url, ip, userAgent, stack }) => {
    const severity = status >= 500 ? 'ERROR' : 'WARN';
    logEvent('API_ERROR', severity, {
      status,
      message,
      method,
      url,
      ip,
      userAgent,
      ...(process.env.NODE_ENV !== 'production' && stack ? { stack } : {})
    });
  },

  suspiciousActivity: ({ type, ip, path, userAgent, details }) => {
    logEvent('SUSPICIOUS_ACTIVITY', 'HIGH', {
      type,
      ip,
      path,
      userAgent,
      details
    });
  }
};

module.exports = securityLogger;
