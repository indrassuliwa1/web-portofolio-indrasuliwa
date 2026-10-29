import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { GitCommit, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "../ui/GlassCard";
import { TOP_LANGUAGES } from "../../utils/sectionData";

// Cosmic theme for the GitHub contribution calendar
const cosmicCalendarTheme = {
  dark: ["#160c29", "#3c2064", "#7e22ce", "#a855f7", "#38bdf8"],
};

export default function GithubActivity() {
  return (
    <SectionWrapper
      id="github-activity"
      badge="Telemetry & Telepresence"
      title="Open Source Activity"
      subtitle="Live contribution stream and programming language telemetry for @nyimpencode."
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <GlassCard className="p-6 sm:p-8 max-w-5xl mx-auto space-y-8" variant="default">
        {/* Top: GitHub Calendar */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-purple-400" />
              <span className="font-heading font-bold text-white text-base sm:text-lg">
                Contribution Heatmap
              </span>
            </div>
            <a
              href="https://github.com/indrassuliwa1"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              <span>@indrassuliwa1</span>
              <Sparkles className="w-3 h-3" />
            </a>
          </div>

          <div className="overflow-x-auto py-2 flex justify-center text-slate-200">
            <GitHubCalendar
              username="indrassuliwa1"
              colorScheme="dark"
              theme={cosmicCalendarTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>

        {/* Bottom: Top Languages Progress Bar */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-purple-200/80 font-medium">
            <span>Primary Cosmic Languages</span>
            <span className="text-purple-300/50">Repository Analytics</span>
          </div>

          {/* Segmented Bar */}
          <div className="w-full h-3 rounded-full overflow-hidden bg-purple-950/80 flex border border-white/10">
            {TOP_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percent}%`}
                className="h-full transition-all duration-500 hover:brightness-125"
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {TOP_LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5 text-xs">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-slate-200 font-medium">{lang.name}</span>
                <span className="text-purple-200/50 font-mono">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
