import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/project/${project.id}`);
  };
  
  const keyPoints = [project.background, project.system, project.outcome].filter(Boolean).slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      // Updated shadow to deeper purple with bottom-right direction
      className="group relative bg-white rounded-3xl border border-neutral-100 shadow-[8px_8px_30px_rgba(168,85,247,0.15)] hover:shadow-[12px_12px_40px_rgba(168,85,247,0.25)] transition-all duration-300 mb-16 overflow-hidden flex flex-col md:flex-row min-h-[500px]"
    >
      <div 
        className="w-full md:w-5/12 relative cursor-pointer overflow-hidden"
        onClick={handleNavigation}
      >
        <img 
        src={project.coverImage} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
         
         <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-2 gap-x-4 mb-8">
             <div className="flex items-center gap-3">
                 {/* Gradient Pill */}
                 <span className="bg-gradient-to-r from-pink-50 to-indigo-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-purple-100">
                   {project.category}
                 </span>
                 <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                   {project.role}
                 </span>
             </div>
             <span className="text-xs font-medium text-neutral-400 font-mono shrink-0">
               {project.date}
             </span>
         </div>

         <h3 
           onClick={handleNavigation}
           // Gradient Hover Text
           className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-indigo-600 transition-all tracking-tight"
         >
           {project.title}
         </h3>

         <p className="text-neutral-600 leading-relaxed mb-8 text-sm md:text-base font-light">
           {project.summary}
         </p>

         <div className="space-y-4 mb-10 flex-grow">
           {keyPoints.map((point, i) => (
             <div key={i} className="flex items-start gap-3">
                {/* Purple Checkmark */}
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-600 leading-relaxed font-medium">{point}</span>
             </div>
           ))}
         </div>

         <button 
           onClick={handleNavigation}
           className="self-start inline-flex items-center gap-2 text-neutral-900 font-semibold hover:gap-3 hover:text-purple-600 transition-all text-sm tracking-wide group/btn"
         >
           <span className="border-b-2 border-transparent group-hover/btn:border-purple-600 transition-all duration-300">{t.labels.viewCase}</span>
           <ArrowRight size={16} />
         </button>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="pt-32 pb-20 max-w-6xl mx-auto px-6">
       <div className="flex flex-col items-center text-center mb-8 space-y-4 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight"
          >
            {t.labels.selectedProjects}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl font-light"
          >
            {t.labels.projectsDesc}
          </motion.p>
       </div>
       
       <div className="flex flex-col">
         {t.projects.map((project, index) => (
           <ProjectCard key={project.id} project={project} index={index} />
         ))}
       </div>
    </section>
  );
};

export default Projects;