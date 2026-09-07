import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position and page scroll progress percentage
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setScrollProgress(Number((currentScroll / scrollHeight).toFixed(3)));
      } else {
        setScrollProgress(0);
      }

      setIsScrolled(currentScroll > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, isScrolled };
}
