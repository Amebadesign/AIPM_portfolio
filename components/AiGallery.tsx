import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const AiGallery: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleCategoryClick = (id: string) => {
    navigate(`/ai-gallery/${id}`);
  };

  return (
    <section id="ai-works" className="pt-24 pb-40 bg-neutral-100/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16 space-y-8 max-w-3xl mx-auto">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight"
           >
             {t.labels.aiWorks}
           </motion.h2>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl font-light"
           >
             {t.labels.aiWorksDesc}
           </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.aiCategories?.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3 transition-colors duration-300 group-hover:border-purple-300">
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <ArrowRight size={18} className="text-neutral-300 group-hover:text-purple-500 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>

              {/* Updated shadow to deeper purple with bottom-right direction */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white shadow-[5_5px_20px_rgba(168,85,247,0.15)] group-hover:shadow-[8px_8px_30px_rgba(168,85,247,0.25)] transition-shadow duration-300">
                <img 
                  src={category.coverImage} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay text on hover */}
                <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-sm font-light tracking-wide leading-relaxed text-center font-sans">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiGallery;