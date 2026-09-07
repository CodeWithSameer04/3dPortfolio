import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * CameraRig adds subtle mouse parallax movement to the 3D scene.
 * If reduced motion is enabled, it keeps the camera locked.
 */
export default function CameraRig({
  reducedMotion = false,
  isMobile = false,
  isTablet = false,
}) {
  const cameraDistance = isMobile ? 4.1 : isTablet ? 4.3 : 4.4;
  const target = useRef(new THREE.Vector3(0, 0, cameraDistance));

  useFrame((state, delta) => {
    if (reducedMotion) {
      state.camera.position.lerp(new THREE.Vector3(0, 0, cameraDistance), delta * 2);
      state.camera.lookAt(0, 0, 0);
      return;
    }

    // Subtle pointer parallax: gentle, calibrated per device
    const mouseX = state.pointer.x * (isMobile ? 0.15 : 0.30);
    const mouseY = state.pointer.y * (isMobile ? 0.10 : 0.20);

    target.current.set(mouseX, mouseY, cameraDistance);
    state.camera.position.lerp(target.current, delta * 2.0);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
