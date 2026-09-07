import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Floating geometric elements that gently drift and rotate in the background.
 */
export default function FloatingObjects({ reducedMotion = false }) {
  const groupRef = useRef();
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();

    if (item1.current) {
      item1.current.position.y = 1.4 + Math.sin(t * 0.8) * 0.2;
      item1.current.rotation.x = t * 0.2;
      item1.current.rotation.y = t * 0.3;
    }

    if (item2.current) {
      item2.current.position.y = -1.6 + Math.cos(t * 0.7 + 1) * 0.25;
      item2.current.rotation.x = t * 0.25;
      item2.current.rotation.z = t * 0.15;
    }

    if (item3.current) {
      item3.current.position.y = 0.5 + Math.sin(t * 0.6 + 2) * 0.15;
      item3.current.rotation.y = t * 0.35;
      item3.current.rotation.z = t * 0.2;
    }

    if (item4.current) {
      item4.current.position.y = -0.8 + Math.cos(t * 0.9 + 3) * 0.18;
      item4.current.rotation.x = t * 0.3;
      item4.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Octahedron top right */}
      <mesh ref={item1} position={[2.4, 1.4, -0.5]}>
        <octahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color="#161616"
          emissive="#00E5FF"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Icosahedron bottom left */}
      <mesh ref={item2} position={[-2.5, -1.6, -0.8]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#161616"
          emissive="#00F5A0"
          emissiveIntensity={0.35}
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Torus top left */}
      <mesh ref={item3} position={[-2.8, 0.8, -1.2]}>
        <torusGeometry args={[0.4, 0.12, 16, 32]} />
        <meshStandardMaterial
          color="#121212"
          emissive="#00E5FF"
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Dodecahedron bottom right */}
      <mesh ref={item4} position={[2.6, -1.1, -1.0]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#161616"
          emissive="#00F5A0"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
          wireframe
        />
      </mesh>
    </group>
  );
}
