import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Filter, Layers } from "lucide-react";
import SearchBar from "../components/ui/SearchBar";
import ProjectCard from "../components/ui/ProjectCard";
import ContactSection from "../components/ui/ContactSection";
import { useDebounce } from "../hooks/useDebounce";
import { PORTFOLIO_PROJECTS, CATEGORIES } from "../utils/portfolioData";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Missions");
  const debouncedSearch = useDebounce(searchQuery, 200);

  const projects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      const matchCat = activeCategory === "All Missions" || p.category === activeCategory;
      const q = debouncedSearch.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [debouncedSearch, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 pb-20">
      {/* Portfolio Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-200 text-xs">
          <Layers className="w-3.5 h-3.5 text-purple-300" />
          <span>Full Constellation Archive</span>
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white">
          All Galactic Works & Projects
        </h1>
        <p className="text-sm sm:text-base text-purple-200/70">
          Browse through all open-source repositories, interactive WebGL experiments, and client applications.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="space-y-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by keywords, tags (e.g. Three.js, React), or title..."
        />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/40"
                  : "bg-white/5 text-purple-200/70 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} index={idx} />
        ))}
      </div>

      <ContactSection />
    </div>
  );
}
