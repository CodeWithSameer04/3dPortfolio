import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * CameraRig adds subtle mouse parallax movement to the 3D scene.
 * If reduced motion is enabled, it keeps the camera locked.
 */
export default function CameraRig({ reducedMotion = false }) {
  const target = useRef(new THREE.Vector3(0, 0, 6));

  useFrame((state, delta) => {
    if (reducedMotion) {
      state.camera.position.lerp(new THREE.Vector3(0, 0, 6), delta * 2);
      state.camera.lookAt(0, 0, 0);
      return;
    }

    // Subtle pointer parallax: gentle, non-overwhelming
    const mouseX = state.pointer.x * 0.35;
    const mouseY = state.pointer.y * 0.25;

    target.current.set(mouseX, mouseY, 5.8);
    state.camera.position.lerp(target.current, delta * 2.0);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
