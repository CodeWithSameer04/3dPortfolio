import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layout,
  Code2,
  Activity,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import ProjectMockup from './ProjectMockup';

// Bespoke theme configurations for each project following the website's dark aesthetic
const PROJECT_THEMES = {
  'striver-dsa-java': {
    title1: 'Striver A2Z',
    title2: 'DSA Sheet',
    accentText: 'text-orange-400',
    titleGradient: 'from-orange-400 via-amber-300 to-yellow-400',
    ruleGradient: 'from-orange-500/60 via-amber-400/30 to-transparent',
    ambientGradient: 'from-orange-500/15 via-amber-500/10 to-transparent',
    glowGradient: 'from-orange-500/20 to-amber-500/15',
    activeThumbBorder: 'border-orange-400 text-orange-300 bg-orange-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 hover:from-orange-400 hover:to-amber-300 shadow-lg shadow-orange-500/20',
    hoverBorder: 'hover:border-orange-500/30',
    quote: 'Built in Java, mastering data structures & algorithmic rigor.',
    dotColor: 'bg-orange-400',
  },
  'research-paper-finder': {
    title1: 'Research',
    title2: 'Paper Finder',
    accentText: 'text-sky-400',
    titleGradient: 'from-sky-400 via-cyan-300 to-blue-400',
    ruleGradient: 'from-sky-500/60 via-cyan-400/30 to-transparent',
    ambientGradient: 'from-sky-500/15 via-cyan-500/10 to-transparent',
    glowGradient: 'from-sky-500/20 to-cyan-500/15',
    activeThumbBorder: 'border-sky-400 text-sky-300 bg-sky-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 hover:from-sky-300 hover:to-cyan-300 shadow-lg shadow-cyan-500/20',
    hoverBorder: 'hover:border-sky-500/30',
    quote: 'Built for researchers, unravelling academic literature.',
    dotColor: 'bg-sky-400',
  },
  'scholars-iq': {
    title1: "Scholar's",
    title2: 'IQ',
    accentText: 'text-indigo-400',
    titleGradient: 'from-indigo-400 via-purple-300 to-pink-400',
    ruleGradient: 'from-indigo-500/60 via-purple-400/30 to-transparent',
    ambientGradient: 'from-indigo-500/15 via-purple-500/10 to-transparent',
    glowGradient: 'from-indigo-500/20 to-purple-500/15',
    activeThumbBorder: 'border-indigo-400 text-indigo-300 bg-indigo-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-indigo-400 hover:to-pink-400 shadow-lg shadow-purple-500/20',
    hoverBorder: 'hover:border-indigo-500/30',
    quote: 'Built for analysts, turning raw numbers into intelligence.',
    dotColor: 'bg-indigo-400',
  },
  'code-arena': {
    title1: 'Code',
    title2: 'Arena',
    accentText: 'text-emerald-400',
    titleGradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    ruleGradient: 'from-emerald-500/60 via-teal-400/30 to-transparent',
    ambientGradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
    glowGradient: 'from-emerald-500/20 to-teal-500/15',
    activeThumbBorder: 'border-emerald-400 text-emerald-300 bg-emerald-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/30',
    quote: 'Built for competitors, mastering algorithmic challenges.',
    dotColor: 'bg-emerald-400',
  },
  'anime-tracker': {
    title1: 'Anime',
    title2: 'Tracker',
    accentText: 'text-amber-400',
    titleGradient: 'from-amber-400 via-yellow-300 to-orange-400',
    ruleGradient: 'from-amber-500/60 via-yellow-400/30 to-transparent',
    ambientGradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
    glowGradient: 'from-amber-500/20 to-orange-500/15',
    activeThumbBorder: 'border-amber-400 text-amber-300 bg-amber-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/20',
    hoverBorder: 'hover:border-amber-500/30',
    quote: 'Built for otakus, never missing an airing episode.',
    dotColor: 'bg-amber-400',
  },
  'no-cancel-policy': {
    title1: 'No-Cancel',
    title2: 'Policy',
    accentText: 'text-rose-400',
    titleGradient: 'from-rose-400 via-pink-300 to-red-400',
    ruleGradient: 'from-rose-500/60 via-pink-400/30 to-transparent',
    ambientGradient: 'from-rose-500/15 via-pink-500/10 to-transparent',
    glowGradient: 'from-rose-500/20 to-pink-500/15',
    activeThumbBorder: 'border-rose-400 text-rose-300 bg-rose-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 shadow-lg shadow-rose-500/20',
    hoverBorder: 'hover:border-rose-500/30',
    quote: 'Built with humour, enforcing friendship commitments.',
    dotColor: 'bg-rose-400',
  },
  'task-manager': {
    title1: 'Task',
    title2: 'Manager',
    accentText: 'text-blue-400',
    titleGradient: 'from-blue-400 via-indigo-300 to-violet-400',
    ruleGradient: 'from-blue-500/60 via-indigo-400/30 to-transparent',
    ambientGradient: 'from-blue-500/15 via-indigo-500/10 to-transparent',
    glowGradient: 'from-blue-500/20 to-indigo-500/15',
    activeThumbBorder: 'border-blue-400 text-blue-300 bg-blue-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-400 hover:to-indigo-400 shadow-lg shadow-blue-500/20',
    hoverBorder: 'hover:border-blue-500/30',
    quote: 'Built with passion, for better productivity.',
    dotColor: 'bg-blue-400',
  },
  'auto-file-organizer': {
    title1: 'Auto File',
    title2: 'Organizer',
    accentText: 'text-teal-400',
    titleGradient: 'from-teal-400 via-cyan-300 to-emerald-400',
    ruleGradient: 'from-teal-500/60 via-cyan-400/30 to-transparent',
    ambientGradient: 'from-teal-500/15 via-cyan-500/10 to-transparent',
    glowGradient: 'from-teal-500/20 to-cyan-500/15',
    activeThumbBorder: 'border-teal-400 text-teal-300 bg-teal-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/20',
    hoverBorder: 'hover:border-teal-500/30',
    quote: 'Built for efficiency, autonomous desktop hygiene.',
    dotColor: 'bg-teal-400',
  },
};

