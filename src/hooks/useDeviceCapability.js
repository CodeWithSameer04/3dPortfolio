import { useState, useEffect } from 'react';

/**
 * Hook to gauge device viewport and capabilities
 * Provides particle count optimization and touch device detection.
 */
export function useDeviceCapability() {
  const [capability, setCapability] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouch: false,
    particleCount: 1000,
    hasWebGL: true,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };

    const updateCapability = () => {
      const width = window.innerWidth;
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;

      let isMobile = width < 768;
      let isTablet = width >= 768 && width < 1024;
      let isDesktop = width >= 1024;

      let particleCount = 1000;
      if (isMobile) {
        particleCount = 100;
      } else if (isTablet) {
        particleCount = 400;
      }

      setCapability({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        particleCount,
        hasWebGL: checkWebGL(),
      });
    };

    updateCapability();
    window.addEventListener('resize', updateCapability);

    return () => window.removeEventListener('resize', updateCapability);
  }, []);

  return capability;
}
