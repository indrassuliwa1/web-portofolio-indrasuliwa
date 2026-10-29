import React from "react";
import { User, Layers } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "../ui/GlassCard";
import IDCard from "../ui/IDCard";
import { ABOUT_DATA } from "../../utils/sectionData";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      badge="Tentang Saya"
      title="Profil & Dedikasi"
      subtitle="Fokus pada rekayasa perangkat lunak modern, performa tinggi, dan solusi web fungsional."
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
        {/* Main Bio Card */}
        <GlassCard className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between" variant="interactive">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <User className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Full Stack Web Developer
            </h3>
            <p className="text-sm sm:text-base text-purple-200/85 leading-relaxed font-sans">
              {ABOUT_DATA.bio}
            </p>
          </div>

          {/* Hard Skills */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-purple-300/70 mb-3 font-medium">
              <Layers className="w-3.5 h-3.5" />
              <span>Hard Skills & Keahlian Teknis:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/25 text-purple-100 font-mono shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* ID Card */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <IDCard />
        </div>
      </div>
    </SectionWrapper>
  );
}
