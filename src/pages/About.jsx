import React, { useEffect } from 'react';
import { ArrowRight, Compass, ShieldCheck, Zap, Eye, BookOpen, Layers, GraduationCap, Sparkles, Server, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import JavaArchitectureSection from '../components/JavaArchitectureSection';
import JavaFirstSkills from '../components/JavaFirstSkills';
import { personalInfo, coreValues } from '../data/personalInfo';
import { updatePageSEO } from '../utils/seo';

export default function About() {
  useEffect(() => {
    updatePageSEO({
      title: `About — ${personalInfo.name} | Java Developer & Software Engineer`,
      description: `Learn more about ${personalInfo.name}, engineering philosophy, student background in Computer Science, and balanced approach to Java backend systems and modern web applications.`
    });
  }, []);

  const valueIcons = {
    'Clean Architecture': Layers,
    'User Experience': Compass,
    'Performance': Zap,
    'Accessibility': ShieldCheck,
    'Visual Design': Eye,
    'Continuous Learning': BookOpen,
  };

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-6 glass-panel border border-white/10 text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span>JAVA DEVELOPER • FULL STACK • SOFTWARE ENGINEER</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Software Logic. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-accent-cyan">
            Modern Systems.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
          “I enjoy understanding how things work beneath the interface — from algorithms and backend architecture to the final interaction a user sees.”
        </p>

        {/* Quick Identity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#16171E] rounded-2xl border border-white/10 text-xs sm:text-sm font-mono">
          <div>
            <span className="text-[10px] sm:text-xs text-white/40 block uppercase">Name</span>
            <span className="text-white font-semibold truncate block">{personalInfo.name}</span>
          </div>
          <div>
            <span className="text-[10px] sm:text-xs text-white/40 block uppercase">Role</span>
            <span className="text-orange-400 font-semibold truncate block">Java Developer</span>
          </div>
          <div>
            <span className="text-[10px] sm:text-xs text-white/40 block uppercase">Education</span>
            <span className="text-white font-semibold truncate block">B.Tech CSE (AKTU)</span>
          </div>
          <div>
            <span className="text-[10px] sm:text-xs text-white/40 block uppercase">Focus</span>
            <span className="text-accent-mint font-semibold truncate block">Backend & Full Stack</span>
          </div>
        </div>
      </div>

      {/* 2. WHO I AM (PHILOSOPHY & POSITIONING — Section 59) */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              badge="ENGINEERING IDENTITY"
              title="Philosophy &"
              highlight="Approach"
              subtitle="The intersection of Software Engineering, Java, Full Stack Development, and Problem Solving."
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted leading-relaxed font-normal">
            <p>
              I am an undergraduate student studying Computer Science and Engineering at Dr. A.P.J. Abdul Kalam Technical University (AKTU, 2024–2028). My developer path is defined by a deep curiosity for understanding software from first principles.
            </p>
            <p>
              I spend significant time in <strong className="text-white">Java</strong> and <strong className="text-white">Data Structures & Algorithms</strong>, solving complex computational problems across trees, graphs, and dynamic programming through the Striver A2Z curriculum and competitive programming on LeetCode.
            </p>
            <p>
              Rather than viewing backend and frontend as disconnected domains, I use software engineering concepts to bridge them: designing Spring Boot and Node.js REST services with clean validation and database persistence, while building responsive, accessible user interfaces with React, Next.js, and Three.js.
            </p>
            <p>
              I don’t make exaggerated claims of senior expertise. I am an early-career developer committed to continuous learning, disciplined problem-solving, clean code, and building software that performs reliably in production.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to="/journey" variant="primary" icon={ArrowRight}>
                View My Learning Journey
              </Button>
              <Button to="/projects" variant="secondary" icon={ArrowRight}>
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUILT AROUND JAVA ARCHITECTURE SECTION (Section 55 & 61) */}
      <JavaArchitectureSection />

      {/* 4. TECHNICAL COMPETENCIES (Section 54) */}
      <JavaFirstSkills />

      {/* 5. WHAT I CARE ABOUT (CORE PRINCIPLES) */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <SectionTitle
          badge="CORE PRINCIPLES"
          title="What I"
          highlight="Care About"
          subtitle="Six foundational priorities that guide every software application and system I architect."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value) => {
            const Icon = valueIcons[value.title] || Sparkles;

            return (
              <div
                key={value.title}
                className="bg-[#16171E] p-8 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:text-accent-cyan group-hover:bg-white/10 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white">
                    {value.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#16171E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Interested in building something together?
          </h3>
          <p className="text-muted text-sm sm:text-base">
            I’m always open to discussing software engineering roles, backend challenges, and collaborative full-stack projects.
          </p>
        </div>
        <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
