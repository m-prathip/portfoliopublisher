import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 text-white rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-slate-800"
      >
        {/* Subtle grid pattern inside CTA card */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-[-0.035em] mb-5">
            Ready to build your portfolio?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
            Join thousands of professionals who've elevated their career with a stunning portfolio. It takes less than 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/auth/signup"
              className="inline-flex items-center justify-center font-bold text-slate-900 bg-white hover:bg-slate-100 px-8 py-4 rounded-xl shadow-md transition-all duration-200 text-base w-full sm:w-auto"
            >
              <span>Create Free Portfolio</span>
              <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Free forever plan
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Setup in 10 minutes
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
