import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useScroll } from "framer-motion";
import * as THREE from "three";
import Starfield from "./Starfield";
import FloatingPlanets from "./FloatingPlanets";
import FloatingAstronaut from "./FloatingAstronaut";

function CompanionScene({ scrollYProgress }) {
  const astronautRigRef = useRef();
  const [flightState, setFlightState] = useState({ isWaving: true, isFlying: false });
  const { viewport } = useThree();

  // Section targets: [x, y, z] and [rotX, rotY, rotZ]
  const getSectionTarget = (sectionIdx) => {
    const edgeX = Math.min(4.0, Math.max(2.4, viewport.width * 0.38));

    switch (sectionIdx) {
      case 0: // Hero: Right side, facing center
        return {
          pos: [Math.min(3.2, edgeX), 0, 0],
          rot: [0, -0.5, 0],
          isWaving: true,
        };
      case 1: // About: Peeking from Left Edge, tilts forward & faces right
        return {
          pos: [-edgeX, -0.3, -1],
          rot: [0.2, 0.8, -0.3],
          isWaving: false,
        };
      case 2: // Experience: Flies to Right Edge, tilts other way
        return {
          pos: [edgeX, 0.1, -1.8],
          rot: [-0.2, -0.6, 0.4],
          isWaving: false,
        };
      case 3: // Certifications & Projects: Left Edge behind cards, looking upwards/playful
        return {
          pos: [-edgeX * 1.05, 0.5, -2.8],
          rot: [0.5, 0.5, 0],
          isWaving: false,
        };
      case 4: // Contact: Center screen, facing user directly to say goodbye
      default:
        return {
          pos: [0, 0.2, 1],
          rot: [0, 0, 0],
          isWaving: true,
        };
    }
  };

  useFrame((_, delta) => {
    if (!astronautRigRef.current) return;

    // 1. Determine active section from scroll progress (5 sections: 0 to 4)
    const p = scrollYProgress.get ? scrollYProgress.get() : 0;
    let section = 0;
    if (p >= 0.82) section = 4;
    else if (p >= 0.58) section = 3;
    else if (p >= 0.35) section = 2;
    else if (p >= 0.15) section = 1;

    const target = getSectionTarget(section);

    // 2. Compute dynamic velocity & banking tilt (like an airplane or Superman)
    const current = astronautRigRef.current.position;
    const deltaX = target.pos[0] - current.x;
    const isMovingFast = Math.abs(deltaX) > 0.25;

    // Update flight state for waving & thrusters
    if (isMovingFast !== flightState.isFlying || target.isWaving !== flightState.isWaving) {
      setFlightState({ isWaving: target.isWaving, isFlying: isMovingFast });
    }

    // Dynamic Banking Roll & Pitch while traveling horizontally
    const bankZ = isMovingFast ? Math.max(-0.6, Math.min(0.6, -deltaX * 0.18)) : 0;
    const pitchX = isMovingFast ? 0.35 : 0;

    // 3. Smooth Damped Lerp for position with weight and momentum
    const lerpRate = Math.min(delta * 2.8, 0.15);
    current.x = THREE.MathUtils.lerp(current.x, target.pos[0], lerpRate);
    current.y = THREE.MathUtils.lerp(current.y, target.pos[1], lerpRate);
    current.z = THREE.MathUtils.lerp(current.z, target.pos[2], lerpRate);

    // 4. Smooth Damped Lerp for rotation with banking
    const rot = astronautRigRef.current.rotation;
    rot.x = THREE.MathUtils.lerp(rot.x, target.rot[0] + pitchX, lerpRate);
    rot.y = THREE.MathUtils.lerp(rot.y, target.rot[1], lerpRate);
    rot.z = THREE.MathUtils.lerp(rot.z, target.rot[2] + bankZ, lerpRate);
  });

  return (
    <group ref={astronautRigRef} position={[3, 0, 0]} rotation={[0, -0.5, 0]}>
      {/* Zero-Gravity Bobbing via Drei Float */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <FloatingAstronaut isWaving={flightState.isWaving} isFlying={flightState.isFlying} />
      </Float>
    </group>
  );
}

export default function Astronaut3D() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} color="#a855f7" />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-6, 3, -2]} intensity={2.2} color="#38bdf8" />
          <pointLight position={[4, -4, 2]} intensity={1.8} color="#ec4899" />

          <Starfield count={3500} radius={45} />
          <FloatingPlanets />

          {/* Smooth flying space companion */}
          <CompanionScene scrollYProgress={scrollYProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
