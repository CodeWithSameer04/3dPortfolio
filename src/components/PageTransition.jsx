import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * PageTransition wrapper providing refined GSAP entrance animations on route change.
 * Automatically scrolls to top and respects reduced-motion settings.
 */
export default function PageTransition({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (reducedMotion || !containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
      }
    );
  }, [location.pathname, reducedMotion]);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
