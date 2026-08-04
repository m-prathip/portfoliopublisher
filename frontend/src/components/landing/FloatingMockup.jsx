import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * A device-frame mockup (laptop / phone outline) with parallax movement.
 * Content is passed as children and rendered inside the frame.
 */
const FloatingMockup = ({
  children,
  variant = 'laptop',
  className = '',
  parallaxStrength = 40,
  floatDelay = 0,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);

  const frameClasses = variant === 'phone'
    ? 'w-[220px] sm:w-[260px] rounded-[28px] border-4 border-slate-300 bg-white'
    : 'w-full rounded-xl border border-slate-200/80 bg-white';

  return (
    <motion.div
      ref={ref}
      className={`relative w-full ${className}`}
      style={{ y }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: floatDelay },
      }}
    >
      <div
        className={`${frameClasses} overflow-hidden shadow-2xl shadow-slate-900/10`}
      >
        {/* Notch for phone variant */}
        {variant === 'phone' && (
          <div className="mx-auto mt-2 mb-1 w-20 h-4 bg-slate-200 rounded-full" />
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingMockup;
