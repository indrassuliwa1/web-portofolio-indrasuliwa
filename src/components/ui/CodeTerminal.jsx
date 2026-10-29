import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal as TerminalIcon,
  FileJson,
  Copy,
  Check,
  Play,
  ShieldCheck,
  Award,
  Layers,
  Cpu,
} from "lucide-react";

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState("ts"); // 'ts' | 'json' | 'terminal'
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runLogs, setRunLogs] = useState([]);

  const tsCode = `import { Developer } from "@core/types";

export const indra: Developer = {
  name: "Indra Suliwa",
  role: "Full Stack & Web Developer",
  status: "Available for Hire 🚀",
  education: {
    campus: "Univ. Islam Nusantara",
    major: "S1 Teknik Informatika",
    gpa: 3.83, // Cum Laude
  },
  coreStack: {
    frontend: ["React.js", "TypeScript", "Tailwind CSS"],
    backend: ["Laravel", "PHP", "Node.js", "MySQL"],
    specialty: ["Cyber Security", "REST API", "Responsive UI"],
  },
  mission: () => "Build scalable apps with exceptional UX",
};`;

  const jsonCode = `{
  "developer": "Indra Suliwa",
  "title": "Full Stack Software Engineer",
  "location": "Bandung, Indonesia",
  "openForWork": true,
  "stats": {
    "gpa": "3.83 / 4.00",
    "internship": "PT Air Consulting Group",
    "completedProjects": 12,
    "githubActivity": "Active Contributor"
  },
  "contact": {
    "email": "indrasuliwa45@gmail.com",
    "linkedin": "/in/indrasuliwa"
  }
}`;

  const handleCopy = () => {
    const textToCopy = activeTab === "ts" ? tsCode : jsonCode;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setActiveTab("terminal");
    setIsRunning(true);
    setRunLogs(["$ initializing indra.profile...", "⏳ compiling dependencies..."]);

    setTimeout(() => {
      setRunLogs((prev) => [...prev, "✔ Connected to production-ready stack"]);
    }, 400);

    setTimeout(() => {
      setRunLogs((prev) => [
        ...prev,
        "✔ Verified: Full Stack Developer (React + Laravel)",
        "🚀 Status: 100% Ready to contribute to your team!",
      ]);
      setIsRunning(false);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-pink-500/25 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Floating Badge: React & TypeScript (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden sm:flex absolute -top-5 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-400/40 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-950/40 backdrop-blur-md animate-float-slow"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
        <span>React 19 • TypeScript</span>
      </motion.div>

      {/* Floating Badge: IPK 3.83 (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden sm:flex absolute -bottom-5 -right-2 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-mono shadow-lg shadow-amber-950/40 backdrop-blur-md"
        style={{ animation: "floatSlow 6s ease-in-out infinite 1.5s" }}
      >
        <Award className="w-4 h-4 text-amber-400" />
        <span>IPK 3.83 • Cum Laude</span>
      </motion.div>

      {/* Floating Badge: Full Stack Laravel (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-400/40 text-purple-300 text-xs font-mono shadow-lg shadow-purple-950/40 backdrop-blur-md"
        style={{ animation: "floatSlow 8s ease-in-out infinite 0.7s" }}
      >
        <Layers className="w-3.5 h-3.5 text-purple-400" />
        <span>Laravel & PHP Full Stack</span>
      </motion.div>

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-950/85 backdrop-blur-2xl shadow-2xl shadow-purple-950/60 font-mono text-xs sm:text-sm">
        {/* Top Window Bar (macOS Style) */}
        <div className="flex items-center justify-between px-4 py-3 bg-purple-950/40 border-b border-white/10 select-none">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors shadow-sm inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors shadow-sm inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors shadow-sm inline-block" />
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/70 p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveTab("ts")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "ts"
                  ? "bg-purple-600/40 text-purple-200 border border-purple-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>indra.ts</span>
            </button>

            <button
              onClick={() => setActiveTab("json")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "json"
                  ? "bg-purple-600/40 text-purple-200 border border-purple-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileJson className="w-3.5 h-3.5 text-amber-400" />
              <span>profile.json</span>
            </button>

            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "terminal"
                  ? "bg-purple-600/40 text-purple-200 border border-purple-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>terminal</span>
            </button>
          </div>

          {/* Window Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRun}
              disabled={isRunning}
              title="Eksekusi Profile"
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 text-xs transition-colors"
            >
              <Play className={`w-3 h-3 ${isRunning ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Run</span>
            </button>
            <button
              onClick={handleCopy}
              title="Salin Kode"
              className="p-1.5 rounded-md hover:bg-white/10 text-purple-300/80 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Status Sub-bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900/50 border-b border-white/5 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-semibold">Ready for Work</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-300/70 font-mono">git:(main)</span>
          </div>
          <span className="text-slate-500 font-mono">UTF-8 • TypeScript</span>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 overflow-x-auto min-h-[300px] max-h-[370px] select-text">
          <AnimatePresence mode="wait">
            {activeTab === "ts" && (
              <motion.div
                key="ts"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 leading-relaxed"
              >
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">1</span>
                  <span className="text-pink-400 font-medium">import</span>{" "}
                  <span className="text-purple-200">{"{ Developer }"}</span>{" "}
                  <span className="text-pink-400 font-medium">from</span>{" "}
                  <span className="text-emerald-300">"@core/types"</span>;
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">2</span>
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">3</span>
                  <span className="text-pink-400 font-medium">export const</span>{" "}
                  <span className="text-cyan-300 font-semibold">indra</span>:{" "}
                  <span className="text-amber-300">Developer</span> = {"{"}
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">4</span>
                  <span className="pl-4 text-purple-300">name</span>:{" "}
                  <span className="text-emerald-300">"Indra Suliwa"</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">5</span>
                  <span className="pl-4 text-purple-300">role</span>:{" "}
                  <span className="text-emerald-300">"Full Stack Web Developer"</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">6</span>
                  <span className="pl-4 text-purple-300">status</span>:{" "}
                  <span className="text-emerald-300">"Available for Hire 🚀"</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">7</span>
                  <span className="pl-4 text-purple-300">education</span>: {"{"}
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">8</span>
                  <span className="pl-8 text-purple-300">degree</span>:{" "}
                  <span className="text-emerald-300">"S1 Teknik Informatika"</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">9</span>
                  <span className="pl-8 text-purple-300">gpa</span>:{" "}
                  <span className="text-amber-400 font-semibold">3.83</span>,{" "}
                  <span className="text-slate-500 italic">// Cum Laude</span>
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">10</span>
                  <span className="pl-4 text-purple-300">{"}"}</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">11</span>
                  <span className="pl-4 text-purple-300">skills</span>: {"{"}
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">12</span>
                  <span className="pl-8 text-purple-300">frontend</span>: [
                  <span className="text-cyan-300">"React"</span>,{" "}
                  <span className="text-cyan-300">"TypeScript"</span>,{" "}
                  <span className="text-cyan-300">"Tailwind"</span>],
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">13</span>
                  <span className="pl-8 text-purple-300">backend</span>: [
                  <span className="text-purple-300">"Laravel"</span>,{" "}
                  <span className="text-purple-300">"PHP"</span>,{" "}
                  <span className="text-purple-300">"MySQL"</span>],
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">14</span>
                  <span className="pl-4 text-purple-300">{"}"}</span>,
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">15</span>
                  <span className="pl-4 text-purple-300">passion</span>: () =&gt;{" "}
                  <span className="text-emerald-300">"Creating impactful solutions"</span>
                </div>
                <div>
                  <span className="text-slate-500 select-none mr-3 w-5 inline-block text-right">16</span>
                  <span className="text-purple-200">{"};"}</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />
                </div>
              </motion.div>
            )}

            {activeTab === "json" && (
              <motion.div
                key="json"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 text-slate-200 leading-relaxed font-mono"
              >
                <pre className="text-purple-200">{jsonCode}</pre>
              </motion.div>
            )}

            {activeTab === "terminal" && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 text-slate-300 font-mono text-xs"
              >
                <div className="text-emerald-400 font-semibold flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>indra@portfolio-hub:~$ neofetch</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5 space-y-1">
                  <p className="text-cyan-300">● OS: Ubuntu Linux / Cosmic Modern Web</p>
                  <p className="text-purple-300">● Role: Full Stack Software Developer</p>
                  <p className="text-amber-300">● Education: S1 Teknik Informatika (GPA 3.83)</p>
                  <p className="text-emerald-300">● Availability: Available for Immediate Hire</p>
                  <p className="text-slate-400">● Tech: React • Laravel • TypeScript • MySQL • CyberSec</p>
                </div>

                {runLogs.length > 0 && (
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    {runLogs.map((log, i) => (
                      <p key={i} className="text-purple-200 animate-fadeIn">
                        {log}
                      </p>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex items-center gap-2 text-cyan-400">
                  <span>indra@portfolio:~$</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Bar */}
        <div className="px-4 py-2.5 bg-purple-950/30 border-t border-white/10 flex items-center justify-between text-[11px] text-purple-300/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Clean Architecture & High Performance</span>
          </div>
          <span className="text-emerald-400 font-medium">● 0 Errors, 0 Warnings</span>
        </div>
      </div>
    </div>
  );
}
