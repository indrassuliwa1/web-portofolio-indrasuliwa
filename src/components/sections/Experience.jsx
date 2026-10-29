import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "../ui/GlassCard";
import { EXPERIENCE_DATA } from "../../utils/sectionData";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      badge="Pengalaman Kerja"
      title="Riwayat Profesional"
      subtitle="Pengalaman magang, studi independen, dan peran kepemimpinan teknis dalam pengembangan software."
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Center Vertical Timeline Bar */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-purple-500/10 -translate-x-1/2" />

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.company + item.role}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Center glowing node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-[0_0_12px_rgba(168,85,247,0.8)] -translate-x-1/2 z-10" />

                {/* Alternating Slide-In Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`pl-10 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10 md:text-left"
                  }`}
                >
                  <GlassCard variant="interactive" className="p-6">
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-purple-300/80 mb-3 flex items-center gap-1.5 md:inline-flex">
                      <Briefcase className="w-3.5 h-3.5" />
                      {item.company}
                    </div>

                    <p className="text-xs sm:text-sm text-purple-200/80 mb-4 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-purple-200/90 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