const VIEW_MODES = [
  { id: 'ui', label: 'App UI', icon: Layout },
  { id: 'code', label: 'Code', icon: Code2 },
  { id: 'telemetry', label: 'Architecture', icon: Layers },
];

export default function ProjectCard({ project, index = 0 }) {
  const [activeViewIndex, setActiveViewIndex] = useState(0);

  const theme = PROJECT_THEMES[project.slug] || {
    title1: project.title.split(' ')[0] || 'Project',
    title2: project.title.split(' ').slice(1).join(' ') || 'Showcase',
    accentText: 'text-accent-cyan',
    titleGradient: 'from-cyan-400 to-emerald-400',
    ruleGradient: 'from-cyan-500/60 via-cyan-400/20 to-transparent',
    ambientGradient: 'from-cyan-500/15 to-transparent',
    glowGradient: 'from-cyan-500/20 to-emerald-500/15',
    activeThumbBorder: 'border-cyan-400 text-cyan-300 bg-cyan-500/15',
    primaryBtnClass: 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/30',
    quote: 'Built with passion and clean architectural craft.',
    dotColor: 'bg-accent-cyan',
  };

  const projectNum = String(index + 1).padStart(2, '0');
  const hasLiveDemo = Boolean(project.liveDemo || project.liveUrl);
  const liveUrl = project.liveDemo || project.liveUrl;
  const githubUrl = project.github || project.githubUrl;
  const techList = project.technologies || project.stack || [];

  const currentView = VIEW_MODES[activeViewIndex];

  const handlePrevView = (e) => {
    e.stopPropagation();
    setActiveViewIndex((prev) => (prev === 0 ? VIEW_MODES.length - 1 : prev - 1));
  };

  const handleNextView = (e) => {
    e.stopPropagation();
    setActiveViewIndex((prev) => (prev === VIEW_MODES.length - 1 ? 0 : prev + 1));
  };

  return (
    <article
      className={`group relative rounded-3xl bg-[#16171E] border border-white/10 ${theme.hoverBorder} transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-black/60`}
    >
      {/* Ambient background glow accent */}
      <div
        className={`absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-bl ${theme.ambientGradient} opacity-20 blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-30`}
      />

      {/* Main card grid container */}
      <div className="p-4 sm:p-6 lg:p-10 flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* =================================================================== */}
        {/* LEFT COLUMN: SOFTWARE MOCKUP + THUMBNAIL SWITCHER (7 Cols)          */}
        {/* =================================================================== */}
        <div className="w-full lg:col-span-7 flex flex-col gap-3">
          {/* Mockup Frame with Ambient Shadow */}
          <div className="relative w-full rounded-2xl bg-[#0F1015] border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/20">
            {/* Glow backing */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${theme.glowGradient} opacity-20 blur-xl pointer-events-none`}
            />

            {/* Mockup Header bar */}
            <div className="relative px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#14151B] border-b border-white/10 flex items-center justify-between text-xs select-none">
              {/* Window controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10.5px] sm:text-[11px] font-mono text-slate-400/80 truncate max-w-[130px] sm:max-w-xs">
                  {project.slug}.exe
                </span>
              </div>

              {/* Active view indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
                <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {currentView.label}
                </span>
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className="relative h-[280px] sm:h-[310px] md:h-[340px] w-full p-2 sm:p-3 overflow-hidden">
              <ProjectMockup project={project} viewMode={currentView.id} />
            </div>
          </div>

          {/* View Mode Thumbnails & Controls Bar */}
          <div className="flex items-center justify-between gap-2 pt-0.5 select-none">
            {/* 3 View Mode Selector Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {VIEW_MODES.map((mode, idx) => {
                const IconComponent = mode.icon;
                const isActive = activeViewIndex === idx;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveViewIndex(idx)}
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all ${
                      isActive
                        ? `${theme.activeThumbBorder} shadow-sm shadow-black/40`
                        : 'bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08]'
                    }`}
                    title={`Switch to ${mode.label}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{mode.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Arrows (< and >) */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevView}
                aria-label="Previous view mode"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextView}
                aria-label="Next view mode"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: PROJECT DETAILS, STACK & ACTIONS (5 Cols)            */}
        {/* =================================================================== */}
        <div className="w-full lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            {/* Top Indicator: Project Index with Colored Rule */}
            <div className="flex items-center gap-3 font-mono text-sm tracking-widest text-slate-400 mb-4">
              <span className={`font-bold text-base ${theme.accentText}`}>
                {projectNum}
              </span>
              <span className={`flex-1 h-px bg-gradient-to-r ${theme.ruleGradient}`} />
              <Link
                to={`/projects/${project.slug}`}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors group/arrow"
                title="View Case Study"
                aria-label={`View full case study for ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/arrow:-translate-y-0.5 group-hover/arrow:translate-x-0.5" />
              </Link>
            </div>

            {/* Two-Tone Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              <Link
                to={`/projects/${project.slug}`}
                className="hover:opacity-95 transition-opacity inline-block"
              >
                <span>{theme.title1} </span>
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.titleGradient}`}
                >
                  {theme.title2}
                </span>
              </Link>
            </h3>

            {/* Project Description */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 font-medium hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons & Quote Footer */}
          <div className="space-y-4 sm:space-y-6">
            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Primary: View Project (Live Demo if exists, else Case Study) */}
              {hasLiveDemo ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${theme.primaryBtnClass}`}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ) : (
                <Link
                  to={`/projects/${project.slug}`}
                  className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${theme.primaryBtnClass}`}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              )}

              {/* Secondary: GitHub button */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Case Study Link (if live demo exists, offer direct case study link) */}
              {hasLiveDemo && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Link>
              )}
            </div>

            {/* Bottom Quote / Tagline Divider */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-sans italic text-slate-400">
              <span className={`font-mono font-bold ${theme.accentText}`}>───</span>
              <span>{theme.quote}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
