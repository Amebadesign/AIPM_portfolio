import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Building2,
  Target,
  Lightbulb,
  Cpu,
  Shield,
  TrendingUp,
  Database,
  Zap,
} from "lucide-react";

const Internship: React.FC = () => {
  const { t } = useLanguage();

  const IconMap = {
    Target: Target,
    Lightbulb: Lightbulb,
    Cpu: Cpu,
    Shield: Shield,
  };

  // Split reasons: first one is main point, rest are sub-points
  const mainReason = t.internship.reasons[0];
  const subReasons = t.internship.reasons.slice(1);

  return (
    <section
      id="internship"
      className="min-h-screen flex flex-col justify-center py-24 w-full bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight"
          >
            {t.labels.internshipTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl font-light"
          >
            {t.labels.internshipSubtitle}
          </motion.p>
        </div>

        {/* Company & Role Card - Minimal white with shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-white rounded-2xl border border-neutral-100 shadow-[8px_8px_30px_rgba(168,85,247,0.15)] p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {t.internship.company}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  {t.internship.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-neutral-50 rounded-full">
              <TrendingUp size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-neutral-700">
                {t.internship.role}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Dimensions Grid - 3 columns in one row */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">
            {t.internship.dimensionsLabel}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.internship.dimensions.map((dimension, index) => {
              const Icon = IconMap[dimension.icon as keyof typeof IconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-[8px_8px_30px_rgba(168,85,247,0.15)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center text-purple-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <h5 className="text-base font-bold text-neutral-900 leading-tight">
                      {dimension.title}
                    </h5>
                  </div>

                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-3">
                    {t.labels.evaluationCriteria}
                  </p>

                  <div className="space-y-3">
                    {dimension.criteria.map((criterion, idx) => (
                      <div
                        key={idx}
                        className="pl-3 border-l-2 border-purple-100"
                      >
                        <h6 className="text-xs font-semibold text-neutral-700 mb-1">
                          {criterion.name}
                        </h6>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          {criterion.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reasons Section */}
        <div>
          {/* Main Reason - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-6 bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Lightbulb size={16} />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-900 mb-2">
                  {t.labels.internshipReasons}
                </h5>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {mainReason}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sub Reasons - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subReasons.map((reason, idx) => {
              const ReasonIcon = idx === 0 ? Database : Zap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-[6px_6px_20px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white flex-shrink-0">
                      <ReasonIcon size={16} />
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {reason}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
