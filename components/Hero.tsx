import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactInfo } from '../data';

const IconMap = {
  School: GraduationCap,
  Trophy: Trophy,
  Rocket: Rocket
};

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const titleSizeClass = language === 'en' 
    ? "text-2xl md:text-3xl lg:text-4xl" 
    : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <section id="hero" className="relative pt-36 pb-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div id="about" className="absolute top-0 left-0 w-full h-10 scroll-mt-32 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20 items-center md:items-stretch">
          
          <div className="w-full md:w-1/3 lg:w-[28%] flex-shrink-0 flex flex-col justify-center relative group">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              // Modified shadow: deeper purple, bottom-right direction
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[12px_12px_40px_-10px_rgba(168,85,247,0.3)] border border-neutral-100 bg-white group-hover:border-purple-200 transition-colors duration-500"
            >
              <img 
                src={contactInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col justify-center py-2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
                <h1 className={`${titleSizeClass} font-light text-neutral-900 leading-[1.4] mb-8 tracking-tight`}>
                  {t.about.bio}
                </h1>
                
                {t.about.details && (
                  <div className="text-neutral-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light">
                    <p>{t.about.details}</p>
                  </div>
                )}
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} 
                className="flex flex-wrap gap-3"
             >
                {t.hero.tags.map((tag) => (
                  <span key={tag} className="bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full text-sm text-neutral-600 font-medium hover:bg-pink-50 hover:text-purple-600 hover:border-purple-200 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
             </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {t.about.stats.map((stat, index) => {
            const Icon = IconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                // Added distinct bottom-right pale purple shadow
                className="group bg-white p-6 rounded-2xl border border-neutral-100 shadow-[6px_6px_20px_rgba(168,85,247,0.15)] hover:shadow-[8px_8px_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  {/* Gradient Icon Background */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center text-purple-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-sm tracking-wide uppercase">{stat.label}</h3>
                </div>
                <div className="space-y-1 relative z-10">
                    <h4 className="font-medium text-xl text-neutral-900">{stat.title}</h4>
                    {stat.summary && <p className="text-sm text-neutral-500">{stat.summary}</p>}
                </div>
                
                <div className="max-h-0 overflow-hidden group-hover:max-h-64 transition-[max-height] duration-500 ease-in-out relative z-10">
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {stat.details.map((detail, idx) => (
                            <p key={idx} className="text-xs text-neutral-500 flex items-start gap-2">
                                {/* Gradient dot */}
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400 shrink-0" />
                                <span>{detail}</span>
                            </p>
                        ))}
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;