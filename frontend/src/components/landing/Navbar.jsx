import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Templates', href: '#templates' },
  { label: 'FAQ', href: '#faq' },
];

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    if (!href || href === '#') return;
    try {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {}
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink min-w-0">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-xs group-hover:bg-slate-800 transition-colors duration-200 shrink-0">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Portfolio<span className="text-slate-500 font-medium">Publisher</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="relative px-4 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-slate-900 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/auth/login"
              className="text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 px-4 py-2"
            >
              Sign in
            </Link>
            <MagneticButton>
              <Link
                to="/auth/signup"
                className="landing-btn-primary text-[14px] px-5 py-2.5"
              >
                Create Free Portfolio
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Right Action + Hamburger */}
          <div className="flex md:hidden items-center gap-2 sm:gap-2.5 shrink-0">
            <Link
              to="/auth/login"
              className="landing-btn-primary text-xs font-semibold px-3.5 py-1.5 whitespace-nowrap"
            >
              Sign in
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none shrink-0"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-slate-900 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-5 h-[1.5px] bg-slate-900"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-slate-900 origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-8"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(href)}
                className="text-2xl font-semibold text-slate-900 py-4 text-left border-b border-slate-100 hover:text-slate-600 transition-colors"
              >
                {label}
              </motion.button>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3.5 text-slate-800 font-medium bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/auth/signup"
                onClick={() => setMobileOpen(false)}
                className="landing-btn-primary text-center py-3.5 font-semibold"
              >
                Create Free Portfolio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingNavbar;
