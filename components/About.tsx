import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4"
            >
              {t.labels.background}
            </motion.h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-neutral-800 leading-relaxed"
            >
              {t.about.bio}
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="prose prose-neutral text-neutral-600 leading-7 max-w-none"
            >
              <p>{t.about.details}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-neutral-200"
            >
              <div className="flex items-center space-x-4">
                 <div className="h-12 w-1 bg-neutral-900"></div>
                 <div>
                    <h3 className="font-medium text-neutral-900">{t.about.education.school}</h3>
                    <p className="text-sm text-neutral-500">{t.about.education.degree}</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;