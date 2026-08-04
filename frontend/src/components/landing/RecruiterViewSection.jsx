import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';
import GlassCard from './GlassCard';

const RecruiterViewSection = () => (
  <SectionWrapper variant="fadeUp" className="py-20 sm:py-28 relative overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3"
        >
          Recruiter Experience
        </motion.p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
          What recruiters actually see
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Your portfolio is optimized for how recruiters actually evaluate candidates — fast, scannable, and impressive at first glance.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:p-8 h-full relative bg-slate-50 border border-slate-200/80 rounded-2xl shadow-2xs">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-red-100/80 border border-red-200 text-red-700 text-[11px] font-bold uppercase tracking-wider">
              Without
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Traditional Resume</h3>
            <div className="space-y-4">
              {[
                { label: 'Static PDF document', bad: true },
                { label: 'No visual impact', bad: true },
                { label: 'Limited formatting options', bad: true },
                { label: 'No live project demos', bad: true },
                { label: 'Gets lost in email attachments', bad: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <span className="text-slate-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="p-6 sm:p-8 h-full relative bg-white border-2 border-slate-900 rounded-2xl shadow-xl">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
              With Portfolio Publisher
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Your Interactive Portfolio</h3>
            <div className="space-y-4">
              {[
                'Interactive, live website',
                'Clean visual design & typography',
                'Full customization control',
                'Embedded project demos & code',
                'One simple link, instant access anywhere',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ATS Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 shadow-2xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-sm text-slate-600 font-medium">All portfolios are <span className="text-slate-900 font-bold">ATS-friendly</span> and recruiter-optimized</span>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default RecruiterViewSection;
