const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  about: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  location: { type: String },
  profileImage: { type: String },
  resumeUrl: { type: String },
  social: {
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    twitter: { type: String },
    instagram: { type: String }
  },
  domains: [{ type: String }],
  isSetup: { type: Boolean, default: false },
  mode: { type: String, enum: ['light', 'dark'], default: 'dark' },
  theme: { type: String, default: 'ocean' },
  background: { type: String, default: 'particles' },
  backgroundConfig: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
