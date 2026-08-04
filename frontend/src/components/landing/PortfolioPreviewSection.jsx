import { motion } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';
import GlassCard from './GlassCard';

const CARDS = [
  {
    title: 'Sarah Chen',
    role: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'Python'],
    accent: '#0f172a',
  },
  {
    title: 'Marcus Rivera',
    role: 'AI Engineer',
    skills: ['PyTorch', 'LLMs', 'MLOps'],
    accent: '#2563eb',
  },
  {
    title: 'Priya Sharma',
    role: 'Data Scientist',
    skills: ['TensorFlow', 'SQL', 'Tableau'],
    accent: '#0284c7',
  },
];

const PortfolioCard = ({ card, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-200 ease-out will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="p-6 sm:p-8 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 cursor-default h-full relative overflow-hidden">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center text-white font-bold text-base shadow-xs"
            style={{ backgroundColor: card.accent }}
          >
            {card.title.charAt(0)}
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-0.5">{card.title}</h3>
          <p className="text-sm font-medium text-slate-500 mb-5">{card.role}</p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {card.skills.map((skill) => (
              <span
                key={skill}
                className="text-[12px] font-medium px-3 py-1 rounded-md border border-slate-200/60 text-slate-700 bg-slate-50"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[12px] font-mono text-slate-400">portfoliopub.com/u/{card.title.split(' ')[0].toLowerCase()}</span>
            <span className="text-xs font-semibold text-slate-900">View Profile →</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPreviewSection = () => (
  <SectionWrapper id="features" variant="fadeUp" className="py-20 sm:py-28 relative">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3"
        >
          Portfolio Showcase
        </motion.p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
          Portfolios that make recruiters stop scrolling
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Your portfolio is your first impression. Make it count with clean, professional layouts designed to highlight your best work.
        </p>
      </div>

      {/* 3D Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CARDS.map((card, i) => (
          <PortfolioCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default PortfolioPreviewSection;
