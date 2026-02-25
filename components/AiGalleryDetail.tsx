import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const AiGalleryDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const category = t.aiCategories?.find((c) => c.id === id);
  const works = t.aiWorks.filter((w) => w.category === id);

  // ✨ 核心修复：智能分拣作品类型
  // 1. 复杂图文项目（比如摸鱼鱼）
  const detailedWorks = works.filter(
    (w) => w.sections && w.sections.length > 0
  );
  // 2. 纯图片项目（比如艺术设计、平面设计）
  const simpleWorks = works.filter(
    (w) => !w.sections || w.sections.length === 0
  );

  // 判断是否为平面设计（请把 'graphic-design' 换成你 data.ts 里真实的平面设计 ID）
  const isGridLayout = id === "graphic-design";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h2 className="text-xl font-medium text-neutral-900">
            Category Not Found
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
    <div className="bg-neutral-50 min-h-screen pb-24 relative">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={category.coverImage}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center pt-32 md:pt-44">
          <div className="max-w-4xl px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {category.title}
            </h1>
            <p className="text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Navigation Section */}
        <div className="mb-12">
          <div className="border-b border-neutral-200 pb-4">
            <nav className="flex flex-wrap md:flex-nowrap justify-center items-center w-full gap-6">
              {t.aiCategories?.map((cat) => {
                const isActive = cat.id === id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => navigate(`/ai-gallery/${cat.id}`)}
                    className={`text-base md:text-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-neutral-900 font-medium"
                        : "text-neutral-400 hover:text-neutral-900 font-light"
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ======================= 类型1：复杂图文项目 (摸鱼鱼) ======================= */}
        {detailedWorks.map((work, index) => (
          <motion.div
            key={`detail-${work.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-24"
          >
            <div className="py-4">
              {/* 顶部：封面 + 标题 + 标签 + 下载 */}
              <div className="flex flex-col md:flex-row gap-10 mb-12">
                <div className="w-full md:w-80 flex-shrink-0">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-auto rounded-2xl shadow-lg block"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h1 className="text-3xl font-bold text-neutral-900 mb-6">
                      {work.title}
                    </h1>
                    <p className="text-base text-neutral-600 leading-relaxed mb-8">
                      职场桌面摸鱼搭子：通过桌面宠物陪伴，帮助职场人在工作间隙放松心情。在追求效率的现代办公环境下，职场人往往缺乏一个私密且不被打扰的情绪出口，本项目利用AIGC技术，在用户桌面上构建一个微型、轻量化的陪伴式IP角色。
                    </p>
                    <a
                      href="assets/touchfish_Setup 1.0.0.exe"
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-all shadow-md group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <span>下载安装包</span>
                    </a>
                  </div>
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-10 md:mt-0">
                      {work.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full font-medium border border-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 前三个段落 (01, 02, 03) */}
              <div className="space-y-10 mb-16">
                {work.sections?.slice(0, 3).map((section, idx) => (
                  <div
                    key={`part1-${idx}`}
                    className="border-t border-neutral-100 pt-8"
                  >
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* GIFs 展示网格 (插队在中间) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
                {[1, 2, 3, 4].map((num) => {
                  const gif = work.gifs?.[num - 1];
                  return (
                    <div
                      key={num}
                      className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative shadow-sm border border-neutral-100"
                    >
                      {gif ? (
                        <img
                          src={gif}
                          alt={`${work.title} gif ${num}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs">
                          PREVIEW {num}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 剩下的段落 (04及以后) */}
              {work.sections && work.sections.length > 3 && (
                <div className="space-y-10">
                  {work.sections.slice(3).map((section, idx) => (
                    <div
                      key={`part2-${idx}`}
                      className="border-t border-neutral-100 pt-8"
                    >
                      <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                        {section.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* ======================= 类型2：纯图片项目 (艺术设计、平面设计等) ======================= */}
        {simpleWorks.length > 0 && (
          <div
            className={
              isGridLayout
                ? "grid grid-cols-2 md:grid-cols-4 gap-4"
                : "columns-2 md:columns-3 lg:columns-4 gap-4"
            }
          >
            {simpleWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  isGridLayout ? "" : "break-inside-avoid mb-4"
                }`}
              >
                <div className="overflow-hidden rounded-sm bg-neutral-200 relative w-full shadow-sm">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {works.length === 0 && (
          <div className="py-20 text-center text-neutral-400">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiGalleryDetail;
