import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * InteractiveSphere: Central abstract 3D object
 * Features a glowing inner faceted core and a responsive outer wireframe cage.
 */
export default function InteractiveSphere({ reducedMotion = false }) {
  const outerRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (reducedMotion) {
      if (outerRef.current) outerRef.current.rotation.y = 0.5;
      if (innerRef.current) innerRef.current.rotation.y = -0.5;
      return;
    }

    // Pointer-influenced rotations
    const targetRotX = state.pointer.y * 0.4;
    const targetRotY = state.pointer.x * 0.5;

    if (outerRef.current) {
      outerRef.current.rotation.x = THREE.MathUtils.lerp(
        outerRef.current.rotation.x,
        targetRotX + t * 0.15,
        delta * 2
      );
      outerRef.current.rotation.y = THREE.MathUtils.lerp(
        outerRef.current.rotation.y,
        targetRotY + t * 0.25,
        delta * 2
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = THREE.MathUtils.lerp(
        innerRef.current.rotation.x,
        -targetRotX - t * 0.2,
        delta * 2
      );
      innerRef.current.rotation.y = THREE.MathUtils.lerp(
        innerRef.current.rotation.y,
        -targetRotY + t * 0.3,
        delta * 2
      );

      // Subtle breathing pulse
      const scale = 1 + Math.sin(t * 1.5) * 0.04;
      innerRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
      ringRef.current.rotation.x = Math.sin(t * 0.5) * 0.3 + 1.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer abstract wireframe cage */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.35}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Inner faceted metallic core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#141414"
          emissive="#00E5FF"
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.8}
          flatShading
        />
      </mesh>

      {/* Orbital accent ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.0, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#00F5A0"
          emissive="#00F5A0"
          emissiveIntensity={0.6}
          transparent
          opacity={0.65}
        />
      </mesh>
    </group>
  );
}
