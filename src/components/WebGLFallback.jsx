import React from 'react';

/**
 * WebGLFallback
 * Renders an elegant animated CSS/SVG geometric visual when WebGL is unavailable
 * or disabled by the client, maintaining visual quality.
 */
export default function WebGLFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-accent-violet/20 blur-3xl animate-pulse-glow" />
      <div className="absolute w-64 h-64 rounded-full bg-accent-blue/15 blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Stylized geometric 3D wireframe SVG */}
      <svg
        className="w-64 h-64 md:w-80 md:h-80 text-accent-violet animate-float-slow"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Abstract geometric visual"
      >
        <polygon
          points="100,20 180,65 180,145 100,190 20,145 20,65"
          stroke="url(#fallbackGrad)"
          strokeWidth="1.5"
          fill="rgba(11, 11, 15, 0.4)"
        />
        <line x1="100" y1="20" x2="100" y2="190" stroke="url(#fallbackGrad)" strokeWidth="1" opacity="0.6" />
        <line x1="180" y1="65" x2="20" y2="145" stroke="url(#fallbackGrad)" strokeWidth="1" opacity="0.6" />
        <line x1="180" y1="145" x2="20" y2="65" stroke="url(#fallbackGrad)" strokeWidth="1" opacity="0.6" />
        <circle cx="100" cy="100" r="28" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(139, 92, 246, 0.1)" />
        <circle cx="100" cy="100" r="4" fill="#FFFFFF" />

        <defs>
          <linearGradient id="fallbackGrad" x1="20" y1="20" x2="180" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
