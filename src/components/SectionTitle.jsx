import React from 'react';

/**
 * Editorial Section Title component with badge, headline, and narrative subtitle
 */
export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4 glass-panel border border-white/10 text-muted ${isCentered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
