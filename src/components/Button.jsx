import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component
 * Supports Link, Anchor, or standard button triggers.
 * Variants: 'primary', 'secondary', 'outline', 'ghost'
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel,
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer select-none motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:scale-100';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
    xl: 'text-base sm:text-lg px-9 py-4 gap-3',
  };

  const variantStyles = {
    // Primary CTA: Refined, deep slate-indigo tone, less bright, understated and calm
    primary:
      'bg-gradient-to-r from-[#1E2640] via-[#242C48] to-[#28274A] hover:from-[#253050] hover:via-[#2C3658] hover:to-[#32315C] text-slate-100 font-medium border border-indigo-400/25 hover:border-indigo-300/40 shadow-sm shadow-black/30 hover:-translate-y-0.5 active:scale-[0.98]',
    // Secondary CTA: Subtle dark glass surface with soft border
    secondary:
      'bg-[#18181A]/90 hover:bg-white/[0.08] backdrop-blur-md text-slate-200 font-medium border border-white/10 hover:border-white/25 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm shadow-black/20',
    outline:
      'border border-white/15 text-slate-200 hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5 active:scale-[0.98]',
    ghost:
      'text-muted hover:text-white hover:bg-white/5 active:scale-[0.98]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transform-none shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none shrink-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    const defaultRel = target === '_blank' ? 'noopener noreferrer' : rel;
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={defaultRel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
