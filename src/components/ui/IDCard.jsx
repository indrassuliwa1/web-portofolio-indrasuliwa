import React from "react";
import { Award, BookOpen, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../../utils/sectionData";

export default function IDCard() {
  return (
    <motion.div 
      className="id-card-container"
      initial={{ opacity: 0, y: -80, rotateZ: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.34, 1.56, 0.64, 1],
        rotateZ: { duration: 1.4 }
      }}
    >
      <div className="id-card glass-panel-interactive">
        {/* Lanyard Hole */}
        <div className="lanyard-hole" />

        {/* Header Stripe */}
        <div className="id-card-header">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-cyan-300" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Space Crew ID
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
          </div>
        </div>

        {/* Profile Photo */}
        <div className="id-card-photo-wrapper">
          <img
            src="/foto.jpeg"
            alt="Indra Suliwa"
            className="id-card-photo"
          />
          <div className="photo-border" />
        </div>

        {/* Name Badge */}
        <div className="text-center mt-4 mb-3">
          <h3 className="font-heading font-bold text-xl text-white mb-0.5">
            Indra Suliwa
          </h3>
          <p className="text-xs text-purple-300/70 uppercase tracking-widest font-mono">
            Full Stack Developer
          </p>
        </div>

        {/* Education Info */}
        <div className="id-card-section">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <span className="text-[10px] text-purple-300/60 uppercase font-mono tracking-wider">
              Pendidikan Formal
            </span>
          </div>
          <h4 className="font-heading font-bold text-base text-white mb-1">
            {ABOUT_DATA.education.degree}
          </h4>
          <p className="text-xs text-purple-200/80 mb-2">
            {ABOUT_DATA.education.campus}
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-xs font-bold text-cyan-300">
              IPK: {ABOUT_DATA.education.gpa}
            </span>
            <span className="text-[10px] text-cyan-400/70">(Sangat Memuaskan)</span>
          </div>
        </div>

        {/* Divider */}
        <div className="id-card-divider" />

        {/* Specialization Info */}
        <div className="id-card-section">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
              <Award className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <span className="text-[10px] text-purple-300/60 uppercase font-mono tracking-wider">
              Spesialisasi
            </span>
          </div>
          <h4 className="font-heading font-bold text-base text-white mb-1.5">
            Web Application & Modules
          </h4>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Pengembangan antarmuka reaktif (ReactJS) dan backend tangguh (Laravel, PHP, MySQL, REST API).
          </p>
        </div>

        {/* Footer Badge */}
        <div className="id-card-footer">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
            <div className="text-[9px] text-purple-300/50 uppercase tracking-widest font-mono">
              Verified Space Engineer • Active
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
