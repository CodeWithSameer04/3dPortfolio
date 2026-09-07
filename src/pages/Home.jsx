import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ChevronDown, Sparkles, Code2, Database, Terminal, Cpu, GraduationCap, Compass } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import WebGLFallback from '../components/WebGLFallback';
import JavaArchitectureSection from '../components/JavaArchitectureSection';
import JavaFirstSkills from '../components/JavaFirstSkills';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';
import { updatePageSEO } from '../utils/seo';

const HeroScene = lazy(() => import('../components/3d/HeroScene'));

export default function Home() {
  useEffect(() => {
    updatePageSEO({
      title: "Sameer Raj — Java Developer • Full Stack Developer • Software Developer",
      description: `Portfolio of ${personalInfo.name}, Java Developer and Full Stack Software Developer building robust backend systems, modern web applications, and interactive digital experiences.`
    });
  }, []);

  // Top flagship projects for the home page showcase (Java, Spring Boot, Full Stack)
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const marqueeTechnologies = [
    'JAVA',
    'SPRING BOOT',
    'REACT',
    'SQL',
    'DATA STRUCTURES',
    'REST APIS',
    'JAVASCRIPT',
    'NEXT.JS',
    'NODE.JS',
    'EXPRESS',
    'PYTHON',
    'FASTAPI',
    'THREE.JS',
    'TAILWIND CSS',
    'MYSQL'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 border-b border-white/5">
        {/* Ambient radial glow backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-accent-cyan/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Developer Identity Status badge (Section 51) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4 glass-panel border border-white/10 text-white w-fit">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>JAVA DEVELOPER • FULL STACK DEVELOPER • SOFTWARE DEVELOPER</span>
            </div>

            {/* Main Headline (Section 52) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Java Developer <br />
              building software that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-accent-cyan">
                works beautifully.
              </span>
            </h1>

            {/* Subtle Hero Technology Signal Ribbon (Section 53: Java First) */}
            <div className="mb-6 inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-[11px] sm:text-xs tracking-wider text-slate-300 w-fit select-none shadow-sm">
              <span className="text-orange-400 font-bold">JAVA</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-300 font-semibold">SPRING BOOT</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-300">REACT</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-300">SQL</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-300">DSA</span>
            </div>

            {/* Supporting paragraph (Section 52) */}
            <p className="text-base sm:text-lg text-muted max-w-xl mb-10 leading-relaxed font-normal">
              Java developer focused on building reliable backend systems, full-stack applications, and modern digital experiences. Bridging robust software engineering with intuitive user interfaces.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
                className="w-full sm:w-auto"
              >
                Let’s Talk
              </Button>
              <Button
                to="/journey"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Explore My Journey
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Scene (Living Java Code) */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px] flex items-center justify-center">
            <Suspense fallback={<WebGLFallback />}>
              <HeroScene />
            </Suspense>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/60 text-xs font-mono tracking-widest pointer-events-none">
          <span className="uppercase text-[10px]">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-accent-cyan" />
        </div>
      </section>

      {/* 2. TECHNOLOGY MARQUEE */}
      <section className="relative py-6 bg-[#181818]/90 border-b border-white/10 overflow-hidden select-none">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 text-sm sm:text-base font-mono font-medium tracking-widest text-white/60">
            {marqueeTechnologies.concat(marqueeTechnologies).map((tech, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className={`hover:text-white transition-colors ${tech === 'JAVA' ? 'text-orange-400 font-bold' : ''}`}>{tech}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED VISUAL BLOCK: "BUILT AROUND JAVA" (Sections 55 & 61) */}
      <JavaArchitectureSection />

      {/* 4. FEATURED PROJECTS ("SELECTED WORK") */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionTitle
            badge="SELECTED WORK"
            title="Flagship"
            highlight="Projects"
            subtitle="Real Java algorithmic repositories, Spring Boot architectures, and full-stack systems verified from GitHub."
            className="mb-0"
          />
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white hover:text-accent-cyan transition-colors self-start md:self-end pb-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Flagship Projects Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* 5. ABOUT PREVIEW (SPLIT-SCREEN) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4 glass-panel border border-white/10 text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Software by logic. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-accent-cyan">
                Experiences by craft.
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative & Card Visual (Section 59) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed font-normal">
              I enjoy understanding how things work beneath the interface — from algorithms and backend architecture to the final interaction a user sees. My work bridges Java software engineering with modern web interfaces.
            </p>

            <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-white/10 mb-8 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Dr. A.P.J. Abdul Kalam Technical University
                  </h4>
                  <p className="text-xs font-mono text-muted">
                    B.Tech Computer Science & Engineering • 2024 — 2028
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Building a deep foundation in object-oriented programming, data structures, algorithms, and system design while creating production-style full-stack applications.
              </p>
            </div>

            <div>
              <Button to="/about" variant="secondary" icon={ArrowRight}>
                More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. JAVA-FIRST SKILLS (Section 54) */}
      <JavaFirstSkills />

      {/* 7. HOMEPAGE JOURNEY PREVIEW */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
        <div className="bg-[#1E1E1E] p-8 sm:p-14 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4 bg-white/5 border border-white/10 text-accent-cyan">
              <Compass className="w-3.5 h-3.5" />
              <span>GROWTH & EVOLUTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Evolution of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent-cyan">Developer.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
              From algorithmic problem solving in Java to enterprise backend services and modern interactive web experiences — follow my technical journey.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <Button to="/journey" variant="primary" size="lg" icon={ArrowRight}>
              Explore My Journey
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FINAL CINEMATIC CTA */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-8 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-orange-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Glass panel container for strong contrast */}
          <div className="bg-[#181818]/85 backdrop-blur-xl p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Have an opportunity? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-accent-cyan">Let’s build something solid.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted mb-10 max-w-lg mx-auto leading-relaxed">
              Have a software role, backend challenge, or full-stack project? I’d love to connect.
            </p>

            {/* Final Prominent CTA */}
            <div className="flex justify-center">
              <Button
                to="/contact"
                variant="primary"
                size="xl"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
