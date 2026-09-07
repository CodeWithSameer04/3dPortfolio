import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * LivingJavaCode
 * Clean, calm, non-overwhelming 3D Living Code centerpiece.
 * Displays an authentic, readable Java class with syntax highlighting,
 * active line execution glow, blinking cursor, and smooth mouse parallax.
 */
export default function LivingJavaCode({ reducedMotion = false, isMobile = false }) {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Execution state: cycles through lines 11, 12, 13 in the loop
  const execIndexRef = useRef(2); // 0: brainstorm, 1: build, 2: deploy
  const lastExecTimeRef = useRef(0);
  const cursorBlinkRef = useRef(true);
  const lastCursorBlinkRef = useRef(0);

  // High-DPI canvas for the living IDE texture
  const { canvas, ctx, texture } = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return { canvas, ctx, texture };
  }, []);

  // Java code definition
  const javaLines = useMemo(
    () => [
      { num: '01', tokens: [{ text: 'package ', color: '#00E5FF' }, { text: 'com.sameer.portfolio;', color: '#E2E8F0' }] },
      { num: '02', tokens: [] },
      { num: '03', tokens: [{ text: '/**', color: '#64748B' }, { text: ' Living Code • Sameer Raj ', color: '#94A3B8' }, { text: '*/', color: '#64748B' }] },
      { num: '04', tokens: [{ text: 'public class ', color: '#00E5FF' }, { text: 'Developer ', color: '#00F5A0' }, { text: '{', color: '#E2E8F0' }] },
      { num: '05', tokens: [{ text: '    private final String ', color: '#00E5FF' }, { text: 'name', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Sameer Raj"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
      { num: '06', tokens: [{ text: '    private final String ', color: '#00E5FF' }, { text: 'role', color: '#00F5A0' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Full Stack Developer"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
      { num: '07', tokens: [{ text: '    private boolean ', color: '#00E5FF' }, { text: 'isInspired', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'true', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
      { num: '08', tokens: [] },
      { num: '09', tokens: [{ text: '    public void ', color: '#00E5FF' }, { text: 'createImpact', color: '#38BDF8' }, { text: '() {', color: '#E2E8F0' }] },
      { num: '10', tokens: [{ text: '        while ', color: '#00E5FF' }, { text: '(', color: '#E2E8F0' }, { text: 'isInspired', color: '#FFFFFF' }, { text: ') {', color: '#E2E8F0' }] },
      { num: '11', stepId: 0, tokens: [{ text: '            Idea ', color: '#00F5A0' }, { text: 'idea', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'brainstorm', color: '#38BDF8' }, { text: '();', color: '#E2E8F0' }] },
      { num: '12', stepId: 1, tokens: [{ text: '            App ', color: '#00F5A0' }, { text: 'app', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'build', color: '#38BDF8' }, { text: '(', color: '#E2E8F0' }, { text: 'idea', color: '#FFFFFF' }, { text: ');', color: '#E2E8F0' }] },
      { num: '13', stepId: 2, tokens: [{ text: '            app.', color: '#E2E8F0' }, { text: 'deploy', color: '#00F5A0' }, { text: '(); ', color: '#E2E8F0' }, { text: '// live in production', color: '#64748B' }] },
      { num: '14', tokens: [{ text: '        }', color: '#E2E8F0' }] },
      { num: '15', tokens: [{ text: '    }', color: '#E2E8F0' }] },
      { num: '16', tokens: [{ text: '}', color: '#E2E8F0' }] },
    ],
    []
  );

  // Function to draw the complete IDE card onto canvas
  const drawEditor = (activeStep, showCursor) => {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. IDE Window Body Background (Deep charcoal / Glass aesthetic)
    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, 24);
    ctx.fill();

    // 2. Window Header Bar
    ctx.fillStyle = '#1B1B1F';
    ctx.beginPath();
    ctx.roundRect(0, 0, w, 70, [24, 24, 0, 0]);
    ctx.fill();

    // Separator line under header
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 70);
    ctx.lineTo(w, 70);
    ctx.stroke();

    // Window controls (macOS style dots)
    const dots = [
      { x: 36, color: '#EF4444' }, // Close
      { x: 62, color: '#F59E0B' }, // Minimize
      { x: 88, color: '#10B981' }, // Expand
    ];
    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, 35, 6.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Active File Tab
    const tabX = 130;
    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(tabX, 14, 230, 56, [12, 12, 0, 0]);
    ctx.fill();

    // Subtle top border highlight on active tab
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tabX + 8, 14);
    ctx.lineTo(tabX + 222, 14);
    ctx.stroke();

    // Tab title: Coffee icon + Developer.java
    ctx.fillStyle = '#E2E8F0';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText('☕ Developer.java', tabX + 24, 48);

    // Right-side Status / Runtime indicator
    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(w - 180, 35, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#94A3B8';
    ctx.font = '15px "JetBrains Mono", monospace';
    ctx.fillText('JDK 21 • RUNNING', w - 165, 41);

    // 3. Gutter Background (Line Numbers column)
    const gutterWidth = 90;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.fillRect(0, 70, gutterWidth, h - 120);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gutterWidth, 70);
    ctx.lineTo(gutterWidth, h - 50);
    ctx.stroke();

    // 4. Render Code Lines
    const startY = 120;
    const lineHeight = 42;
    const codeStartX = 115;

    javaLines.forEach((line, idx) => {
      const lineY = startY + idx * lineHeight;
      const isExecuting = line.stepId === activeStep;

      // Active Line Execution Highlight
      if (isExecuting) {
        ctx.fillStyle = 'rgba(0, 229, 255, 0.09)';
        ctx.fillRect(gutterWidth + 1, lineY - 30, w - gutterWidth - 1, lineHeight);

        // Subtle left indicator bar in gutter
        ctx.fillStyle = '#00E5FF';
        ctx.fillRect(gutterWidth - 4, lineY - 30, 4, lineHeight);

        // Execution arrow
        ctx.fillStyle = '#00F5A0';
        ctx.font = 'bold 16px "JetBrains Mono", monospace';
        ctx.fillText('▶', 18, lineY - 4);
      }

      // Line number
      ctx.fillStyle = isExecuting ? '#00E5FF' : '#475569';
      ctx.font = '16px "JetBrains Mono", monospace';
      ctx.fillText(line.num, 38, lineY - 4);

      // Line Tokens
      let tokenX = codeStartX;
      ctx.font = '21px "JetBrains Mono", monospace';

      line.tokens.forEach((token) => {
        ctx.fillStyle = token.color;
        ctx.fillText(token.text, tokenX, lineY - 4);
        tokenX += ctx.measureText(token.text).width;
      });

      // Blinking Cursor on active executing line
      if (isExecuting && showCursor) {
        ctx.fillStyle = '#00E5FF';
        ctx.fillRect(tokenX + 6, lineY - 26, 3, 26);
      }
    });

    // 5. Bottom Status Bar
    const statusY = h - 50;
    ctx.fillStyle = '#17171B';
    ctx.beginPath();
    ctx.roundRect(0, statusY, w, 50, [0, 0, 24, 24]);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, statusY);
    ctx.lineTo(w, statusY);
    ctx.stroke();

    // Status texts
    ctx.fillStyle = '#00F5A0';
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    const statusMsg =
      activeStep === 0
        ? '⚡ Executing: brainstorm() -> conceptualizing system architecture'
        : activeStep === 1
        ? '⚡ Executing: build(idea) -> compiling reactive components'
        : '✓ Executing: app.deploy() -> live at 60 FPS';
    ctx.fillText(statusMsg, 24, statusY + 31);

    ctx.fillStyle = '#64748B';
    ctx.font = '14px "JetBrains Mono", monospace';
    ctx.fillText('UTF-8   LF   Java 21', w - 190, statusY + 31);

    // Clean outer perimeter border (replaces 3D wireframe without any diagonal artifacts)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(1, 1, w - 2, h - 2, 24);
    ctx.stroke();

    texture.needsUpdate = true;
  };

  // Initial draw
  useEffect(() => {
    drawEditor(execIndexRef.current, true);
  }, []);

  // Frame loop: smooth hover parallax tilt and gentle breathing float
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // 1. Update cursor blink (every 500ms) and execution line (every 2.8s)
    let shouldRedraw = false;

    if (time - lastCursorBlinkRef.current > 0.5) {
      cursorBlinkRef.current = !cursorBlinkRef.current;
      lastCursorBlinkRef.current = time;
      shouldRedraw = true;
    }

    if (time - lastExecTimeRef.current > 2.8) {
      execIndexRef.current = (execIndexRef.current + 1) % 3;
      lastExecTimeRef.current = time;
      shouldRedraw = true;
    }

    if (shouldRedraw) {
      drawEditor(execIndexRef.current, cursorBlinkRef.current);
    }

    // 2. Calm, gentle levitation float
    if (!reducedMotion) {
      meshRef.current.position.y = Math.sin(time * 1.2) * 0.06;

      // 3. Smooth mouse parallax tilt (lerp)
      targetRotation.current.x = -state.pointer.y * 0.14;
      targetRotation.current.y = state.pointer.x * 0.2;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.current.x,
        0.06
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current.y,
        0.06
      );
    }
  });

  const cardWidth = isMobile ? 3.2 : 4.1;
  const cardHeight = isMobile ? 2.4 : 3.08;

  return (
    <group position={[0, 0, 0]}>
      {/* Soft ambient point lights around the code card */}
      <pointLight position={[0, 1.5, 1.5]} intensity={1.2} color="#00E5FF" distance={8} />
      <pointLight position={[2, -1.5, 1.2]} intensity={0.8} color="#00F5A0" distance={6} />
      <pointLight position={[0, 0, -1]} intensity={1.5} color="#4F46E5" distance={5} />

      {/* Main 3D Living Code Card */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[cardWidth, cardHeight, 0.06]} />
        {/* Six face materials: only the front face (+Z, index 4) gets the IDE texture */}
        <meshStandardMaterial attach="material-0" color="#18181C" roughness={0.3} metalness={0.6} />
        <meshStandardMaterial attach="material-1" color="#18181C" roughness={0.3} metalness={0.6} />
        <meshStandardMaterial attach="material-2" color="#18181C" roughness={0.3} metalness={0.6} />
        <meshStandardMaterial attach="material-3" color="#18181C" roughness={0.3} metalness={0.6} />
        <meshStandardMaterial
          attach="material-4"
          map={texture}
          roughness={0.2}
          metalness={0.1}
        />
        <meshStandardMaterial attach="material-5" color="#111113" roughness={0.5} metalness={0.8} />
      </mesh>
    </group>
  );
}
