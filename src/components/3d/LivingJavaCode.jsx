import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * LivingJavaCode
 * Highly responsive, readable, and beautifully formatted 3D Living Code centerpiece.
 * Seamlessly adapts typography, line count, and 3D card scale across Mobile, iPad, and Desktop.
 */
export default function LivingJavaCode({
  reducedMotion = false,
  isMobile = false,
  isTablet = false,
  isTouch = false,
}) {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Execution state: cycles through lines in the loop (stepId 0: brainstorm, 1: build, 2: deploy)
  const execIndexRef = useRef(2);
  const lastExecTimeRef = useRef(0);
  const cursorBlinkRef = useRef(true);
  const lastCursorBlinkRef = useRef(0);

  // Responsive 3D frustum sizing via Three.js useThree()
  const { viewport } = useThree();

  const { cardWidth, cardHeight } = useMemo(() => {
    const cardAspect = isMobile ? 1.16 : isTablet ? 1.22 : 1.28;
    // Fill ~94% on mobile, ~90% on tablet, ~88% on desktop
    const fillFactor = isMobile ? 0.94 : isTablet ? 0.90 : 0.88;

    // Both horizontal and vertical bounds are respected so the card is as large as possible
    // without ever clipping during 3D rotation / floating
    const maxWFromWidth = viewport.width * fillFactor;
    const maxWFromHeight = (viewport.height * fillFactor) * cardAspect;

    const w = Math.min(maxWFromWidth, maxWFromHeight);
    const h = w / cardAspect;
    return { cardWidth: w, cardHeight: h };
  }, [viewport.width, viewport.height, isMobile, isTablet]);

  // High-DPI canvas adapted for device density and aspect ratio
  const { canvas, ctx, texture, canvasWidth, canvasHeight } = useMemo(() => {
    const canvas = document.createElement('canvas');
    const canvasWidth = isMobile ? 1200 : isTablet ? 1350 : 1440;
    const canvasHeight = isMobile ? 1020 : isTablet ? 1080 : 1120;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext('2d');
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return { canvas, ctx, texture, canvasWidth, canvasHeight };
  }, [isMobile, isTablet]);

  // Java code definition adapted per device category for maximum legibility
  const javaLines = useMemo(() => {
    if (isMobile) {
      // Mobile: 13 concise lines with larger font size and optimal contrast
      return [
        { num: '01', tokens: [{ text: '// Living Code • Sameer Raj', color: '#94A3B8' }] },
        { num: '02', tokens: [{ text: 'public class ', color: '#00E5FF' }, { text: 'Developer ', color: '#00F5A0' }, { text: '{', color: '#E2E8F0' }] },
        { num: '03', tokens: [{ text: '  String ', color: '#00E5FF' }, { text: 'name', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Sameer Raj"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
        { num: '04', tokens: [{ text: '  String ', color: '#00E5FF' }, { text: 'role', color: '#00F5A0' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Java & Full-Stack"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
        { num: '05', tokens: [] },
        { num: '06', tokens: [{ text: '  public void ', color: '#00E5FF' }, { text: 'run', color: '#38BDF8' }, { text: '() {', color: '#E2E8F0' }] },
        { num: '07', tokens: [{ text: '    while ', color: '#00E5FF' }, { text: '(', color: '#E2E8F0' }, { text: 'inspired', color: '#FFFFFF' }, { text: ') {', color: '#E2E8F0' }] },
        { num: '08', stepId: 0, tokens: [{ text: '      Idea ', color: '#00F5A0' }, { text: 'idea', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'brainstorm', color: '#38BDF8' }, { text: '();', color: '#E2E8F0' }] },
        { num: '09', stepId: 1, tokens: [{ text: '      App ', color: '#00F5A0' }, { text: 'app', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'build', color: '#38BDF8' }, { text: '(idea);', color: '#E2E8F0' }] },
        { num: '10', stepId: 2, tokens: [{ text: '      app.', color: '#E2E8F0' }, { text: 'deploy', color: '#00F5A0' }, { text: '();', color: '#E2E8F0' }] },
        { num: '11', tokens: [{ text: '    }', color: '#E2E8F0' }] },
        { num: '12', tokens: [{ text: '  }', color: '#E2E8F0' }] },
        { num: '13', tokens: [{ text: '}', color: '#E2E8F0' }] },
      ];
    }

    if (isTablet) {
      // iPad / Tablet: 14 balanced lines with clear breathing room
      return [
        { num: '01', tokens: [{ text: 'package ', color: '#00E5FF' }, { text: 'com.sameer.portfolio;', color: '#E2E8F0' }] },
        { num: '02', tokens: [{ text: '/**', color: '#64748B' }, { text: ' Living Code • Sameer Raj ', color: '#94A3B8' }, { text: '*/', color: '#64748B' }] },
        { num: '03', tokens: [{ text: 'public class ', color: '#00E5FF' }, { text: 'Developer ', color: '#00F5A0' }, { text: '{', color: '#E2E8F0' }] },
        { num: '04', tokens: [{ text: '  private final String ', color: '#00E5FF' }, { text: 'name', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Sameer Raj"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
        { num: '05', tokens: [{ text: '  private final String ', color: '#00E5FF' }, { text: 'role', color: '#00F5A0' }, { text: ' = ', color: '#E2E8F0' }, { text: '"Java & Full Stack"', color: '#FACC15' }, { text: ';', color: '#E2E8F0' }] },
        { num: '06', tokens: [] },
        { num: '07', tokens: [{ text: '  public void ', color: '#00E5FF' }, { text: 'createImpact', color: '#38BDF8' }, { text: '() {', color: '#E2E8F0' }] },
        { num: '08', tokens: [{ text: '    while ', color: '#00E5FF' }, { text: '(', color: '#E2E8F0' }, { text: 'isInspired', color: '#FFFFFF' }, { text: ') {', color: '#E2E8F0' }] },
        { num: '09', stepId: 0, tokens: [{ text: '      Idea ', color: '#00F5A0' }, { text: 'idea', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'brainstorm', color: '#38BDF8' }, { text: '();', color: '#E2E8F0' }] },
        { num: '10', stepId: 1, tokens: [{ text: '      App ', color: '#00F5A0' }, { text: 'app', color: '#FFFFFF' }, { text: ' = ', color: '#E2E8F0' }, { text: 'build', color: '#38BDF8' }, { text: '(idea);', color: '#E2E8F0' }] },
        { num: '11', stepId: 2, tokens: [{ text: '      app.', color: '#E2E8F0' }, { text: 'deploy', color: '#00F5A0' }, { text: '(); ', color: '#E2E8F0' }, { text: '// live @ 60fps', color: '#64748B' }] },
        { num: '12', tokens: [{ text: '    }', color: '#E2E8F0' }] },
        { num: '13', tokens: [{ text: '  }', color: '#E2E8F0' }] },
        { num: '14', tokens: [{ text: '}', color: '#E2E8F0' }] },
      ];
    }

    // Desktop: Full detailed Java class
    return [
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
    ];
  }, [isMobile, isTablet]);

  // Function to draw the complete IDE card onto canvas
  const drawEditor = (activeStep, showCursor) => {
    const w = canvasWidth;
    const h = canvasHeight;

    ctx.clearRect(0, 0, w, h);

    // 1. IDE Window Body Background (Deep charcoal / Glass aesthetic)
    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, 24);
    ctx.fill();

    // 2. Window Header Bar
    const headerHeight = isMobile ? 74 : 80;
    ctx.fillStyle = '#1B1B1F';
    ctx.beginPath();
    ctx.roundRect(0, 0, w, headerHeight, [24, 24, 0, 0]);
    ctx.fill();

    // Separator line under header
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, headerHeight);
    ctx.lineTo(w, headerHeight);
    ctx.stroke();

    // Window controls (macOS style dots)
    const dotStartX = isMobile ? 32 : 38;
    const dotGap = isMobile ? 22 : 28;
    const dotRadius = isMobile ? 6 : 7;
    const dots = [
      { x: dotStartX, color: '#EF4444' }, // Close
      { x: dotStartX + dotGap, color: '#F59E0B' }, // Minimize
      { x: dotStartX + dotGap * 2, color: '#10B981' }, // Expand
    ];
    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, headerHeight / 2, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Active File Tab
    const tabX = isMobile ? 110 : 145;
    const tabWidth = isMobile ? 210 : 250;
    const tabHeight = headerHeight - 16;

    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(tabX, 16, tabWidth, tabHeight, [12, 12, 0, 0]);
    ctx.fill();

    // Subtle top border highlight on active tab
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tabX + 6, 16);
    ctx.lineTo(tabX + tabWidth - 6, 16);
    ctx.stroke();

    // Tab title: Coffee icon + Developer.java
    ctx.fillStyle = '#E2E8F0';
    ctx.font = isMobile
      ? 'bold 18px "JetBrains Mono", monospace'
      : 'bold 19px "JetBrains Mono", monospace';
    ctx.fillText('☕ Developer.java', tabX + (isMobile ? 18 : 24), headerHeight / 2 + 6);

    // Right-side Status / Runtime indicator
    const statusDotX = isMobile ? w - 120 : w - 200;
    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(statusDotX, headerHeight / 2, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#94A3B8';
    ctx.font = isMobile
      ? 'bold 15px "JetBrains Mono", monospace'
      : '16px "JetBrains Mono", monospace';
    ctx.fillText(isMobile ? 'JDK 21' : 'JDK 21 • RUNNING', statusDotX + 14, headerHeight / 2 + 5);

    // 3. Gutter Background (Line Numbers column)
    const gutterWidth = isMobile ? 76 : isTablet ? 90 : 100;
    const statusHeight = isMobile ? 50 : 54;
    const statusY = h - statusHeight;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.fillRect(0, headerHeight, gutterWidth, h - headerHeight - statusHeight);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gutterWidth, headerHeight);
    ctx.lineTo(gutterWidth, statusY);
    ctx.stroke();

    // 4. Render Code Lines with device-tuned typography
    const startY = isMobile ? 130 : isTablet ? 135 : 138;
    const lineHeight = isMobile ? 54 : isTablet ? 50 : 47;
    const codeStartX = isMobile ? 96 : isTablet ? 114 : 128;
    const codeFontSize = isMobile ? 28 : isTablet ? 25 : 23;

    javaLines.forEach((line, idx) => {
      const lineY = startY + idx * lineHeight;
      const isExecuting = line.stepId === activeStep;

      // Active Line Execution Highlight
      if (isExecuting) {
        ctx.fillStyle = 'rgba(0, 229, 255, 0.10)';
        ctx.fillRect(gutterWidth + 1, lineY - 35, w - gutterWidth - 1, lineHeight);

        // Left indicator bar in gutter
        ctx.fillStyle = '#00E5FF';
        ctx.fillRect(gutterWidth - 5, lineY - 35, 5, lineHeight);

        // Execution arrow
        ctx.fillStyle = '#00F5A0';
        ctx.font = isMobile
          ? 'bold 16px "JetBrains Mono", monospace'
          : 'bold 18px "JetBrains Mono", monospace';
        ctx.fillText('▶', isMobile ? 14 : 20, lineY - 4);
      }

      // Line number
      ctx.fillStyle = isExecuting ? '#00E5FF' : '#475569';
      ctx.font = isMobile
        ? '16px "JetBrains Mono", monospace'
        : '17px "JetBrains Mono", monospace';
      ctx.fillText(line.num, isMobile ? 32 : 42, lineY - 4);

      // Line Tokens
      let tokenX = codeStartX;
      ctx.font = `bold ${codeFontSize}px "JetBrains Mono", monospace`;

      line.tokens.forEach((token) => {
        ctx.fillStyle = token.color;
        ctx.fillText(token.text, tokenX, lineY - 4);
        tokenX += ctx.measureText(token.text).width;
      });

      // Blinking Cursor on active executing line
      if (isExecuting && showCursor) {
        ctx.fillStyle = '#00E5FF';
        const cursorH = isMobile ? 30 : 28;
        ctx.fillRect(tokenX + 6, lineY - cursorH - 2, 4, cursorH);
      }
    });

    // 5. Bottom Status Bar
    ctx.fillStyle = '#17171B';
    ctx.beginPath();
    ctx.roundRect(0, statusY, w, statusHeight, [0, 0, 24, 24]);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, statusY);
    ctx.lineTo(w, statusY);
    ctx.stroke();

    // Status texts
    ctx.fillStyle = '#00F5A0';
    ctx.font = isMobile
      ? 'bold 15px "JetBrains Mono", monospace'
      : 'bold 16px "JetBrains Mono", monospace';

    let statusMsg;
    if (isMobile) {
      statusMsg =
        activeStep === 0
          ? '⚡ brainstorm() -> system design'
          : activeStep === 1
          ? '⚡ build(idea) -> compiling'
          : '✓ app.deploy() -> live 60 FPS';
    } else {
      statusMsg =
        activeStep === 0
          ? '⚡ Executing: brainstorm() -> conceptualizing system architecture'
          : activeStep === 1
          ? '⚡ Executing: build(idea) -> compiling reactive components'
          : '✓ Executing: app.deploy() -> live at 60 FPS';
    }
    ctx.fillText(statusMsg, isMobile ? 18 : 24, statusY + (isMobile ? 31 : 33));

    ctx.fillStyle = '#64748B';
    ctx.font = isMobile
      ? '14px "JetBrains Mono", monospace'
      : '15px "JetBrains Mono", monospace';
    ctx.fillText(
      isMobile ? 'Java 21' : 'UTF-8   LF   Java 21',
      isMobile ? w - 100 : w - 210,
      statusY + (isMobile ? 31 : 33)
    );

    // Clean outer perimeter border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(1, 1, w - 2, h - 2, 24);
    ctx.stroke();

    texture.needsUpdate = true;
  };

  // Initial draw and redraw on device change
  useEffect(() => {
    drawEditor(execIndexRef.current, true);
  }, [isMobile, isTablet, javaLines, canvasWidth, canvasHeight]);

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

    // 2. Calm, gentle levitation float & tilt
    if (!reducedMotion) {
      meshRef.current.position.y = Math.sin(time * 1.2) * (isMobile ? 0.04 : 0.06);

      // On touch devices (mobile/tablet), blend gentle automatic breathing with damped touch
      if (isTouch) {
        const autoTiltY = Math.sin(time * 0.8) * 0.05;
        const autoTiltX = Math.cos(time * 0.6) * 0.025;

        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          autoTiltY + state.pointer.x * 0.05,
          0.05
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          autoTiltX - state.pointer.y * 0.04,
          0.05
        );
      } else {
        // Desktop mouse parallax tilt
        targetRotation.current.x = -state.pointer.y * 0.14;
        targetRotation.current.y = state.pointer.x * 0.18;

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
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Soft ambient point lights around the code card */}
      <pointLight position={[0, 1.5, 1.5]} intensity={1.2} color="#00E5FF" distance={8} />
      <pointLight position={[2, -1.5, 1.2]} intensity={0.8} color="#00F5A0" distance={6} />
      <pointLight position={[0, 0, -1]} intensity={1.5} color="#4F46E5" distance={5} />

      {/* Main 3D Living Code Card with dynamic aspect ratio */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[cardWidth, cardHeight, 0.08]} />
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
