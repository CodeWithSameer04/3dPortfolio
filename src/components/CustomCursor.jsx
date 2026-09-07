import React, { useEffect, useState, useRef } from 'react';
import { useDeviceCapability } from '../hooks/useDeviceCapability';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Subtle dual-ring custom cursor for desktop viewports.
 * Disabled automatically on touch screens or when reduced motion is preferred.
 */
export default function CustomCursor() {
  const { isTouch } = useDeviceCapability();
  const reducedMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleInteractiveOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-element');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleInteractiveOver);

    // Smooth lerp loop for the trailing ring
    let animationFrameId;
    const render = () => {
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleInteractiveOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch, reducedMotion, visible]);

  if (isTouch || reducedMotion) {
    return null;
  }

  return (
    <>
      {/* Central pinpoint dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white pointer-events-none z-[9999] transition-opacity duration-200 ${
          visible ? 'opacity-90' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing subtle soft ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-11 h-11 -ml-[22px] -mt-[22px] border-accent-cyan bg-accent-cyan/10 shadow-[0_0_20px_rgba(0,229,255,0.35)] scale-110 backdrop-blur-[1px]'
            : 'w-7 h-7 -ml-[14px] -mt-[14px] border-white/30 bg-transparent scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
