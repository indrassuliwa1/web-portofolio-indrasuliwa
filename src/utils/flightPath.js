import * as THREE from "three";

/**
 * Calculates astronaut 3D transform keyframe targets based on scroll progress (0 to 1).
 * Coordinates are mapped to keep the astronaut cinematographically visible across sections.
 */
export function getAstronautFlightTarget(p) {
  // Clamp progress between 0 and 1
  const progress = Math.min(Math.max(p, 0), 1);

  // 1. Hero Section (0% to 20%): Hovering on right, idle waving
  if (progress <= 0.2) {
    return {
      pos: [2.0, 0.1, 0.0],
      rot: [0.1, -0.45, 0.05],
      scale: 0.85,
      isWaving: true,
      thrusterGlow: 0.8,
    };
  }

  // 2. Transition to About Me (20% to 40%): Tilts & flies forward to left
  if (progress <= 0.4) {
    const t = (progress - 0.2) / 0.2;
    return {
      pos: [
        THREE.MathUtils.lerp(2.0, -2.1, t),
        THREE.MathUtils.lerp(0.1, -0.5, t),
        THREE.MathUtils.lerp(0.0, -1.0, t),
      ],
      rot: [
        THREE.MathUtils.lerp(0.1, 0.5, t),
        THREE.MathUtils.lerp(-0.45, 0.65, t),
        THREE.MathUtils.lerp(0.05, -0.35, t),
      ],
      scale: THREE.MathUtils.lerp(0.85, 0.75, t),
      isWaving: false,
      thrusterGlow: 2.2,
    };
  }

  // 3. Transition to Experience (40% to 60%): Flies down to center-right timeline
  if (progress <= 0.6) {
    const t = (progress - 0.4) / 0.2;
    return {
      pos: [
        THREE.MathUtils.lerp(-2.1, 2.2, t),
        THREE.MathUtils.lerp(-0.5, -0.6, t),
        THREE.MathUtils.lerp(-1.0, 0.0, t),
      ],
      rot: [
        THREE.MathUtils.lerp(0.5, -0.2, t),
        THREE.MathUtils.lerp(0.65, -0.5, t),
        THREE.MathUtils.lerp(-0.35, 0.15, t),
      ],
      scale: THREE.MathUtils.lerp(0.75, 0.8, t),
      isWaving: false,
      thrusterGlow: 1.8,
    };
  }

  // 4. Transition to Certifications & Projects (60% to 90%): Distant top-left, scaled down
  if (progress <= 0.9) {
    const t = (progress - 0.6) / 0.3;
    return {
      pos: [
        THREE.MathUtils.lerp(2.2, -2.4, t),
        THREE.MathUtils.lerp(-0.6, 1.2, t),
        THREE.MathUtils.lerp(0.0, -2.2, t),
      ],
      rot: [
        THREE.MathUtils.lerp(-0.2, 0.25, t),
        THREE.MathUtils.lerp(-0.5, 0.35, t),
        THREE.MathUtils.lerp(0.15, -0.2, t),
      ],
      scale: THREE.MathUtils.lerp(0.8, 0.52, t),
      isWaving: false,
      thrusterGlow: 1.2,
    };
  }

  // 5. Contact Section (90% to 100%): Flies closer to center-right, waving goodbye
  const t = (progress - 0.9) / 0.1;
  return {
    pos: [
      THREE.MathUtils.lerp(-2.4, 1.6, t),
      THREE.MathUtils.lerp(1.2, -0.2, t),
      THREE.MathUtils.lerp(-2.2, 0.5, t),
    ],
    rot: [
      THREE.MathUtils.lerp(0.25, 0.05, t),
      THREE.MathUtils.lerp(0.35, -0.35, t),
      THREE.MathUtils.lerp(-0.2, 0.05, t),
    ],
    scale: THREE.MathUtils.lerp(0.52, 0.9, t),
    isWaving: true,
    thrusterGlow: 1.0,
  };
}
