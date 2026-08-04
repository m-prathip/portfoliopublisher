import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GradientText from './GradientText';
import GlassCard from './GlassCard';

const QRGeneratorSection = () => (
  <SectionWrapper variant="fadeUp" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 border-y border-slate-200/60">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — QR mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          {/* QR Code display */}
          <div className="relative">
            <div className="p-8 sm:p-12 bg-white border border-slate-200/80 rounded-2xl shadow-xl">
              <div className="text-center mb-5">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-mono font-semibold">Your Personal QR Code</p>
              </div>
              {/* Animated QR grid */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto grid grid-cols-11 gap-[2px] p-2 bg-slate-50 rounded-xl border border-slate-100">
                {Array.from({ length: 121 }).map((_, i) => {
                  const isCorner = (i < 33 && (i % 11 < 3 || (i >= 0 && i < 3))) ||
                    (i >= 88 && i % 11 < 3);
                  const show = isCorner || Math.sin(i * 2.7) > -0.3;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: show ? 1 : 0.05, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.005, duration: 0.2 }}
                      className="rounded-[1.5px]"
                      style={{
                        backgroundColor: show
                          ? '#0f172a'
                          : 'rgba(241, 245, 249, 0.8)',
                      }}
                    />
                  );
                })}
              </div>
              <div className="text-center mt-5">
                <p className="text-xs text-slate-500 font-mono">portfoliopub.com/u/yourname</p>
              </div>
            </div>

            {/* Scan line animation */}
            <motion.div
              className="absolute left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-40"
              animate={{ top: ['20%', '82%', '20%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Right — Text content */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3"
          >
            QR Code Generator
          </motion.p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-[-0.03em] mb-4">
            Share your portfolio instantly anywhere
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Every portfolio gets a unique, scannable QR code. Print it on your resume, business card, or presentation — recruiters scan and see your full portfolio in seconds.
          </p>

          <div className="space-y-4">
            {[
              { title: 'Instant Generation', desc: 'QR code created automatically when you publish.', icon: '⚡' },
              { title: 'Custom Branding', desc: 'Match your portfolio theme and accent colors.', icon: '🎨' },
              { title: 'Scan Analytics', desc: 'Track who scans and when recruiters visit.', icon: '📊' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-lg flex-shrink-0 group-hover:border-slate-400 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default QRGeneratorSection;
