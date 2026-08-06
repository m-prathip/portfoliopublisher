import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 bg-white overflow-hidden">
      {/* Minimal grid background */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Developer Portfolios Reimagined
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
          {['Your', 'work.'].map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {['Beautifully', 'presented.'].map((word, i) => (
            <motion.span
              key={word}
              custom={i + 2}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Create a premium, lightning-fast developer portfolio in minutes. 
          Stand out to recruiters with modern templates and AI-powered features.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link
            to="/auth/signup"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center justify-center transition-colors shadow-lg shadow-slate-900/20"
          >
            Start Building Free
            <FiArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/u/demo"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-semibold flex items-center justify-center transition-colors shadow-sm"
          >
            View Live Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
