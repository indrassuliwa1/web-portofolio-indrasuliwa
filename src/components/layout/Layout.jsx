import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Global application layout wrapping navigation and scrollable UI layers.
 * The 3D Canvas sits continuously fixed behind in App.jsx.
 */
export default function Layout({ children, activePage, setActivePage }) {
  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Atmospheric Radial Glow Overlays (for soft celestial depth) */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-1/4 w-[30rem] h-[30rem] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Top Floating Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Content (Scrolls naturally over the fixed 3D canvas) */}
      <main className="relative z-10 flex-1 pt-24 sm:pt-28">
        {children}
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
