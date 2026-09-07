import React from 'react';
import {
  Server,
  Layout,
  BrainCircuit,
  Sparkles,
  Terminal,
  Database,
  Code2,
  Boxes,
  Cpu,
  Workflow,
  Globe,
  GitBranch,
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'backend',
    name: 'Backend & Software Engineering',
    tagline: 'Enterprise services, robust APIs, and relational persistence',
    icon: Server,
    color: 'orange',
    accentBorder: 'border-orange-500/30 hover:border-orange-500/50',
    accentGlow: 'from-orange-500/10 to-transparent',
    iconBg: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    skills: [
      { name: 'Java', note: 'Core, OOP, Generics, Stream API' },
      { name: 'Spring Boot', note: 'REST APIs, Dependency Injection, Data JPA' },
      { name: 'REST APIs', note: 'API Design, JSON Contracts, HTTP Semantics' },
      { name: 'SQL', note: 'Relational Schemas, Queries, Joins, Indexes' },
      { name: 'PostgreSQL / MySQL', note: 'ACID Transactions, Normalized Schemas' },
      { name: 'Node.js', note: 'Event-driven runtime & asynchronous I/O' },
      { name: 'Express', note: 'Middleware, routing & REST services' },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving & DSA',
    tagline: 'Algorithmic efficiency, time & space complexity, collections',
    icon: BrainCircuit,
    color: 'amber',
    accentBorder: 'border-amber-500/30 hover:border-amber-500/50',
    accentGlow: 'from-amber-500/10 to-transparent',
    iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    skills: [
      { name: 'Data Structures & Algorithms', note: 'Arrays, Trees, Graphs, Hash Maps' },
      { name: 'Java Collections Framework', note: 'PriorityQueue, ArrayDeque, HashMap' },
      { name: 'Algorithmic Paradigms', note: 'Binary Search, Two Pointers, DP, Graphs' },
      { name: 'Competitive Programming', note: 'Striver A2Z DSA, LeetCode Weekly Contests' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    tagline: 'Responsive user interfaces, component state, modern styling',
    icon: Layout,
    color: 'cyan',
    accentBorder: 'border-cyan-500/30 hover:border-cyan-500/50',
    accentGlow: 'from-cyan-500/10 to-transparent',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    skills: [
      { name: 'React', note: 'React 19, Hooks, Context, Component Design' },
      { name: 'JavaScript (ES6+)', note: 'Async/Await, Closures, DOM Architecture' },
      { name: 'HTML5 & Semantic Web', note: 'Accessibility, Semantic Structure' },
      { name: 'CSS3', note: 'Flexbox, Grid, Custom Properties, Animations' },
      { name: 'Tailwind CSS', note: 'Utility-first systems & custom design tokens' },
    ],
  },
  {
    id: 'creative',
    name: 'Creative & Interactive Web',
    tagline: '3D spatial scenes, physics transitions, and micro-motion',
    icon: Sparkles,
    color: 'purple',
    accentBorder: 'border-purple-500/30 hover:border-purple-500/50',
    accentGlow: 'from-purple-500/10 to-transparent',
    iconBg: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    skills: [
      { name: 'Three.js', note: 'Scene graphs, lighting, cameras, shaders' },
      { name: 'React Three Fiber', note: 'Declarative WebGL canvas & R3F hooks' },
      { name: 'GSAP', note: 'Timeline sequencing & scroll-triggered motion' },
    ],
  },
  {
    id: 'tools',
    name: 'Engineering Tools & Systems',
    tagline: 'Version control, developer workflow, and environment utilities',
    icon: Terminal,
    color: 'emerald',
    accentBorder: 'border-emerald-500/30 hover:border-emerald-500/50',
    accentGlow: 'from-emerald-500/10 to-transparent',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    skills: [
      { name: 'Git', note: 'Branch management, rebasing, versioning' },
      { name: 'GitHub', note: 'Repositories, Pull Requests, Actions CI/CD' },
      { name: 'VS Code & IntelliJ', note: 'Debugging, extensions, workspace hygiene' },
      { name: 'Linux', note: 'Shell navigation, package managers, processes' },
    ],
  },
];

export default function JavaFirstSkills() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4 bg-white/5 border border-white/10 text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tools I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-accent-cyan">Build With</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          Grounded in backend software engineering and Java, expanded into modern full-stack web and interactive systems.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`rounded-3xl bg-[#15161C] border ${cat.accentBorder} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle top-corner gradient */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 rounded-full bg-gradient-to-bl ${cat.accentGlow} opacity-30 blur-2xl pointer-events-none`}
              />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${cat.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-normal mb-6 leading-relaxed">
                  {cat.tagline}
                </p>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified in projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
