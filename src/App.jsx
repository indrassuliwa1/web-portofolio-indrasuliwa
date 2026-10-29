import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AnimatedAstronaut from "./components/3d/AnimatedAstronaut";
import Starfield from "./components/3d/Starfield";
import FloatingPlanets from "./components/3d/FloatingPlanets";
import ErrorBoundary from "./components/ui/ErrorBoundary";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Fixed Main 3D Canvas in background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden">
        <ErrorBoundary fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 6.5], fov: 55 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <Suspense fallback={null}>
              {/* Vibrant Lighting for Rich Texture & Visual Pop */}
              <ambientLight intensity={1.5} color="#ffffff" />
              <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
              <pointLight position={[-6, 3, 2]} intensity={3.0} color="#38bdf8" />
              <pointLight position={[4, -2, 3]} intensity={2.2} color="#c084fc" />

              <Starfield count={3500} radius={60} />
              <FloatingPlanets />
              <AnimatedAstronaut />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Foreground UI Layout and sections */}
      <Layout activePage={activePage} setActivePage={setActivePage}>
        {activePage === "home" ? <Home /> : <Portfolio />}
      </Layout>
    </div>
  );
}
