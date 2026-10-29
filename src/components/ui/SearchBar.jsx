import React from "react";
import { Search, X, Sparkles } from "lucide-react";
import { cn } from "../../utils/cn";

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search cosmic missions, tech stack, or projects...",
  className = "",
}) {
  return (
    <div
      className={cn(
        "relative flex items-center w-full max-w-xl mx-auto rounded-2xl",
        "bg-[#2D1B4E]/50 backdrop-blur-xl border border-white/15",
        "shadow-[0_8px_32px_0_rgba(10,4,20,0.37)]",
        "focus-within:border-purple-400/60 focus-within:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
        "transition-all duration-300 group",
        className
      )}
    >
      <div className="pl-4 pr-2 text-purple-300/70 group-focus-within:text-purple-300 transition-colors">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3.5 px-2 bg-transparent text-sm md:text-base text-slate-100 placeholder-purple-300/40 focus:outline-none"
      />

      {value ? (
        <button
          type="button"
          onClick={() => {
            if (onClear) onClear();
            else onChange("");
          }}
          className="p-1.5 mr-3 rounded-lg text-purple-300/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      ) : (
        <div className="hidden sm:flex items-center gap-1.5 mr-4 text-xs font-medium text-purple-300/40 border border-purple-400/20 px-2 py-0.5 rounded-md pointer-events-none">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>Explore</span>
        </div>
      )}
    </div>
  );
}
