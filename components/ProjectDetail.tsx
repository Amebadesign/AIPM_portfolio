import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// Helper to parse bold tags <b>text</b>
const renderContent = (content: string) => {
  const parts = content.split(/(<b>.*?<\/b>)/g);
  return parts.map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <strong key={index} className="font-bold text-neutral-900">
          {part.slice(3, -4)}
        </strong>
      );
    }
    return part;
  });
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const project = t.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      // Offset for fixed navbar and top spacing (approx 100px)
      const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h2 className="text-xl font-medium text-neutral-900">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-neutral-500 hover:text-neutral-900 underline"
          >
            {t.labels.backToHome}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light mb-6"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
            >
              {project.summary}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        {/* Top Metadata Grid - Aligned with Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-neutral-200 pb-12">
          {/* Spacer to align with sidebar column (3 cols) */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Metadata Content - Aligned with main content column (9 cols) */}
          <div className="col-span-1 lg:col-span-9 flex flex-col md:flex-row justify-between gap-8">
            {/* Role */}
            <div>
              <h4 className="text-xs font-bold text-neutral-400 uppercase mb-2 tracking-wider">
                {t.labels.projectRole}
              </h4>
              <p className="text-base text-neutral-900 font-medium">
                {project.role}
              </p>
            </div>

            {/* Tech Stack / Keywords */}
            <div className="md:text-right">
              <h4 className="text-xs font-bold text-neutral-400 uppercase mb-2 tracking-wider">
                {language === "zh" ? "关键词" : "Key Words"}
              </h4>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 px-4">
                {language === "zh" ? "目录" : "Contents"}
              </h5>
              <nav className="space-y-1 relative">
                {/* Decorative Line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />

                {project.details.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className="block text-sm text-neutral-500 hover:text-purple-600 hover:font-medium transition-all text-left w-full py-2 pl-6 relative group"
                  >
                    {/* Gradient Line */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-0 bg-gradient-to-b from-pink-500 to-indigo-500 group-hover:h-full transition-all duration-300" />
                    {String(index + 1).padStart(2, "0")} {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Sections Content */}
          <div className="lg:col-span-9 space-y-24">
            {project.details.map((section, index) => {
              // Combine singular image and plural images into one array for rendering
              const images =
                section.images || (section.image ? [section.image] : []);

              return (
                <motion.div
                  key={index}
                  id={`section-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-4">
                        <span className="text-neutral-200 font-light text-xl tracking-tighter">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </h3>
                      <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-lg font-light">
                        <p className="whitespace-pre-line">
                          {renderContent(section.content)}
                        </p>
                      </div>
                    </div>

                    {/* Render all images for this section */}
                    {images.map((imgSrc, imgIndex) => (
                      <div key={imgIndex} className="mt-6 overflow-hidden rounded-sm bg-neutral-100">
                        <img
                          src={imgSrc}
                          alt={`${section.title} ${imgIndex + 1}`}
                          className="w-full object-cover hover:scale-[1.01] transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Bottom Nav */}
        <div className="mt-24 pt-12 border-t border-neutral-200 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t.labels.backToHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
