import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';
import GlassCard from './GlassCard';

const TYPING_LINES = [
  'I am a full stack developer with 3 years of experience...',
  'Skilled in React, Node.js, Python, and cloud services...',
  'Built scalable applications serving 100K+ users...',
];

const AIPortfolioSection = () => {
  const [typed, setTyped] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= TYPING_LINES.length) return;

    const line = TYPING_LINES[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setTyped(prev => prev + line[charIdx]);
        setCharIdx(c => c + 1);
      }, 30 + Math.random() * 20);
      return () => clearTimeout(t);
    } else if (lineIdx < TYPING_LINES.length - 1) {
      const t = setTimeout(() => {
        setTyped(prev => prev + '\n');
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [started, lineIdx, charIdx]);

  return (
    <SectionWrapper variant="fadeUp" className="py-20 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/80 bg-slate-100 mb-4"
          >
            <span className="text-xs">✨</span>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">AI-Powered</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
            Let AI build your complete portfolio
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Describe yourself in plain text. Our AI generates a complete, polished portfolio — sections, layout, and content — in under 60 seconds.
          </p>
        </div>

        {/* AI Demo */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setStarted(true)}
        >
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200/60">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="ml-3 text-xs text-slate-500 font-mono font-medium">AI Portfolio Builder</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/60">
              {/* Input side */}
              <div className="p-6 bg-slate-50/40">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-mono font-semibold mb-3">Prompt</p>
                <div className="font-mono text-sm text-slate-800 leading-relaxed whitespace-pre-wrap min-h-[130px]">
                  {typed}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-4 bg-slate-900 ml-0.5 align-middle"
                  />
                </div>
              </div>

              {/* Output side */}
              <div className="p-6 bg-white">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-mono font-semibold mb-3">Generated Preview</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={lineIdx >= 2 ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-xs">AI</div>
                    <div>
                      <div className="h-3 bg-slate-200 rounded-full w-28" />
                      <div className="h-2 bg-slate-100 rounded-full w-20 mt-1.5" />
                    </div>
                  </div>
                  {[85, 70, 55, 45, 75].map((w, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0, opacity: 0 }}
                      animate={lineIdx >= 2 ? { width: `${w}%`, opacity: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                      className="h-2 bg-slate-100 rounded-full"
                    />
                  ))}
                  <div className="flex gap-2 mt-4">
                    {['React', 'Node.js', 'Python'].map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={lineIdx >= 2 ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.5 + i * 0.1 }}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-slate-200 text-slate-700 bg-slate-50"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AIPortfolioSection;
