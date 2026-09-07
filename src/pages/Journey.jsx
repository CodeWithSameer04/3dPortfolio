import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import JourneyItem from '../components/JourneyItem';
import Button from '../components/Button';
import { journeyMilestones, currentlyExploring } from '../data/journey';
import { personalInfo } from '../data/personalInfo';
import { updatePageSEO } from '../utils/seo';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowRight, Compass, Sparkles, GraduationCap, Code2, FolderGit2 } from 'lucide-react';
import gsap from 'gsap';

export default function Journey() {
  const timelineRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    updatePageSEO({
      title: "Journey — The Story So Far",
      description: "Still learning, still building. Explore Sameer Raj's journey through education, projects, internships, and ongoing explorations."
    });

    if (reducedMotion || !timelineRef.current) return;

    // Subtle entrance animation for timeline items
    const ctx = gsap.context(() => {
      gsap.from('.journey-milestone', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* 1. Header Section */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-6 glass-panel border border-white/10 text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>ROADMAP & EVOLUTION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          The Journey <br />
          <span className="text-gradient">So Far.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed">
          Still learning. Still building. Still figuring things out — one project at a time.
        </p>
      </div>

      {/* 2. Education Card Callout (Foundational Base) */}
      <div className="mb-20 bg-[#1E1E1E] p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                  Academic Foundation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-mint/10 text-accent-mint border border-accent-mint/20">
                  {personalInfo.education.period}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {personalInfo.education.degree}
              </h2>
              <p className="text-sm sm:text-base text-muted max-w-xl">
                {personalInfo.education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start md:self-center">
            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80">
              Core CS • Algorithms • Systems
            </div>
          </div>
        </div>
      </div>

      {/* 3. "I Learn By Building" Timeline */}
      <section className="mb-28" ref={timelineRef}>
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan block mb-2 font-medium">
            LEARNING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            I Learn By <span className="text-gradient">Building.</span>
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
            Most of what I’ve learned has come from taking an idea, breaking it apart, and trying to build it myself.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical continuous central line */}
          <div className="absolute left-[19px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-mint to-white/10 -translate-x-1/2" />

          {/* Timeline Milestones */}
          <div className="space-y-4">
            {journeyMilestones.map((milestone, index) => (
              <div key={milestone.id} className="journey-milestone">
                <JourneyItem item={milestone} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "What's Next?" Section */}
      <section className="mb-20 pt-16 border-t border-white/10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4 glass-panel border border-white/10 text-muted">
            <Sparkles className="w-3.5 h-3.5 text-accent-yellow" />
            <span>THE ROAD AHEAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            What’s <span className="text-gradient">Next?</span>
          </h2>

          <p className="text-muted text-sm sm:text-base leading-relaxed font-normal">
            Technologies, architectural concepts, and engineering disciplines I am actively diving into.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyExploring.map((tech) => (
            <div
              key={tech.title}
              className="bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-accent-cyan/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 text-accent-cyan border border-white/5 inline-block mb-3">
                  {tech.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white">
                  {tech.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Want to build something together?
          </h3>
          <p className="text-muted text-sm sm:text-base">
            Always open to exciting ideas, collaborative software projects, and learning opportunities.
          </p>
        </div>
        <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
