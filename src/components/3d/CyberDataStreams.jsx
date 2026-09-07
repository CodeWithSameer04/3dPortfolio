import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * CyberDataStreams: Volumetric matrix of streaming data packets
 * flowing along logarithmic helical pipelines around the Code Nexus.
 */
export default function CyberDataStreams({ count = 1000, reducedMotion = false }) {
  const pointsRef = useRef();

  // Precompute initial positions, stream velocities, and colors
  const [positions, colors, particleData] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const data = [];

    const colorCyan = new THREE.Color('#00E5FF');
    const colorMint = new THREE.Color('#00F5A0');
    const colorYellow = new THREE.Color('#FACC15');
    const tempCol = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Cylindrical helical stream coordinates
      const streamId = i % 4;
      const progress = Math.random();
      const radius = 1.2 + Math.random() * 4.2;
      const angle = progress * Math.PI * 2 + (streamId * Math.PI) / 2;
      const y = (Math.random() - 0.5) * 5.0;

      pos[i * 3] = radius * Math.cos(angle);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(angle);

      // Color selection (60% Cyan, 30% Mint, 10% Yellow)
      const rand = Math.random();
      if (rand < 0.6) {
        tempCol.copy(colorCyan);
      } else if (rand < 0.9) {
        tempCol.copy(colorMint);
      } else {
        tempCol.copy(colorYellow);
      }

      col[i * 3] = tempCol.r;
      col[i * 3 + 1] = tempCol.g;
      col[i * 3 + 2] = tempCol.b;

      data.push({
        radius,
        angle,
        y,
        speed: 0.2 + Math.random() * 0.4,
        ySpeed: (Math.random() - 0.5) * 0.15,
        originalRadius: radius,
      });
    }

    return [pos, col, data];
  }, [count]);

  useFrame((state, delta) => {
    if (reducedMotion || !pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    const pointerX = state.pointer.x * 2;
    const pointerY = state.pointer.y * 2;

    for (let i = 0; i < count; i++) {
      const p = particleData[i];

      // Update orbital angle
      p.angle += delta * p.speed;
      p.y += delta * p.ySpeed;

      // Wrap vertically
      if (p.y > 2.6) p.y = -2.6;
      if (p.y < -2.6) p.y = 2.6;

      // Subtle breathing radius expansion
      const r = p.originalRadius + Math.sin(t * 1.5 + p.angle) * 0.15;

      let targetX = r * Math.cos(p.angle);
      let targetZ = r * Math.sin(p.angle);
      let targetY = p.y;

      // Pointer influence / magnetic ripple
      const dx = targetX - pointerX;
      const dy = targetY - pointerY;
      const distSq = dx * dx + dy * dy;

      if (distSq < 2.5) {
        const force = (2.5 - distSq) * 0.15;
        targetX += dx * force;
        targetY += dy * force;
      }

      array[i * 3] = targetX;
      array[i * 3 + 1] = targetY;
      array[i * 3 + 2] = targetZ;
    }

    posAttr.needsUpdate = true;

    // Overall slow universe drift
    pointsRef.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
