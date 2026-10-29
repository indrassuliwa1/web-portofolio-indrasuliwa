import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "../ui/GlassCard";
import { GithubIcon } from "../ui/Icons";
import { PROJECTS_DATA } from "../../utils/sectionData";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      badge="Portofolio Proyek"
      title="Proyek Pilihan"
      subtitle="Kumpulan aplikasi web fungsional yang dibangun dengan React, Python Flask, dan ekosistem modern."
    >
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {PROJECTS_DATA.map((proj) => (
          <motion.div key={proj.id} variants={cardItemVariants}>
            <GlassCard variant="interactive" className="h-full flex flex-col justify-between overflow-hidden group">
              <div>
                {/* Project Image Thumbnail */}
                <div className="relative w-full h-48 overflow-hidden bg-purple-950/40 border-b border-white/10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B4E]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-semibold text-cyan-300 bg-black/60 border border-cyan-500/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-200/80 mb-5 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-purple-200/90 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub Repo */}
              <div className="p-6 pt-0 border-t border-white/10 mt-auto flex items-center justify-between gap-3 pt-4">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/40 hover:bg-purple-600/60 border border-purple-400/40 text-white text-xs font-medium transition-all shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
