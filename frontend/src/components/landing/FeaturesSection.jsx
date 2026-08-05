import { motion } from 'framer-motion';
import { FiCpu, FiLayout, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    title: 'AI Assistant',
    description: 'An intelligent assistant embedded in your portfolio to answer questions about your skills and experience instantly.',
    icon: <FiCpu className="w-6 h-6 text-slate-900" />,
  },
  {
    title: 'Beautiful Templates',
    description: 'Choose from a curated selection of premium, highly-responsive themes designed to make your work stand out.',
    icon: <FiLayout className="w-6 h-6 text-slate-900" />,
  },
  {
    title: 'Recruiter Analytics',
    description: 'Track who visits your portfolio, what they view, and how they interact with your content in real-time.',
    icon: <FiTrendingUp className="w-6 h-6 text-slate-900" />,
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A streamlined experience focused entirely on getting you hired.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
