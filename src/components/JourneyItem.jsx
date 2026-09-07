import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Code2, Sparkles, ArrowRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function JourneyItem({ item, index = 0 }) {
  const isEven = index % 2 === 0;

  const typeConfig = {
    Foundations: {
      icon: GraduationCap,
      color: 'text-accent-cyan',
      badgeBg: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
      glow: 'from-cyan-500/20 to-teal-500/0'
    },
    'Problem Solving': {
      icon: Code2,
      color: 'text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      glow: 'from-orange-500/20 to-amber-500/0'
    },
    'Full Stack & Backend': {
      icon: Code2,
      color: 'text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      glow: 'from-orange-500/20 to-cyan-500/0'
    },
    'Full Stack Systems': {
      icon: Code2,
      color: 'text-accent-cyan',
      badgeBg: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
      glow: 'from-cyan-500/20 to-indigo-500/0'
    },
    'Systems & Mobile': {
      icon: Sparkles,
      color: 'text-accent-yellow',
      badgeBg: 'bg-accent-yellow/10 border-accent-yellow/30 text-accent-yellow',
      glow: 'from-amber-500/20 to-yellow-500/0'
    },
    Education: {
      icon: GraduationCap,
      color: 'text-accent-cyan',
      badgeBg: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
      glow: 'from-cyan-500/20 to-teal-500/0'
    },
    Experience: {
      icon: Briefcase,
      color: 'text-accent-mint',
      badgeBg: 'bg-accent-mint/10 border-accent-mint/30 text-accent-mint',
      glow: 'from-emerald-500/20 to-teal-500/0'
    },
    Project: {
      icon: Code2,
      color: 'text-accent-cyan',
      badgeBg: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
      glow: 'from-cyan-500/20 to-sky-500/0'
    },
    Learning: {
      icon: Sparkles,
      color: 'text-accent-yellow',
      badgeBg: 'bg-accent-yellow/10 border-accent-yellow/30 text-accent-yellow',
      glow: 'from-amber-500/20 to-yellow-500/0'
    }
  };

  const config = typeConfig[item.type] || typeConfig.Project;
  const IconComponent = config.icon;

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group my-8 md:my-12">
      {/* Central timeline node / icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#1E1E1E] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20 group-hover:border-accent-cyan group-hover:scale-110 transition-all duration-300">
        <IconComponent className={`w-4 h-4 ${config.color}`} />
      </div>

      {/* Content Card */}
      <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-[#1E1E1E] p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 group-hover:border-accent-cyan/40 transition-all duration-300 relative overflow-hidden ${
        isEven ? 'md:text-left' : 'md:text-left'
      }`}>
        {/* Subtle corner glow */}
        <div className={`absolute top-0 right-0 w-36 h-36 rounded-full bg-gradient-to-br ${config.glow} blur-2xl pointer-events-none`} />

        {/* Header row: Year & Type Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-white/50 tracking-wider">
            {item.year}
          </span>
          <div className="flex items-center gap-2">
            {item.current && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-accent-mint/10 border border-accent-mint/20 text-accent-mint">
                Current
              </span>
            )}
            <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${config.badgeBg}`}>
              {item.type}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors">
          {item.title}
        </h3>

        {/* Organization / Context */}
        {item.organization && (
          <div className="text-xs font-mono text-white/60 mb-3">
            {item.organization}
          </div>
        )}

        {/* Narrative Description */}
        <p className="text-sm text-muted leading-relaxed font-normal mb-5">
          {item.description}
        </p>

        {/* Specific responsibilities if available */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
            {item.responsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-mint shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links: Case Study / GitHub / Live Demo */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {item.link && (
            <Link
              to={item.link}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-cyan hover:text-accent-mint transition-colors group/link"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          )}

          {item.liveDemo && (
            <a
              href={item.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan hover:underline transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-white transition-colors ml-auto"
              title="GitHub Source"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
