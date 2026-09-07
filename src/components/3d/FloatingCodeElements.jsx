import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  createTerminalTexture,
  createLogicCardTexture,
  createMetricsCardTexture,
  createTokenTexture
} from './codeTextures';

/**
 * FloatingCodeElements: Holographic code windows, telemetry displays,
 * and syntax tokens that drift organically around the Code Nexus.
 */
export default function FloatingCodeElements({ reducedMotion = false }) {
  const groupRef = useRef();

  // Cards
  const terminalRef = useRef();
  const logicRef = useRef();
  const metricsRef = useRef();

  // Chips
  const chip1Ref = useRef();
  const chip2Ref = useRef();
  const chip3Ref = useRef();
  const chip4Ref = useRef();

  // Textures generated once
  const terminalTex = useMemo(() => createTerminalTexture(), []);
  const logicTex = useMemo(() => createLogicCardTexture(), []);
  const metricsTex = useMemo(() => createMetricsCardTexture(), []);
  const chip1Tex = useMemo(() => createTokenTexture('{ }', '#00E5FF'), []);
  const chip2Tex = useMemo(() => createTokenTexture('</>', '#00F5A0'), []);
  const chip3Tex = useMemo(() => createTokenTexture('=>', '#FACC15'), []);
  const chip4Tex = useMemo(() => createTokenTexture('01', '#00E5FF'), []);

  useFrame((state, delta) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();

    // Group-level interactive parallax response
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.25;
      const targetY = state.pointer.y * 0.2;
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        delta * 3
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        delta * 3
      );
    }

    // 1. Terminal Window Bobbing & Slight Rotation
    if (terminalRef.current) {
      terminalRef.current.position.y = 1.25 + Math.sin(t * 0.9) * 0.12;
      terminalRef.current.position.x = 2.2 + Math.cos(t * 0.7) * 0.08;
      terminalRef.current.rotation.y = -0.28 + Math.sin(t * 0.5) * 0.06;
      terminalRef.current.rotation.x = 0.12 + Math.cos(t * 0.6) * 0.05;
    }

    // 2. Logic Card Bobbing
    if (logicRef.current) {
      logicRef.current.position.y = -1.15 + Math.cos(t * 0.8 + 1.2) * 0.14;
      logicRef.current.position.x = -2.3 + Math.sin(t * 0.6) * 0.08;
      logicRef.current.rotation.y = 0.32 + Math.cos(t * 0.5) * 0.06;
      logicRef.current.rotation.x = -0.1 + Math.sin(t * 0.7) * 0.05;
    }

    // 3. Metrics Card Bobbing
    if (metricsRef.current) {
      metricsRef.current.position.y = 1.35 + Math.sin(t * 0.75 + 2.1) * 0.13;
      metricsRef.current.position.x = -2.35 + Math.cos(t * 0.5) * 0.09;
      metricsRef.current.rotation.y = 0.24 + Math.sin(t * 0.6) * 0.05;
      metricsRef.current.rotation.z = Math.cos(t * 0.4) * 0.04;
    }

    // 4. Token Chips Floating & Orbiting
    if (chip1Ref.current) {
      chip1Ref.current.position.y = -1.55 + Math.sin(t * 1.1 + 0.5) * 0.18;
      chip1Ref.current.rotation.y = t * 0.6;
      chip1Ref.current.rotation.x = t * 0.4;
    }

    if (chip2Ref.current) {
      chip2Ref.current.position.y = -1.75 + Math.cos(t * 1.0 + 1.5) * 0.15;
      chip2Ref.current.rotation.y = -t * 0.5;
      chip2Ref.current.rotation.z = t * 0.3;
    }

    if (chip3Ref.current) {
      chip3Ref.current.position.y = -0.15 + Math.sin(t * 0.85 + 3.0) * 0.16;
      chip3Ref.current.rotation.y = t * 0.45;
      chip3Ref.current.rotation.x = -t * 0.35;
    }

    if (chip4Ref.current) {
      chip4Ref.current.position.y = 0.25 + Math.cos(t * 0.95 + 2.5) * 0.14;
      chip4Ref.current.rotation.y = -t * 0.7;
      chip4Ref.current.rotation.x = t * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Card 1: Holographic Terminal Box (Top Right) */}
      <mesh ref={terminalRef} position={[2.2, 1.25, -0.4]}>
        <planeGeometry args={[1.5, 0.75]} />
        <meshBasicMaterial
          map={terminalTex}
          transparent
          opacity={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Card 2: React State & Hooks (Bottom Left) */}
      <mesh ref={logicRef} position={[-2.3, -1.15, -0.6]}>
        <planeGeometry args={[1.45, 0.72]} />
        <meshBasicMaterial
          map={logicTex}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Card 3: Runtime Metrics & Telemetry (Top Left) */}
      <mesh ref={metricsRef} position={[-2.35, 1.35, -0.9]}>
        <planeGeometry args={[1.4, 0.7]} />
        <meshBasicMaterial
          map={metricsTex}
          transparent
          opacity={0.88}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Chip 1: { } Bracket Token */}
      <mesh ref={chip1Ref} position={[1.8, -1.55, -0.5]}>
        <boxGeometry args={[0.34, 0.34, 0.04]} />
        <meshStandardMaterial
          map={chip1Tex}
          color="#ffffff"
          emissiveMap={chip1Tex}
          emissive="#ffffff"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Chip 2: </> Element Token */}
      <mesh ref={chip2Ref} position={[-1.5, -1.2, 0.5]}>
        <boxGeometry args={[0.36, 0.36, 0.04]} />
        <meshStandardMaterial
          map={chip2Tex}
          color="#ffffff"
          emissiveMap={chip2Tex}
          emissive="#ffffff"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Chip 3: => Arrow Function Token */}
      <mesh ref={chip3Ref} position={[2.5, -0.15, -1.1]}>
        <boxGeometry args={[0.32, 0.32, 0.04]} />
        <meshStandardMaterial
          map={chip3Tex}
          color="#ffffff"
          emissiveMap={chip3Tex}
          emissive="#ffffff"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Chip 4: 01 Binary Token */}
      <mesh ref={chip4Ref} position={[-2.6, 0.25, -1.0]}>
        <boxGeometry args={[0.3, 0.3, 0.04]} />
        <meshStandardMaterial
          map={chip4Tex}
          color="#ffffff"
          emissiveMap={chip4Tex}
          emissive="#ffffff"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
