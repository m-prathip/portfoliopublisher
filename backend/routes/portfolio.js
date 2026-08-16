const router = require('express').Router();
const { protect } = require('../middleware/auth');
const resolveUser = require('../middleware/resolveUser');
const { forgotLimiter, aiLimiter } = require('../middleware/rateLimiters');
const { getMyLink, getQRCode } = require('../controllers/portfolioController');
const analytics = require('../controllers/analyticsController');
const assistant = require('../controllers/assistantController');

// Share link + QR code
router.get('/me/link', protect, getMyLink);
router.get('/:username/qrcode', resolveUser, getQRCode);

// Owner analytics (Phase 16)
router.get('/me/analytics', protect, analytics.getAnalytics);
router.get('/me/messages', protect, analytics.getMessages);
router.patch('/me/messages/:id/read', protect, analytics.markMessageRead);

// Public tracking + contact (resolveUser maps :username → account)
router.post('/:username/visit', resolveUser, analytics.recordVisit);
router.post('/:username/theme', resolveUser, analytics.recordTheme);
router.post('/:username/resume-download', resolveUser, analytics.recordResumeDownload);
router.post('/:username/contact', forgotLimiter, resolveUser, analytics.submitContact);

// AI portfolio assistant (Phase 10) - Rate-limited to prevent token depletion
router.post('/:username/assistant', aiLimiter, resolveUser, assistant.ask);

module.exports = router;
