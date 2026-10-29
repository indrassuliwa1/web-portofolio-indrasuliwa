import React from "react";
import { Sparkles, Mail } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../utils/sectionData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 px-4 sm:px-8 py-12 max-w-7xl mx-auto">
      <GlassCard className="p-8 sm:p-10" variant="default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-base">
                INDRA SULIWA &bull; FULL STACK DEVELOPER
              </p>
              <p className="text-xs text-purple-200/60 font-sans">
                {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-purple-600/30 hover:border-purple-400/40 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-purple-600/30 hover:border-purple-400/40 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white hover:bg-purple-600/30 hover:border-purple-400/40 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-200/50">
          <p>© {currentYear} Indra Suliwa. Hak Cipta Dilindungi.</p>
          <p className="font-mono text-purple-300/40">
            React &bull; Three.js &bull; Tailwind CSS &bull; Framer Motion
          </p>
        </div>
      </GlassCard>
    </footer>
  );
}
