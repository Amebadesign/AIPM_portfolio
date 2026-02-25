import React from 'react';
import { contactInfo } from '../data';
import { MapPin, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8"
          >
            {t.labels.getInTouch}
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href={`mailto:${contactInfo.email}`} 
            className="text-xl md:text-3xl font-light text-neutral-800 hover:text-purple-600 transition-colors underline decoration-1 underline-offset-8 decoration-neutral-300 hover:decoration-purple-300"
          >
            {contactInfo.email}
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-8 text-sm text-neutral-500"
        >
          <div className="flex items-center gap-2 justify-center">
            <MapPin size={16} />
            <span>{contactInfo.location}</span>
          </div>
          <div className="hidden md:block text-neutral-300">|</div>
          <button className="flex items-center gap-2 justify-center hover:text-neutral-900 transition-colors">
            <Download size={16} />
            <span>{t.labels.downloadResume}</span>
          </button>
        </motion.div>

        <div className="pt-12 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {t.labels.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;