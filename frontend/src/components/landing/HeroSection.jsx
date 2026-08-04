import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from './ParticleCanvas';
import AuroraBackground from './AuroraBackground';
import AnimatedGrid from './AnimatedGrid';
import MouseFollowLight from './MouseFollowLight';
import MagneticButton from './MagneticButton';
import GradientText from './GradientText';
import FloatingMockup from './FloatingMockup';
import DemoVideoModal from './DemoVideoModal';

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 bg-gradient-to-b from-white via-[#FAFAFA] to-[#F8FAFC]">
      {/* Minimalist dot grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-12 sm:pt-20 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-xs mb-8 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[13px] text-slate-600 font-medium">Trusted by 10,000+ professionals</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.06] tracking-[-0.035em] text-slate-900 mb-6">
          {['Build', 'the', 'Portfolio'].map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-slate-900 mr-2 sm:mr-4"
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          {['That', 'Gets', 'You'].map((word, i) => (
            <motion.span
              key={word}
              custom={i + 3}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-slate-900 mr-2 sm:mr-4"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            custom={6}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="inline-block text-slate-900"
          >
            Hired.
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 px-2 sm:px-0 font-normal"
        >
          Create your portfolio, resume, personal website, and QR code in minutes.
          <br className="hidden sm:block" />
          Share one beautiful link everywhere.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <MagneticButton className="w-full sm:w-auto">
            <Link
              to="/auth/signup"
              className="landing-btn-primary text-sm sm:text-base px-7 py-3.5 sm:px-8 sm:py-4 w-full sm:w-auto flex items-center justify-center font-semibold"
            >
              <span>Create Free Portfolio</span>
              <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </MagneticButton>
          <MagneticButton className="w-full sm:w-auto">
            <button onClick={() => setDemoOpen(true)} className="landing-btn-ghost text-sm sm:text-base px-6 py-3.5 sm:px-7 sm:py-4 w-full sm:w-auto flex items-center justify-center font-medium">
              <svg className="w-4 h-4 mr-2 shrink-0 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Mockups */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-4 pb-12"
      >
        <div className="relative rounded-2xl bg-white p-2.5 sm:p-4 border border-slate-200/80 shadow-2xl shadow-slate-900/8">
          <div className="flex items-center gap-2 pb-3 px-2 border-b border-slate-100">
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="text-xs text-slate-400 font-mono ml-2">portfolio-publisher.com/u/alex</span>
          </div>
          <FloatingMockup variant="laptop" className="mx-auto" parallaxStrength={20}>
            <img
              src="/portfolio_mockup.png"
              alt="Portfolio Dashboard Preview"
              className="w-full h-auto rounded-lg"
            />
          </FloatingMockup>
        </div>
      </motion.div>

      {/* Watch Demo Modal */}
      <DemoVideoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default HeroSection;
