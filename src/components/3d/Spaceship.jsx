import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Realistic Aerospace Stealth Interceptor tailored in Cosmic Purple & Blue.
 * Features:
 * - Royal Space Purple & Deep Cobalt Blue stealth composite hull.
 * - Electric Cyan leading edge strakes, wingtip pods, and avionics seams.
 * - Glowing iridescent Cyan-Violet aerospace canopy glass.
 * - Twin supersonic ion thrusters with cyan & violet Mach diamond plasma plumes.
 * - FAA-standard aerospace navigation strobes (Port Red, Starboard Green, Dorsal White).
 */
export default function Spaceship({ scale = 1, engineGlow = true }) {
  const groupRef = useRef();
  const leftEngineLightRef = useRef();
  const rightEngineLightRef = useRef();
  const strobeLightRef = useRef();
  const flame1Ref = useRef();
  const flame2Ref = useRef();
  const machDiamonds1Ref = useRef();
  const machDiamonds2Ref = useRef();

  // Color & Material definitions tailored to website's Cosmic Purple & Blue Palette
  const materials = useMemo(() => {
    return {
      // Primary stealth hull: Royal Cosmic Purple metallic alloy
      hullPrimary: new THREE.MeshStandardMaterial({
        color: "#4c1d95", // Deep royal cosmic purple
        metalness: 0.85,
        roughness: 0.25,
        emissive: "#2e1065",
        emissiveIntensity: 0.2,
      }),
      // Secondary hull: Deep Aerospace Cobalt Blue
      hullSecondary: new THREE.MeshStandardMaterial({
        color: "#1e3a8a", // Vivid deep cobalt blue
        metalness: 0.85,
        roughness: 0.28,
        emissive: "#172554",
        emissiveIntensity: 0.18,
      }),
      // Upper armor plating & spine: Radiant Violet Accent
      hullPlates: new THREE.MeshStandardMaterial({
        color: "#7c3aed", // Vivid purple/violet
        metalness: 0.88,
        roughness: 0.22,
        emissive: "#581c87",
        emissiveIntensity: 0.25,
      }),
      // Leading edges, sensor pods, & strakes: Electric Cyan & Sky Blue
      hullAccent: new THREE.MeshStandardMaterial({
        color: "#0284c7", // Electric sky blue
        metalness: 0.9,
        roughness: 0.18,
        emissive: "#0369a1",
        emissiveIntensity: 0.3,
      }),
      // Translucent Cyan-Violet Iridescent Aerospace Canopy Glass
      canopyGlass: new THREE.MeshPhysicalMaterial({
        color: "#38bdf8", // Electric cyan
        metalness: 0.92,
        roughness: 0.05,
        transmission: 0.72,
        thickness: 0.65,
        ior: 1.62,
        reflectivity: 0.95,
        emissive: "#6366f1", // Indigo-violet internal glow
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.92,
      }),
      // Canopy structural frame: Deep Navy-Indigo
      canopyFrame: new THREE.MeshStandardMaterial({
        color: "#1e1b4b",
        metalness: 0.9,
        roughness: 0.2,
      }),
      // Titanium exhaust nozzles with thermal cobalt/purple sheen
      nozzleMetal: new THREE.MeshStandardMaterial({
        color: "#312e81",
        metalness: 0.95,
        roughness: 0.15,
        emissive: "#3b82f6",
        emissiveIntensity: 0.25,
      }),
      // Inner ion accelerator coils (bright cyan glow)
      ionCoil: new THREE.MeshBasicMaterial({
        color: "#38bdf8",
      }),
      // High-intensity white-cyan plasma core
      plasmaCore: new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.95,
      }),
      // Ion flame outer plume (cyan to electric blue)
      plasmaPlume: new THREE.MeshBasicMaterial({
        color: "#38bdf8",
        transparent: true,
        opacity: 0.78,
      }),
      // Mach shock diamonds (glowing purple/cyan)
      plasmaDiamond: new THREE.MeshBasicMaterial({
        color: "#c084fc",
        transparent: true,
        opacity: 0.9,
      }),
      // Navigation lights
      navRed: new THREE.MeshBasicMaterial({ color: "#ef4444" }),
      navGreen: new THREE.MeshBasicMaterial({ color: "#10b981" }),
      navWhite: new THREE.MeshBasicMaterial({ color: "#f8fafc" }),
      // Cyber seam accent: Glowing electric cyan
      cyberSeam: new THREE.MeshBasicMaterial({ color: "#38bdf8" }),
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // 1. Plasma Thruster Dynamic Pulse & Turbulences
    const flicker = Math.sin(time * 28) * 0.15 + Math.cos(time * 42) * 0.1;
    const basePulse = 1.0 + flicker;

    if (flame1Ref.current && flame2Ref.current) {
      flame1Ref.current.scale.set(basePulse * 0.95, 1.0 + flicker * 0.5, basePulse * 0.95);
      flame2Ref.current.scale.set(basePulse * 0.95, 1.0 + flicker * 0.5, basePulse * 0.95);
    }

    if (machDiamonds1Ref.current && machDiamonds2Ref.current) {
      const diamondScale = 1.0 + Math.sin(time * 35) * 0.2;
      machDiamonds1Ref.current.scale.set(diamondScale, 1.0, diamondScale);
      machDiamonds2Ref.current.scale.set(diamondScale, 1.0, diamondScale);
    }

    // 2. Engine Dynamic Point Lights (Cyan with Violet flare)
    if (engineGlow) {
      const lightIntensity = 3.6 + Math.sin(time * 20) * 1.2;
      if (leftEngineLightRef.current) leftEngineLightRef.current.intensity = lightIntensity;
      if (rightEngineLightRef.current) rightEngineLightRef.current.intensity = lightIntensity;
    }

    // 3. Strobe Anti-Collision Flash (realistic periodic strobe every 1.1s)
    if (strobeLightRef.current) {
      const flash = (time % 1.1) < 0.1 ? 2.5 : 0.05;
      strobeLightRef.current.intensity = flash;
    }

    // 4. Subtle aerodynamic flight micro-drift
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(time * 1.5) * 0.015;
      groupRef.current.rotation.x = Math.cos(time * 1.2) * 0.01;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* ================================================================ */}
      {/* 1. CHISELED FUSELAGE (Purple & Blue Stealth Body)                 */}
      {/* ================================================================ */}

      {/* Main Forward Fuselage (Royal Purple Needle Chined Body) */}
      <mesh position={[0, 0, 0.9]} rotation={[-Math.PI / 2, 0, 0]} material={materials.hullPrimary} castShadow>
        <coneGeometry args={[0.34, 1.5, 6]} />
      </mesh>

      {/* Extreme Nose Needle Probe / Pitot Sensor Array (Electric Cyan Accent) */}
      <mesh position={[0, -0.01, 1.7]} rotation={[Math.PI / 2, 0, 0]} material={materials.hullAccent}>
        <cylinderGeometry args={[0.012, 0.035, 0.35, 8]} />
      </mesh>
      <mesh position={[0, -0.01, 1.9]} rotation={[Math.PI / 2, 0, 0]} material={materials.hullAccent}>
        <coneGeometry args={[0.012, 0.12, 8]} />
      </mesh>

      {/* Mid Fuselage Blended Centerbody (Cosmic Royal Purple) */}
      <mesh position={[0, -0.02, 0.15]} material={materials.hullPrimary} castShadow>
        <boxGeometry args={[0.68, 0.22, 1.2]} />
      </mesh>

      {/* Ventral Lower Armor (Deep Aerospace Cobalt Blue) */}
      <mesh position={[0, -0.11, 0.15]} material={materials.hullSecondary}>
        <boxGeometry args={[0.62, 0.06, 1.25]} />
      </mesh>

      {/* Dorsal Spine Ridge (Radiant Violet Aerodynamic Fairing) */}
      <mesh position={[0, 0.13, -0.05]} rotation={[-0.1, 0, 0]} material={materials.hullPlates}>
        <boxGeometry args={[0.18, 0.12, 1.3]} />
      </mesh>

      {/* Chined Leading Edge Strakes (Electric Blue Strakes) */}
      <mesh position={[-0.42, -0.02, 0.35]} rotation={[0, -0.32, 0]} material={materials.hullAccent}>
        <boxGeometry args={[0.22, 0.06, 0.9]} />
      </mesh>
      <mesh position={[0.42, -0.02, 0.35]} rotation={[0, 0.32, 0]} material={materials.hullAccent}>
        <boxGeometry args={[0.22, 0.06, 0.9]} />
      </mesh>

      {/* ================================================================ */}
      {/* 2. COCKPIT & CYAN-VIOLET IRIDESCENT CANOPY                        */}
      {/* ================================================================ */}
      <group position={[0, 0.11, 0.65]}>
        {/* Aerodynamic Teardrop Canopy Glass */}
        <mesh position={[0, 0, 0]} rotation={[0.28, 0, 0]} material={materials.canopyGlass} castShadow>
          <sphereGeometry args={[0.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
        </mesh>

        {/* Canopy Longitudinal Reinforcing Rib */}
        <mesh position={[0, 0.12, -0.02]} rotation={[0.28, 0, 0]} material={materials.canopyFrame}>
          <boxGeometry args={[0.025, 0.04, 0.42]} />
        </mesh>

        {/* Canopy Base Sill Ring */}
        <mesh position={[0, -0.01, 0]} rotation={[0.28, 0, 0]} material={materials.canopyFrame}>
          <boxGeometry args={[0.27, 0.03, 0.48]} />
        </mesh>

        {/* Interior Cockpit Holographic HUD Glow */}
        <mesh position={[0, 0.03, 0.1]}>
          <boxGeometry args={[0.08, 0.04, 0.02]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <pointLight position={[0, 0.08, 0.05]} color="#38bdf8" intensity={0.7} distance={1.2} />
      </group>

      {/* ================================================================ */}
      {/* 3. COMPOUND SWEPT DELTA WINGS (Purple & Blue Hybrid)             */}
      {/* ================================================================ */}

      {/* Port (Left) Main Swept Delta Wing */}
      <group position={[-0.82, -0.03, -0.08]} rotation={[0, 0, 0.03]}>
        {/* Main Wing Body (Royal Cosmic Purple) */}
        <mesh material={materials.hullPrimary} castShadow>
          <boxGeometry args={[1.05, 0.045, 0.85]} />
        </mesh>
        {/* Leading Edge Electric Blue Armor Strip */}
        <mesh position={[0.04, 0.005, 0.42]} rotation={[0, 0.38, 0]} material={materials.hullAccent}>
          <boxGeometry args={[1.1, 0.052, 0.08]} />
        </mesh>
        {/* Trailing Edge Elevon Control Surface (Cobalt Blue) */}
        <mesh position={[0, -0.002, -0.42]} material={materials.hullSecondary}>
          <boxGeometry args={[0.95, 0.035, 0.12]} />
        </mesh>
        {/* Port Wingtip Weapon / Sensor Pod (Electric Cyan Accent) */}
        <mesh position={[-0.54, 0.02, -0.02]} material={materials.hullAccent}>
          <boxGeometry args={[0.06, 0.08, 0.6]} />
        </mesh>
        {/* Angled Down-turned Winglet (Radiant Violet) */}
        <mesh position={[-0.56, -0.08, -0.05]} rotation={[0, 0, 0.45]} material={materials.hullPlates}>
          <boxGeometry args={[0.04, 0.22, 0.45]} />
        </mesh>
        {/* Port Red Navigation Strobe */}
        <mesh position={[-0.56, 0.06, 0.22]} material={materials.navRed}>
          <sphereGeometry args={[0.022, 8, 8]} />
        </mesh>
        <pointLight position={[-0.58, 0.07, 0.22]} color="#ef4444" intensity={1.2} distance={1.5} />
      </group>

      {/* Starboard (Right) Main Swept Delta Wing */}
      <group position={[0.82, -0.03, -0.08]} rotation={[0, 0, -0.03]}>
        {/* Main Wing Body (Royal Cosmic Purple) */}
        <mesh material={materials.hullPrimary} castShadow>
          <boxGeometry args={[1.05, 0.045, 0.85]} />
        </mesh>
        {/* Leading Edge Electric Blue Armor Strip */}
        <mesh position={[-0.04, 0.005, 0.42]} rotation={[0, -0.38, 0]} material={materials.hullAccent}>
          <boxGeometry args={[1.1, 0.052, 0.08]} />
        </mesh>
        {/* Trailing Edge Elevon Control Surface (Cobalt Blue) */}
        <mesh position={[0, -0.002, -0.42]} material={materials.hullSecondary}>
          <boxGeometry args={[0.95, 0.035, 0.12]} />
        </mesh>
        {/* Starboard Wingtip Weapon / Sensor Pod (Electric Cyan Accent) */}
        <mesh position={[0.54, 0.02, -0.02]} material={materials.hullAccent}>
          <boxGeometry args={[0.06, 0.08, 0.6]} />
        </mesh>
        {/* Angled Down-turned Winglet (Radiant Violet) */}
        <mesh position={[0.56, -0.08, -0.05]} rotation={[0, 0, -0.45]} material={materials.hullPlates}>
          <boxGeometry args={[0.04, 0.22, 0.45]} />
        </mesh>
        {/* Starboard Green Navigation Strobe */}
        <mesh position={[0.56, 0.06, 0.22]} material={materials.navGreen}>
          <sphereGeometry args={[0.022, 8, 8]} />
        </mesh>
        <pointLight position={[0.58, 0.07, 0.22]} color="#10b981" intensity={1.2} distance={1.5} />
      </group>

      {/* ================================================================ */}
      {/* 4. TWIN CANTED V-TAIL STABILIZERS (Violet & Cyan Trim)           */}
      {/* ================================================================ */}

      {/* Left Canted Stabilizer (Angled 32 deg outward) */}
      <group position={[-0.32, 0.24, -0.55]} rotation={[0.05, 0, 0.35]}>
        <mesh material={materials.hullPrimary} castShadow>
          <boxGeometry args={[0.045, 0.52, 0.42]} />
        </mesh>
        <mesh position={[0.005, 0.02, 0.21]} rotation={[-0.35, 0, 0]} material={materials.hullAccent}>
          <boxGeometry args={[0.05, 0.55, 0.06]} />
        </mesh>
        {/* Trailing Edge Rudder (Cobalt Blue) */}
        <mesh position={[-0.002, 0, -0.21]} material={materials.hullSecondary}>
          <boxGeometry args={[0.035, 0.48, 0.06]} />
        </mesh>
      </group>

      {/* Right Canted Stabilizer (Angled 32 deg outward) */}
      <group position={[0.32, 0.24, -0.55]} rotation={[0.05, 0, -0.35]}>
        <mesh material={materials.hullPrimary} castShadow>
          <boxGeometry args={[0.045, 0.52, 0.42]} />
        </mesh>
        <mesh position={[-0.005, 0.02, 0.21]} rotation={[-0.35, 0, 0]} material={materials.hullAccent}>
          <boxGeometry args={[0.05, 0.55, 0.06]} />
        </mesh>
        {/* Trailing Edge Rudder (Cobalt Blue) */}
        <mesh position={[0.002, 0, -0.21]} material={materials.hullSecondary}>
          <boxGeometry args={[0.035, 0.48, 0.06]} />
        </mesh>
      </group>

      {/* Dorsal Anti-Collision Flashing Strobe */}
      <mesh position={[0, 0.22, -0.45]} material={materials.navWhite}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </mesh>
      <pointLight ref={strobeLightRef} position={[0, 0.28, -0.45]} color="#ffffff" intensity={0.1} distance={3} />

      {/* ================================================================ */}
      {/* 5. TWIN COBALT & PURPLE ION THRUSTERS                             */}
      {/* ================================================================ */}

      {/* Left Engine Assembly */}
      <group position={[-0.28, -0.03, -0.55]}>
        {/* Engine Nacelle Cowling (Deep Cobalt Blue) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.hullSecondary} castShadow>
          <cylinderGeometry args={[0.16, 0.18, 0.75, 16]} />
        </mesh>

        {/* Heat-Treated Titanium Exhaust Nozzle (Indigo-Purple Metal) */}
        <mesh position={[0, 0, -0.42]} rotation={[Math.PI / 2, 0, 0]} material={materials.nozzleMetal}>
          <cylinderGeometry args={[0.175, 0.15, 0.14, 16, 1, true]} />
        </mesh>

        {/* Internal Ion Confinement Ring (Bright Cyan Glow) */}
        <mesh position={[0, 0, -0.39]} rotation={[Math.PI / 2, 0, 0]} material={materials.ionCoil}>
          <torusGeometry args={[0.13, 0.015, 8, 24]} />
        </mesh>

        {/* Supersonic Plasma Flame Plume (Cyan-Blue Taper) */}
        <group ref={flame1Ref} position={[0, 0, -0.75]}>
          {/* Intense Inner Core */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.plasmaCore}>
            <coneGeometry args={[0.07, 0.55, 16]} />
          </mesh>
          {/* Outer Translucent Ion Plume */}
          <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.plasmaPlume}>
            <coneGeometry args={[0.15, 0.85, 16]} />
          </mesh>
        </group>

        {/* Supersonic Mach Shock Diamonds (Purple Plasma Nodes) */}
        <group ref={machDiamonds1Ref} position={[0, 0, -0.7]}>
          <mesh position={[0, 0, -0.12]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.045, 0]} />
          </mesh>
          <mesh position={[0, 0, -0.32]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.035, 0]} />
          </mesh>
          <mesh position={[0, 0, -0.52]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.025, 0]} />
          </mesh>
        </group>

        {/* Dynamic Left Engine Point Light (Electric Cyan) */}
        <pointLight
          ref={leftEngineLightRef}
          position={[0, 0, -0.75]}
          color="#38bdf8"
          intensity={3.6}
          distance={4.5}
          decay={2}
        />
      </group>

      {/* Right Engine Assembly */}
      <group position={[0.28, -0.03, -0.55]}>
        {/* Engine Nacelle Cowling (Deep Cobalt Blue) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.hullSecondary} castShadow>
          <cylinderGeometry args={[0.16, 0.18, 0.75, 16]} />
        </mesh>

        {/* Heat-Treated Titanium Exhaust Nozzle (Indigo-Purple Metal) */}
        <mesh position={[0, 0, -0.42]} rotation={[Math.PI / 2, 0, 0]} material={materials.nozzleMetal}>
          <cylinderGeometry args={[0.175, 0.15, 0.14, 16, 1, true]} />
        </mesh>

        {/* Internal Ion Confinement Ring (Bright Cyan Glow) */}
        <mesh position={[0, 0, -0.39]} rotation={[Math.PI / 2, 0, 0]} material={materials.ionCoil}>
          <torusGeometry args={[0.13, 0.015, 8, 24]} />
        </mesh>

        {/* Supersonic Plasma Flame Plume (Cyan-Blue Taper) */}
        <group ref={flame2Ref} position={[0, 0, -0.75]}>
          {/* Intense Inner Core */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.plasmaCore}>
            <coneGeometry args={[0.07, 0.55, 16]} />
          </mesh>
          {/* Outer Translucent Ion Plume */}
          <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.plasmaPlume}>
            <coneGeometry args={[0.15, 0.85, 16]} />
          </mesh>
        </group>

        {/* Supersonic Mach Shock Diamonds (Purple Plasma Nodes) */}
        <group ref={machDiamonds2Ref} position={[0, 0, -0.7]}>
          <mesh position={[0, 0, -0.12]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.045, 0]} />
          </mesh>
          <mesh position={[0, 0, -0.32]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.035, 0]} />
          </mesh>
          <mesh position={[0, 0, -0.52]} material={materials.plasmaDiamond}>
            <octahedronGeometry args={[0.025, 0]} />
          </mesh>
        </group>

        {/* Dynamic Right Engine Point Light (Electric Cyan) */}
        <pointLight
          ref={rightEngineLightRef}
          position={[0, 0, -0.75]}
          color="#38bdf8"
          intensity={3.6}
          distance={4.5}
          decay={2}
        />
      </group>

      {/* ================================================================ */}
      {/* 6. REACTION CONTROL SYSTEM (RCS) & ELECTRIC CYAN SEAMS            */}
      {/* ================================================================ */}
      {/* Nose RCS Quad Thrusters */}
      <mesh position={[-0.14, 0.02, 1.1]} material={materials.hullAccent}>
        <boxGeometry args={[0.02, 0.03, 0.05]} />
      </mesh>
      <mesh position={[0.14, 0.02, 1.1]} material={materials.hullAccent}>
        <boxGeometry args={[0.02, 0.03, 0.05]} />
      </mesh>

      {/* Glowing Aerospace Cyber Power Seam Lines */}
      <mesh position={[0, 0.09, 0.15]} material={materials.cyberSeam}>
        <boxGeometry args={[0.015, 0.015, 0.8]} />
      </mesh>
      <mesh position={[-0.22, 0.05, 0.0]} rotation={[0, 0.25, 0]} material={materials.cyberSeam}>
        <boxGeometry args={[0.012, 0.012, 0.5]} />
      </mesh>
      <mesh position={[0.22, 0.05, 0.0]} rotation={[0, -0.25, 0]} material={materials.cyberSeam}>
        <boxGeometry args={[0.012, 0.012, 0.5]} />
      </mesh>
    </group>
  );
}
