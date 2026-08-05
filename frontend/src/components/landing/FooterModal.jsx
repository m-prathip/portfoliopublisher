import { motion, AnimatePresence } from 'framer-motion';

const CONTENT_MAP = {
  Features: {
    title: 'Core Features',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Portfolio Publisher gives you everything you need to stand out:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>20+ 3D Backgrounds:</strong> Beautiful, interactive WebGL themes that run smoothly in the browser.</li>
          <li><strong>Real-time Customization:</strong> Adjust animation speed, density, and glow instantly.</li>
          <li><strong>Personal URL & QR Code:</strong> Instantly share your portfolio with recruiters anywhere.</li>
          <li><strong>Developer-Focused:</strong> Showcase GitHub stats, projects, and tech stacks elegantly.</li>
          <li><strong>Modern Minimalist Design:</strong> Clean layouts built for high conversion and readability.</li>
        </ul>
      </div>
    ),
  },
  Documentation: {
    title: 'Documentation',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Welcome to the Portfolio Publisher documentation. Here you can learn how to build, customize, and deploy your professional portfolio in minutes.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Quick Start:</strong> Sign up and fill in your professional details.</li>
          <li><strong>Customization:</strong> Explore 20+ 3D background themes and modern layouts.</li>
          <li><strong>Sharing:</strong> Generate a unique URL or QR code to share with recruiters.</li>
        </ul>
        <p>
          For advanced API usage and component customization, please contact support.
        </p>
      </div>
    ),
  },
  Blog: {
    title: 'Our Blog',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Discover insights, tips, and strategies for accelerating your career and standing out in today's competitive job market.
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
          <h4 className="font-semibold text-slate-900">Latest Post: The Power of a 3D Portfolio</h4>
          <p className="mt-1 text-slate-500 text-xs">Published August 5, 2026</p>
          <p className="mt-2">Learn how immersive, interactive portfolios can increase your callback rate by up to 40%.</p>
        </div>
      </div>
    ),
  },
  Changelog: {
    title: 'Changelog',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>Keep track of the latest updates and improvements to Portfolio Publisher.</p>
        <div className="space-y-3">
          <div className="border-l-2 border-primary-500 pl-4">
            <h4 className="font-semibold text-slate-900">v2.0.0 - The 3D Update</h4>
            <p className="text-xs text-slate-400 mb-1">August 5, 2026</p>
            <ul className="list-disc pl-4 space-y-1 text-slate-500">
              <li>Added 20+ customizable 3D background presets.</li>
              <li>Completely revamped and streamlined landing page.</li>
              <li>Major performance improvements across the app.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  'Help Center': {
    title: 'Help Center',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Need assistance? We're here to help you get the most out of your portfolio.
        </p>
        <p>
          You can reach our dedicated support team directly at{' '}
          <a href="mailto:portfoliopublisher@gmail.com" className="text-primary-600 font-semibold hover:underline">
            portfoliopublisher@gmail.com
          </a>.
        </p>
        <p>We typically respond within 24 hours.</p>
      </div>
    ),
  },
  About: {
    title: 'About Portfolio Publisher',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Portfolio Publisher was born from a simple idea: professionals shouldn't need to be web developers to have a stunning, interactive online presence.
        </p>
        <p>
          We provide the tools, themes, and infrastructure so you can focus on what matters most—showcasing your skills, experiences, and achievements to land your dream role.
        </p>
      </div>
    ),
  },
  Careers: {
    title: 'Careers',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          We are a passionate team dedicated to redefining how professionals present themselves online.
        </p>
        <p>
          Currently, we don't have any open positions, but we're always looking to connect with talented engineers and designers. Feel free to send your portfolio to our email!
        </p>
      </div>
    ),
  },
  Security: {
    title: 'Security',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Your data's security is our top priority. Portfolio Publisher uses industry-standard encryption for data at rest and in transit.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Authentication:</strong> Secure JWT-based sessions with progressive lockouts.</li>
          <li><strong>Data Protection:</strong> Passwords are hashed using bcrypt with adaptive cost factors.</li>
          <li><strong>Infrastructure:</strong> Hosted on secure, compliant cloud infrastructure.</li>
        </ul>
      </div>
    ),
  },
};

const FooterModal = ({ isOpen, onClose, label }) => {
  if (!isOpen) return null;

  const data = CONTENT_MAP[label] || {
    title: label,
    content: <p className="text-sm text-slate-600">Detailed information regarding {label} will be available soon.</p>,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto border border-slate-100"
            >
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">{data.title}</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                {data.content}
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FooterModal;
