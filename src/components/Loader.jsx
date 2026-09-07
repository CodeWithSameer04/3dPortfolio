import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo';

/**
 * Minimal initial loader
 * Displays briefly on initial page load and cleanly unmounts.
 */
export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 150);
          setTimeout(() => onFinished && onFinished(), 500);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#121212] flex flex-col items-center justify-center transition-opacity duration-500 ease-out pointer-events-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading portfolio experience"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Monogram / Logo */}
        <div className="w-14 h-14 rounded-2xl bg-[#16171E] border border-white/20 p-2.5 flex items-center justify-center shadow-lg shadow-black/50 animate-pulse">
          <img
            src="/logo.png"
            alt={personalInfo.name}
            className="w-full h-full object-contain filter drop-shadow(0 2px 8px rgba(0,0,0,0.5))"
          />
        </div>

        {/* Brand Name */}
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="font-mono text-sm tracking-widest text-white uppercase font-bold">
            {personalInfo.name}
          </span>
          <span className="text-xs text-muted tracking-wider">
            Loading portfolio… {progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-mint transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
