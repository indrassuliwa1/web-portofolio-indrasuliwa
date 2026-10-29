import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Detailed Astronaut model with golden reflective visor, control chest plate,
 * life support pack, thruster jets, and animated waving right arm.
 */
export default function FloatingAstronaut({ isWaving = true, isFlying = false }) {
  const rightArmRef = useRef();
  const thrusterLightRef = useRef();

  useFrame((state, delta) => {
    // 1. Arm Animation: Waving in Hero/Contact, streamlined in flight
    if (rightArmRef.current) {
      if (isWaving && !isFlying) {
        const wave = Math.sin(state.clock.elapsedTime * 4.5) * 0.35;
        rightArmRef.current.rotation.z = -0.7 + wave;
        rightArmRef.current.rotation.x = -0.6 + wave * 0.4;
      } else {
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.2, delta * 4);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, -0.9, delta * 4);
      }
    }

    // 2. Thruster Flame Flare
    if (thrusterLightRef.current) {
      const flicker = Math.sin(state.clock.elapsedTime * 22) * 0.4;
      const baseIntensity = isFlying ? 2.8 : 0.8;
      thrusterLightRef.current.intensity = Math.max(0.3, baseIntensity + flicker);
    }
  });

  return (
    <group scale={0.88}>
      {/* Helmet & Golden Mirrored Visor */}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, 1.25, 0.28]}>
        <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.06} metalness={0.95} emissive="#78350f" emissiveIntensity={0.3} />
      </mesh>

      {/* Torso & Control Panel */}
      <mesh position={[0, 0.35, 0]}>
        <capsuleGeometry args={[0.48, 0.8, 16, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.45, 0.48]}>
        <boxGeometry args={[0.42, 0.32, 0.1]} />
        <meshStandardMaterial color="#2d1b4e" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[-0.1, 0.45, 0.54]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0.1, 0.45, 0.54]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>

      {/* Life Support Backpack */}
      <mesh position={[0, 0.4, -0.42]}>
        <boxGeometry args={[0.75, 1.0, 0.35]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Twin Oxygen Tanks */}
      <mesh position={[-0.22, 0.4, -0.62]}>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0.22, 0.4, -0.62]}>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Jet Thruster Nozzles & Flare Plumes */}
      <pointLight ref={thrusterLightRef} position={[0, 0.1, -0.75]} intensity={1.5} distance={3.5} color="#38bdf8" />
      <mesh position={[-0.22, -0.1, -0.62]}>
        <coneGeometry args={[0.08, 0.32, 16]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.75} />
      </mesh>
      <mesh position={[0.22, -0.1, -0.62]}>
        <coneGeometry args={[0.08, 0.32, 16]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.75} />
      </mesh>

      {/* Left Arm */}
      <group position={[-0.65, 0.55, 0]} rotation={[0.4, 0, 0.6]}>
        <mesh position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.16, 0.5, 12, 16]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
      </group>

      {/* Right Arm (Waving or Streamlined) */}
      <group ref={rightArmRef} position={[0.65, 0.55, 0]} rotation={[-0.5, 0.2, -0.6]}>
        <mesh position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.16, 0.5, 12, 16]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
      </group>

      {/* Zero-G Floating Legs */}
      <group position={[-0.26, -0.45, 0]} rotation={[0.4, 0, 0.1]}>
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.18, 0.6, 12, 16]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
      </group>
      <group position={[0.26, -0.45, 0]} rotation={[-0.2, 0, -0.15]}>
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.18, 0.6, 12, 16]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
