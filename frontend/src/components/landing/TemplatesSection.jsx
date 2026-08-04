import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';
import GlassCard from './GlassCard';
import TemplatePreviewModal from './TemplatePreviewModal';

const TEMPLATES = [
  {
    name: 'Minimal Pro',
    category: 'Minimal',
    gradient: 'from-slate-100 to-slate-200',
    accent: '#0f172a',
    sections: ['About', 'Experience', 'Projects'],
  },
  {
    name: 'Creative Flow',
    category: 'Creative',
    gradient: 'from-blue-50 to-indigo-50',
    accent: '#2563eb',
    sections: ['Hero', 'Gallery', 'Projects'],
  },
  {
    name: 'Corporate Edge',
    category: 'Professional',
    gradient: 'from-slate-100 to-zinc-200',
    accent: '#334155',
    sections: ['Summary', 'Skills', 'Experience'],
  },
  {
    name: 'Dev Terminal',
    category: 'Developer',
    gradient: 'from-emerald-50 to-teal-50',
    accent: '#059669',
    sections: ['Code', 'Projects', 'GitHub'],
  },
  {
    name: 'AI Scientist',
    category: 'Deep Tech & ML',
    gradient: 'from-sky-50 to-blue-50',
    accent: '#0284c7',
    sections: ['Research', 'Neural Nets', 'Publications'],
  },
  {
    name: 'SaaS Founder',
    category: 'Startup Vision',
    gradient: 'from-amber-50 to-orange-50',
    accent: '#ea580c',
    sections: ['Pitch Deck', 'ARR Metrics', 'Roadmap'],
  },
];

const TemplatesSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <SectionWrapper id="templates" variant="fadeUp" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3"
          >
            Template Gallery
          </motion.p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
            Start with an AI-crafted template
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Choose from professionally engineered themes designed for every tech discipline. Click any card to preview interactive skills and project showcases.
          </p>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((template, i) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div onClick={() => setSelectedTemplate(template)}>
                <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden cursor-pointer group h-full shadow-xs hover:shadow-xl transition-all duration-300">
                  {/* Template preview */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${template.gradient} p-5 overflow-hidden border-b border-slate-100`}>
                    {/* Mockup content lines */}
                    <div className="space-y-3 mt-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg shadow-2xs flex items-center justify-center text-white font-bold text-xs"
                          style={{ backgroundColor: template.accent }}
                        >
                          {template.name[0]}
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <div className="h-2.5 bg-slate-400/30 rounded-full w-2/3" />
                          <div className="h-1.5 bg-slate-300/40 rounded-full w-1/3" />
                        </div>
                      </div>
                      <div className="h-[1px] bg-slate-200/60 my-3" />
                      <div className="grid grid-cols-3 gap-2">
                        {template.sections.map((s) => (
                          <div key={s} className="space-y-1.5 bg-white/70 p-2 rounded.lg border border-slate-200/50">
                            <div className="text-[9px] uppercase tracking-wider text-slate-700 font-bold">{s}</div>
                            <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                            <div className="h-1.5 bg-slate-100 rounded-full w-3/4" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="text-xs font-bold text-white px-4 py-2.5 rounded-lg bg-slate-900 shadow-md">
                        Preview Interactive Theme
                      </span>
                    </div>
                  </div>

                  {/* Template info */}
                  <div className="p-5 bg-white flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{template.name}</h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{template.category}</p>
                    </div>
                    <span className="text-xs text-slate-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Open View →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        isOpen={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        template={selectedTemplate}
      />
    </SectionWrapper>
  );
};

export default TemplatesSection;
