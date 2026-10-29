import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useScroll } from "framer-motion";
import * as THREE from "three";
import Spaceship from "./Spaceship";

export default function AnimatedAstronaut() {
  const groupRef = useRef();
  const spaceshipRef = useRef();
  const { viewport } = useThree();
  const { scrollYProgress } = useScroll();
  const [mode, setMode] = useState("hidden"); // "hidden" (in Hero) or "spaceship" (during scroll)

  const isMobile = viewport.width < 7.5;
  const spaceshipScale = isMobile ? 0.8 : 1.0;
  const sideX = isMobile ? Math.min(viewport.width * 0.28, 2.2) : 3.2;

  useFrame(({ camera, clock }, delta) => {
    if (!groupRef.current) return;

    const p = scrollYProgress.get ? scrollYProgress.get() : 0;
    
    // Mode switch: Hero section (p < 0.08) is hidden (astronaut removed for professional Hero)
    // Spaceship activates dynamically when scrolling through sections
    const newMode = p < 0.08 ? "hidden" : "spaceship";
    if (newMode !== mode) {
      setMode(newMode);
    }

    let section = 0;
    if (p >= 0.85) section = 5;
    else if (p >= 0.68) section = 4;
    else if (p >= 0.50) section = 3;
    else if (p >= 0.32) section = 2;
    else if (p >= 0.14) section = 1;

    const vh = viewport.height;

    // Position & rotation targets
    let targetPos, targetRot;
    
    if (mode === "hidden") {
      // Parked smoothly just above section 1, invisible
      targetPos = [sideX + 1.0, 0, -2];
      targetRot = [0.2, -0.8, -0.3];
    } else {
      // Spaceship flying positions per section
      switch (section) {
        case 1: // About: kanan atas, terbang melewati
          targetPos = [sideX, -vh + 1.0, 0.5];
          targetRot = [0.2, -0.8, -0.3];
          break;
        case 2: // Experience: kiri tengah, banking left
          targetPos = [-sideX + 0.5, -vh * 2 + 0.5, 0];
          targetRot = [0, 0.9, 0.4];
          break;
        case 3: // Certifications: kanan bawah, diving
          targetPos = [sideX - 0.8, -vh * 3, -0.5];
          targetRot = [-0.3, -0.6, -0.2];
          break;
        case 4: // Projects: kiri atas, ascending
          targetPos = [-sideX, -vh * 4 + 0.8, 0.3];
          targetRot = [0.3, 0.7, 0.3];
          break;
        case 5: // Contact: TERBANG JAUH KE LUAR ANGKASA (smooth cinematic)
          targetPos = [0, -vh * 5.2 + 1.5, 12];
          targetRot = [-0.35, 0, 0];
          break;
        default:
          targetPos = [sideX, -vh + 1.0, 0.5];
          targetRot = [0.2, -0.8, -0.3];
      }
    }

    // Flying effect
    const scrollSpeed = Math.abs(scrollYProgress.getVelocity?.() || 0);
    const isScrolling = scrollSpeed > 0.1;
    
    let lerpRate;
    if (section === 5 && mode === "spaceship") {
      lerpRate = Math.min(delta * 3.2, 0.16);
    } else if (mode === "spaceship" && isScrolling) {
      lerpRate = Math.min(delta * 5.5, 0.25);
    } else {
      lerpRate = Math.min(delta * 2.8, 0.15);
    }

    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -vh * section, lerpRate);

    // Position lerp
    const pos = groupRef.current.position;
    pos.x = THREE.MathUtils.lerp(pos.x, targetPos[0], lerpRate);
    pos.y = THREE.MathUtils.lerp(pos.y, targetPos[1], lerpRate);
    pos.z = THREE.MathUtils.lerp(pos.z, targetPos[2], lerpRate);

    // Rotation with flight dynamics
    const deltaX = targetPos[0] - pos.x;
    const deltaY = targetPos[1] - pos.y;
    const deltaZ = targetPos[2] - pos.z;
    const movementMagnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    
    let bankZ = 0;
    let pitchX = 0;
    
    if (mode === "spaceship") {
      if (section === 5) {
        const distanceProgress = Math.min(pos.z / 12, 1.0);
        pitchX = -0.35 * distanceProgress;
        bankZ = Math.sin(clock.elapsedTime * 0.4) * 0.15 * distanceProgress;
      } else if (isScrolling || movementMagnitude > 0.4) {
        bankZ = Math.max(-0.9, Math.min(0.9, -deltaX * 0.4));
        pitchX = Math.max(-0.5, Math.min(0.5, -deltaY * 0.25));
      }
    }

    const rot = groupRef.current.rotation;
    const targetRotX = targetRot[0] + pitchX;
    const targetRotY = targetRot[1];
    const targetRotZ = targetRot[2] + bankZ;

    const rotLerpRate = Math.min(delta * 4.0, 0.18);
    rot.x = THREE.MathUtils.lerp(rot.x, targetRotX, rotLerpRate);
    rot.y = THREE.MathUtils.lerp(rot.y, targetRotY, rotLerpRate);
    rot.z = THREE.MathUtils.lerp(rot.z, targetRotZ, rotLerpRate);
  });

  return (
    <group
      ref={groupRef}
      position={[sideX, 0.8, 0]}
      rotation={[0, -0.5, 0]}
      visible={mode === "spaceship"}
    >
      {mode === "spaceship" && (
        <Float speed={2.5} floatIntensity={0.6} rotationIntensity={0.3}>
          <group ref={spaceshipRef}>
            <Spaceship scale={spaceshipScale} engineGlow={true} />
          </group>
        </Float>
      )}
    </group>
  );
}
