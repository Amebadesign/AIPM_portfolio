import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Methods: React.FC = () => {
  const { t } = useLanguage();

  const formatStatValue = (val: string) => {
    const match = val.match(/^(.+)([个次张字])$/);
    if (match) {
      const [, number, unit] = match;
      return (
        <span className="inline-flex items-start whitespace-nowrap leading-none">
          <span>{number}</span>
          {/* Changed unit color to gradient text */}
          <span className="text-lg md:text-2xl font-bold ml-1 mt-1 lg:mt-2 opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">{unit}</span>
        </span>
      );
    }
    return val;
  };

  return (
    <section id="methods" className="min-h-screen flex flex-col justify-center py-24 w-full bg-neutral-50">
      
      <div className="relative z-20">
        <div className="flex flex-col items-center text-center mb-10 space-y-4 max-w-6xl mx-auto px-6 w-full">
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight"
            >
            {t.labels.methodsTitle}
            </motion.h2>
            <p className="text-neutral-500 font-light text-lg">{t.labels.methodsSubtitle}</p>
        </div>

        <div className="w-full mb-12 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {t.philosophy.stats.map((stat, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Added deeper pale purple shadow with bottom-right direction
                className="text-center p-6 flex flex-col items-center justify-center bg-white rounded-xl border border-neutral-100 shadow-[5px_5px_20px_rgba(168,85,247,0.15)]"
                >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    {formatStatValue(stat.value)}
                </div>
                <p className="text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-wide">
                    {stat.label}
                </p>
                </motion.div>
            ))}
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-6xl mx-auto px-6"
        >
            <p className="text-xl text-neutral-800 leading-relaxed mb-8 text-center w-full max-w-6xl mx-auto font-light">
            {t.philosophy.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {t.philosophy.points.map((point, i) => (
                // Added deeper pale purple shadow on hover with direction
                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-[5px_5px_20px_rgba(168,85,247,0.15)] transition-all duration-300 group">
                <div className="flex items-center gap-3">
                    {/* Gradient bullet */}
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 shrink-0 shadow-sm shadow-purple-200" />
                    <h4 className="text-lg font-bold text-neutral-900 group-hover:text-purple-600 transition-colors">
                        {point.title}
                    </h4>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed pl-6">
                    {point.content}
                </p>
                </div>
            ))}
            </div>

            {/* Added deeper pale purple shadow with direction */}
            <div className="text-center w-full mx-auto bg-white p-8 rounded-2xl border border-neutral-100 shadow-[6px_6px_25px_rgba(168,85,247,0.15)]">
             <p className="text-xl md:text-2xl font-bold text-neutral-900 leading-relaxed font-sans">
                {t.philosophy.conclusion}
             </p>
            </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Methods;