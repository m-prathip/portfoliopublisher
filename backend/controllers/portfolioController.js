const QRCode = require('qrcode');
const Profile = require('../models/Profile');
const Skill = require('../models/Skills');
const Project = require('../models/Projects');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Achievement = require('../models/Achievements');
const Certificate = require('../models/Certificate');
const Activity = require('../models/Activities');
const WhyHire = require('../models/WhyHire');

// The link encoded in the QR code points at the FRONTEND app (where
// /u/:username is actually rendered), not at this API.
const getFrontendUrl = () => {
  const envUrl = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',')[0].trim().replace(/\/$/, '') : '';
  if (envUrl && !envUrl.includes('portfolio-project-prathip')) {
    return envUrl;
  }
  return 'https://portfoliopublisher.vercel.app';
};

const buildPortfolioUrl = (username) => `${getFrontendUrl()}/u/${username}`;

// @desc   Get the logged-in user's shareable portfolio link
// @route  GET /api/portfolio/me/link
const getMyLink = (req, res) => {
  res.json({ username: req.user.username, url: buildPortfolioUrl(req.user.username) });
};

// @desc   Get a scannable PNG QR code that opens a user's portfolio.
//         Public + hotlinkable on purpose, so it can be dropped into a
//         resume, slide, or printed card as a plain <img>/download link.
// @route  GET /api/portfolio/:username/qrcode
const getQRCode = (req, res) => {
  const url = buildPortfolioUrl(req.portfolioUser.username);
  QRCode.toBuffer(url, {
    type: 'png',
    width: 480,
    margin: 2,
    color: { dark: '#111827', light: '#ffffff' }
  }, (err, buffer) => {
    if (err) {
      console.error('QR generation error:', err.message);
      return res.status(500).json({ message: 'Failed to generate QR code' });
    }
    res.set('Content-Type', 'image/png');
    res.set('Cache-Control', 'no-cache');
    res.send(buffer);
  });
};

// @desc   Get a user's public portfolio by username (Aggregated API)
// @route  GET /api/portfolio/public/:username
const getPublicPortfolio = async (req, res) => {
  try {
    const userId = req.portfolioUser._id;
    const profile = await Profile.findOne({ user: userId }).lean();
    if (!profile) return res.json({ username: req.portfolioUser.username, isSetup: false });
    
    // Fetch all related sections in parallel to avoid frontend waterfalls
    // Exclude internal fields to reduce payload size for the public API
    const excludeFields = '-createdAt -updatedAt -__v';
    const [skills, projects, experience, education, achievements, certificates, activities, whyHire] = await Promise.all([
      Skill.find({ user: userId }).select(excludeFields).sort('order').lean(),
      Project.find({ user: userId }).select(excludeFields).sort('order').lean(),
      Experience.find({ user: userId }).select(excludeFields).sort('-startDate').lean(),
      Education.find({ user: userId }).select(excludeFields).sort('-startDate').lean(),
      Achievement.find({ user: userId }).select(excludeFields).sort('-date').lean(),
      Certificate.find({ user: userId }).select(excludeFields).sort('order').lean(),
      Activity.find({ user: userId }).select(excludeFields).sort('-date').lean(),
      WhyHire.find({ user: userId }).select(excludeFields).sort('order').lean()
    ]);

    res.json({ 
      ...profile, 
      username: req.portfolioUser.username, 
      isSetup: true,
      collections: {
        skills, projects, experience, education, achievements, certificates, activities, whyHire
      }
    });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { getMyLink, getQRCode, buildPortfolioUrl, getPublicPortfolio };
