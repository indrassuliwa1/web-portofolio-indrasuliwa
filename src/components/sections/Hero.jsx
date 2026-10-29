import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Rocket, Send, Sparkles, GraduationCap } from "lucide-react";
import Button from "../ui/Button";
import CodeTerminal from "../ui/CodeTerminal";
import { GithubIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../utils/sectionData";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeDownVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const terminalVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.25, ease: "easeOut" } },
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.45, staggerChildren: 0.12 },
  },
};

const buttonItemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      className="relative pt-8 sm:pt-16 pb-16 min-h-[82vh] flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Hero Text & Actions */}
        <motion.div variants={textContainerVariants} className="lg:col-span-7 space-y-6">
          {/* Welcome Badge & Status */}
          <motion.div variants={fadeDownVariant} className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-200 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selamat Datang di Portofolio Saya</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeDownVariant}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-6xl leading-[1.15] text-white tracking-tight"
          >
            {PERSONAL_INFO.headline}
          </motion.h1>

          {/* Typewriter Effect Cycling Through Roles */}
          <motion.div
            variants={fadeDownVariant}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-purple-200/90 flex flex-wrap items-center gap-2 min-h-[44px]"
          >
            <span className="text-purple-300/60">I am a</span>
            <TypeAnimation
              sequence={PERSONAL_INFO.typewriterRoles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="cosmic-text-gradient font-bold drop-shadow-sm"
            />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            variants={fadeDownVariant}
            className="text-base sm:text-lg text-purple-200/80 leading-relaxed font-sans max-w-2xl"
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>

          {/* Key Quick Badges */}
          <motion.div variants={fadeDownVariant} className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-400/20 text-purple-200 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>S1 Teknik Informatika • IPK 3.83</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-cyan-400/20 text-cyan-200 text-xs font-mono">
              <span className="text-cyan-400 font-bold">⚡</span>
              <span>Full Stack Web Development</span>
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            className="flex flex-wrap items-center gap-3.5 pt-3"
          >
            <motion.div variants={buttonItemVariant}>
              <Button
                variant="primary"
                size="lg"
                icon={Rocket}
                onClick={() => scrollTo("projects")}
              >
                Lihat Proyek
              </Button>
            </motion.div>
            <motion.div variants={buttonItemVariant}>
              <Button
                variant="glass"
                size="lg"
                icon={Send}
                onClick={() => scrollTo("contact")}
              >
                Hubungi Saya
              </Button>
            </motion.div>
            <motion.div variants={buttonItemVariant}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-white text-sm font-medium transition-all backdrop-blur-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Code Terminal */}
        <motion.div
          variants={terminalVariant}
          className="lg:col-span-5 w-full flex items-center justify-center pt-4 lg:pt-0"
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </motion.section>
  );
}
