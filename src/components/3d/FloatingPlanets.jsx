import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

/**
 * FloatingPlanets adds atmospheric celestial bodies to the 3D scene:
 * A ringed gas giant in deep purple/cyan and glowing orbiting moons.
 */
export default function FloatingPlanets() {
  const planetRef = useRef();
  const ringRef = useRef();
  const moonRef = useRef();

  useFrame((_, delta) => {
    if (planetRef.current) planetRef.current.rotation.y += delta * 0.08;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.04;
    if (moonRef.current) moonRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group position={[-3.5, 1.2, -4]}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* Main Celestial Orb */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#4c1d95"
            roughness={0.7}
            metalness={0.2}
            emissive="#2e1065"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Planetary Rings */}
        <mesh ref={ringRef} rotation={[1.3, 0.4, 0]}>
          <ringGeometry args={[1.8, 2.7, 64]} />
          <meshStandardMaterial
            color="#38bdf8"
            transparent
            opacity={0.4}
            side={2}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Moon */}
        <group ref={moonRef}>
          <mesh position={[3.2, 0.5, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color="#e0e7ff"
              emissive="#818cf8"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
