import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard variant="interactive" className="h-full flex flex-col justify-between p-6">
        <div>
          {/* Card Top Header: Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-medium text-purple-300/80 bg-purple-950/60 border border-purple-500/20 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            {project.badge && (
              <span className="flex items-center gap-1 text-[11px] font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                {project.badge}
              </span>
            )}
          </div>

          {/* Project Title & Gradient Accent */}
          <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-purple-200/70 mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-purple-200/90 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Live links and Stars */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-purple-300/60">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{project.stars}</span>
            <span className="mx-1">&bull;</span>
            <span className="text-purple-300/40">{project.stats}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-purple-200 hover:text-white transition-all"
              title="View source repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/30 text-white text-xs font-medium transition-all"
            >
              <span>Explore</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
