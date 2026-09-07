import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';
import logoImg from '../assets/logo.png';

export default function BrandLogo({
  size = 'md',
  withText = true,
  className = '',
  linkTo = '/',
}) {
  const sizeClasses = {
    sm: 'w-7 h-7 p-1',
    md: 'w-8 h-8 sm:w-9 sm:h-9 p-1.5',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 p-2',
    xl: 'w-14 h-14 sm:w-16 sm:h-16 p-2.5',
  };

  const badgeSize = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`group inline-flex items-center gap-2.5 font-bold tracking-tight text-white ${className}`}>
      {/* Sleek dark glass container for the SR monogram */}
      <div
        className={`${badgeSize} rounded-xl bg-[#16171E] border border-white/15 flex items-center justify-center shadow-md shadow-black/40 group-hover:border-white/30 group-hover:scale-105 transition-all duration-300 shrink-0 overflow-hidden`}
      >
        <img
          src={logoImg}
          alt="Sameer Raj (SR) Logo"
          className="w-full h-full object-contain filter drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
          loading="eager"
        />
      </div>

      {withText && (
        <span className="text-sm sm:text-base tracking-wider font-mono text-white group-hover:text-slate-100 transition-colors">
          {personalInfo.name}
        </span>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} aria-label={`${personalInfo.name} Home`}>
        {content}
      </Link>
    );
  }

  return content;
}
