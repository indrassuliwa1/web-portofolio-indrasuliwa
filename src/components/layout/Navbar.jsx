import React, { useState, useEffect } from "react";
import { Sparkles, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../utils/sectionData";

const NAV_ITEMS = [
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevActiveSection, setPrevActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPrevActiveSection(activeSection);
          setIsTransitioning(true);
          setActiveSection(entry.target.id);
          setTimeout(() => setIsTransitioning(false), 600);
        }
      });
    }, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      NAV_ITEMS.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setPrevActiveSection(activeSection);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isHeroSection = activeSection === "hero";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-[#2D1B4E]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(10,4,20,0.37)]">
          {/* Brand Logo with Parking Station */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer text-left relative"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-wide text-white group-hover:text-purple-300 transition-colors">
                INDRA SULIWA
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-purple-300/70">
                Full Stack Developer
              </span>
            </div>

            {/* Parking Station for Rocket (Hero Section) */}
            {isHeroSection && (
              <motion.div
                layoutId="rocket"
                className="absolute -right-14 top-1/2 transform -translate-y-1/2 w-12 h-6 pointer-events-none"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Turbo Exhaust - Idle */}
                <motion.div
                  className="absolute right-full top-1/2 -translate-y-1/2 h-[6px] w-12 bg-gradient-to-l from-cyan-400 via-blue-500 to-transparent rounded-full blur-[1px] opacity-60"
                  animate={{
                    scaleX: isTransitioning ? 1.5 : 0.8,
                    opacity: isTransitioning ? 0.8 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Rocket Icon - Lurus Horizontal */}
                <motion.img
                  src="/Rockets.png"
                  alt="rocket"
                  className="absolute inset-0 w-10 h-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)] object-contain"
                  style={{ transform: "rotate(45deg)" }}
                />
              </motion.div>
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Rocket in Flight - Landing on Menu */}
                {!isHeroSection && activeSection === item.id && (
                  <motion.div
                    layoutId="rocket"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-12 h-6 flex items-center justify-center"
                    animate={{ x: [0, 2, 0] }}
                    transition={{
                      x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    {/* Turbo Exhaust - In Flight */}
                    <motion.div
                      className="absolute right-full top-1/2 -translate-y-1/2 h-[6px] w-12 bg-gradient-to-l from-orange-500 via-yellow-400 to-transparent rounded-full blur-[1px] opacity-80 origin-right"
                      animate={{
                        scaleX: isTransitioning ? 2.2 : 1,
                        opacity: isTransitioning ? 1 : 0.7,
                        boxShadow: isTransitioning
                          ? "0 0 25px rgba(234, 88, 12, 1), inset 0 0 15px rgba(248, 113, 0, 0.6)"
                          : "0 0 12px rgba(234, 88, 12, 0.5)",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    {/* Rocket Icon - Lurus Horizontal ke Kanan */}
                    <motion.img
                      src="/Rockets.png"
                      alt="rocket"
                      className="w-10 h-10 drop-shadow-[0_0_18px_rgba(168,85,247,1)] relative z-10 object-contain"
                      style={{ transform: "rotate(45deg)" }}
                      animate={{
                        scale: isTransitioning ? 1.15 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    />
                  </motion.div>
                )}

                {/* Animated Text */}
                <motion.span
                  animate={{
                    color: activeSection === item.id ? "#ffffff" : "#64748b",
                    textShadow:
                      activeSection === item.id
                        ? "0 0 20px rgba(168, 85, 247, 0.9)"
                        : "none",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`block font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "font-bold text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-purple-200/70 hover:text-white hover:bg-white/10 transition-colors"
              title="LinkedIn: Indra Suliwa"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-purple-200/70 hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub: indrassuliwa1"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <Button
              variant="primary"
              size="sm"
              icon={Mail}
              onClick={() => scrollToSection("contact")}
            >
              Hubungi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-purple-200 hover:text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-4 rounded-2xl bg-[#2D1B4E]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={{
                      color: activeSection === item.id ? "#ffffff" : "#64748b",
                      textShadow:
                        activeSection === item.id
                          ? "0 0 15px rgba(168, 85, 247, 0.8)"
                          : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`block transition-all ${
                      activeSection === item.id
                        ? "font-bold text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </motion.button>
              ))}
              <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs text-purple-300/60">{PERSONAL_INFO.email}</span>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Mail}
                  onClick={() => scrollToSection("contact")}
                >
                  Kontak
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
