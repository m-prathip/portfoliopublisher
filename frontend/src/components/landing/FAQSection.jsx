import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';

const FAQS = [
  {
    q: 'Is Portfolio Publisher really free to use?',
    a: 'Yes! The free plan includes a complete portfolio page, personal URL, QR code, and basic templates. You can upgrade to Pro anytime for advanced features like AI generation, analytics, and custom domains.',
  },
  {
    q: 'How long does it take to create a portfolio?',
    a: 'Most users have a polished, professional portfolio live in under 10 minutes. With the AI portfolio generator (Pro plan), it takes under 60 seconds — just describe yourself and we handle the rest.',
  },
  {
    q: 'Can I use my own custom domain?',
    a: 'Absolutely. Pro and Team plans support custom domains. You can connect your own domain (e.g., alexchen.com) and we handle SSL certificates, routing, and DNS configuration.',
  },
  {
    q: 'Is my portfolio optimized for ATS systems?',
    a: 'Yes. All portfolios and exported resumes are ATS-optimized with proper heading structure, semantic HTML, and clean formatting that applicant tracking systems can parse easily.',
  },
  {
    q: 'Can recruiters see my analytics?',
    a: 'No. Analytics are private and only visible to you. Recruiters see your beautifully designed portfolio — you see the data behind it (views, visitor locations, top sections, etc.).',
  },
  {
    q: 'What happens if I cancel my Pro subscription?',
    a: 'Your portfolio stays live on the free plan. You keep your personal URL and QR code. Premium features like analytics and custom domains will be paused until you reactivate.',
  },
  {
    q: 'Can I export my resume as a PDF?',
    a: 'Yes. Pro users can export their portfolio content as a beautifully formatted PDF resume with one click. Choose from multiple ATS-friendly resume templates.',
  },
  {
    q: 'Do you support team accounts?',
    a: 'Yes! The Team plan supports up to 50 members with a centralized dashboard, custom branding, and recruiter-specific analytics. Perfect for bootcamps, universities, and companies.',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="border-b border-slate-200/80"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
    >
      <span className="text-base font-bold text-slate-900 group-hover:text-slate-600 transition-colors duration-200 pr-8">
        {faq.q}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:border-slate-400 group-hover:bg-slate-100 transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="text-base text-slate-600 leading-relaxed pb-6 pr-8 font-normal">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <SectionWrapper id="faq" variant="fadeUp" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3"
          >
            FAQ
          </motion.p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ items */}
        <div className="bg-white border border-slate-200/80 rounded-2xl px-6 sm:px-8 shadow-xs">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
