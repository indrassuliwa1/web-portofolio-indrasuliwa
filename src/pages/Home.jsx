import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 pb-24">
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}
