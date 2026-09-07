import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  createOrbitingCodeStripTexture,
  createOrbitingBinaryStripTexture
} from './codeTextures';

/**
 * NeuralCodeNexus: The centerpiece of the Living Code Universe.
 * Replaces the generic geometric sphere with an interactive Quantum Logic Core,
 * interconnected AST graph nodes, and counter-rotating holographic code ribbons.
 */
export default function NeuralCodeNexus({ reducedMotion = false }) {
  const rootRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const beaconRef = useRef();
  const graphLinesRef = useRef();

  // Textures generated once
  const codeStripTex = useMemo(() => createOrbitingCodeStripTexture(), []);
  const binaryStripTex = useMemo(() => createOrbitingBinaryStripTexture(), []);

  // Neural AST node graph positions
  const graphNodes = useMemo(() => {
    return [
      new THREE.Vector3(0, 1.3, 0),        // CORE/ROOT
      new THREE.Vector3(1.3, 0.4, 0.5),    // API
      new THREE.Vector3(-1.2, 0.5, -0.6),  // UI
      new THREE.Vector3(0.9, -0.9, 0.6),   // DATA
      new THREE.Vector3(-0.9, -0.8, 0.5),  // AI
      new THREE.Vector3(0.2, -0.2, -1.3),  // CLOUD
    ];
  }, []);

  // Line segments connecting the AST graph
  const lineGeometry = useMemo(() => {
    const points = [];
    const connections = [
      [0, 1], [0, 2], [0, 5],
      [1, 3], [2, 4], [3, 4],
      [1, 5], [2, 5], [3, 5], [4, 5]
    ];

    for (const [from, to] of connections) {
      points.push(graphNodes[from]);
      points.push(graphNodes[to]);
    }

    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [graphNodes]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (reducedMotion) {
      if (rootRef.current) rootRef.current.rotation.y = 0.4;
      return;
    }

    // Pointer-influenced tilt
    const targetRotX = state.pointer.y * 0.35;
    const targetRotY = state.pointer.x * 0.45;

    if (rootRef.current) {
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        targetRotX,
        delta * 2.5
      );
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        targetRotY + t * 0.08,
        delta * 2.5
      );
    }

    // Central Core breathing & subtle rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.4;
      coreRef.current.rotation.z = t * 0.2;
      const pulse = 1 + Math.sin(t * 2.2) * 0.04;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Horizontal Code Rail scroll & rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.y += delta * 0.25;
      if (codeStripTex) {
        codeStripTex.offset.x -= delta * 0.05;
      }
    }

    // Tilted Binary Rail counter-rotation & scroll
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.2;
      if (binaryStripTex) {
        binaryStripTex.offset.x += delta * 0.06;
      }
    }

    // Orbiting data beacon running along perimeter
    if (beaconRef.current) {
      const beaconAngle = t * 1.5;
      const beaconRadius = 1.95;
      beaconRef.current.position.set(
        Math.cos(beaconAngle) * beaconRadius,
        Math.sin(beaconAngle * 0.8) * 0.3,
        Math.sin(beaconAngle) * beaconRadius
      );
    }

    // Pulse line opacity
    if (graphLinesRef.current) {
      graphLinesRef.current.material.opacity = 0.4 + Math.sin(t * 3) * 0.2;
    }
  });

  return (
    <group ref={rootRef} position={[0, 0, 0]}>
      {/* 1. Central Quantum Logic Processor Core */}
      <group ref={coreRef}>
        {/* Inner high-density obsidian cube */}
        <mesh>
          <boxGeometry args={[0.95, 0.95, 0.95]} />
          <meshStandardMaterial
            color="#141414"
            emissive="#00E5FF"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>

        {/* Outer glowing circuit wireframe lattice */}
        <mesh>
          <boxGeometry args={[1.05, 1.05, 1.05]} />
          <meshStandardMaterial
            color="#00F5A0"
            emissive="#00F5A0"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Core quantum node beacon */}
        <pointLight color="#00E5FF" intensity={2.0} distance={5} />
      </group>

      {/* 2. Neural AST Node Graph */}
      <group>
        {/* Glowing laser lines connecting nodes */}
        <lineSegments ref={graphLinesRef} geometry={lineGeometry}>
          <lineBasicMaterial
            color="#00E5FF"
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {/* Node Vertices with data spheres */}
        {graphNodes.map((pos, idx) => (
          <group key={idx} position={pos}>
            <mesh>
              <sphereGeometry args={[0.075, 16, 16]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? '#00E5FF' : '#00F5A0'}
                emissive={idx % 2 === 0 ? '#00E5FF' : '#00F5A0'}
                emissiveIntensity={0.8}
                roughness={0.1}
              />
            </mesh>
            {/* Halo pulse */}
            <mesh>
              <sphereGeometry args={[0.12, 12, 12]} />
              <meshBasicMaterial
                color={idx % 2 === 0 ? '#00E5FF' : '#00F5A0'}
                transparent
                opacity={0.25}
                wireframe
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* 3. Orbiting Syntax Ribbon (Horizontal) */}
      <group ref={ring1Ref}>
        <mesh>
          <cylinderGeometry
            args={[1.75, 1.75, 0.28, 64, 1, true]}
          />
          <meshBasicMaterial
            map={codeStripTex}
            transparent
            side={THREE.DoubleSide}
            opacity={0.92}
          />
        </mesh>
        {/* Accent rail ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.75, 0.012, 16, 64]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* 4. Orbiting Binary Stream Ribbon (Tilted 45°) */}
      <group ref={ring2Ref} rotation={[0.78, 0, 0.5]}>
        <mesh>
          <cylinderGeometry
            args={[2.05, 2.05, 0.26, 64, 1, true]}
          />
          <meshBasicMaterial
            map={binaryStripTex}
            transparent
            side={THREE.DoubleSide}
            opacity={0.88}
          />
        </mesh>
        {/* Mint laser ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.05, 0.01, 16, 64]} />
          <meshStandardMaterial
            color="#00F5A0"
            emissive="#00F5A0"
            emissiveIntensity={0.6}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>

      {/* 5. Tilted Thin Cyber Ring with Traveling Beacon Bead */}
      <group rotation={[-0.6, 0.4, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.95, 0.008, 16, 64]} />
          <meshBasicMaterial
            color="#FACC15"
            transparent
            opacity={0.4}
          />
        </mesh>
        {/* Traveling Data Packet Beacon */}
        <mesh ref={beaconRef}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshBasicMaterial color="#FACC15" />
          <pointLight color="#FACC15" intensity={1.5} distance={2.5} />
        </mesh>
      </group>
    </group>
  );
}
