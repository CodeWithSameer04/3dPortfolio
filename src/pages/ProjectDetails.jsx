import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Layers, Cpu, Code2, Smartphone, Terminal, FileSignature } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/Button';
import { updatePageSEO } from '../utils/seo';

export default function ProjectDetails() {
  const { slug } = useParams();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  useEffect(() => {
    if (project) {
      updatePageSEO({
        title: `${project.title} — Real Project Case Study`,
        description: project.description || project.longDescription
      });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-muted mb-8 max-w-md">
          The case study you are looking for does not exist or may have been relocated.
        </p>
        <Button to="/projects" variant="primary" icon={ArrowLeft} iconPosition="left">
          Back to Projects
        </Button>
      </div>
    );
  }

  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const hasLiveDemo = Boolean(project.liveDemo || project.liveUrl);
  const liveUrl = project.liveDemo || project.liveUrl;
  const githubUrl = project.github || project.githubUrl;
  const techList = project.technologies || project.stack || [];
  const caseStudy = project.caseStudy || {};

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Back link */}
      <div className="mb-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Editorial Header */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted">
            Year {project.year}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          {project.title}
        </h1>

        <p className="text-lg sm:text-2xl text-muted font-normal leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {/* ONLY show Live Demo if liveDemo exists */}
          {hasLiveDemo && (
            <Button
              href={liveUrl}
              target="_blank"
              variant="primary"
              size="md"
              icon={ExternalLink}
            >
              Live Demo
            </Button>
          )}

          {githubUrl && (
            <Button
              href={githubUrl}
              target="_blank"
              variant="secondary"
              size="md"
              icon={Github}
            >
              GitHub Repository
            </Button>
          )}
        </div>
      </header>

      {/* Hero Visual / Real Screenshot / Tasteful Project Mockup */}
      <div className="relative w-full rounded-3xl bg-[#1E1E1E] border border-white/10 p-4 sm:p-8 mb-20 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

        {project.image ? (
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          /* Project-specific visual representation for repos without screenshot files */
          <div className="p-8 sm:p-14 bg-[#161616] rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                {project.category === 'Mobile' ? (
                  <Smartphone className="w-6 h-6 text-rose-400" />
                ) : project.slug === 'no-cancel-policy' ? (
                  <FileSignature className="w-6 h-6 text-amber-400" />
                ) : (
                  <Terminal className="w-6 h-6 text-accent-cyan" />
                )}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs font-mono text-muted">{project.technologies.join(' • ')}</span>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-mint/10 text-accent-mint border border-accent-mint/20">
                Verified Repository
              </span>
            </div>

            <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
              {project.longDescription}
            </p>
          </div>
        )}
      </div>

      {/* Overview, Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 mb-20 pb-16 border-b border-white/10">
        <div className="md:col-span-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan block mb-2 font-medium">
            01 / CONTEXT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Overview & Architecture
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6 text-base sm:text-lg text-muted leading-relaxed font-normal">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-white mb-2">The Overview</h3>
            <p>{caseStudy.overview || project.longDescription}</p>
          </div>

          {caseStudy.problem && (
            <div className="pt-4 border-t border-white/5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-2">The Problem</h3>
              <p>{caseStudy.problem}</p>
            </div>
          )}

          {caseStudy.solution && (
            <div className="pt-4 border-t border-white/5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent-mint mb-2">The Engineering Solution</h3>
              <p>{caseStudy.solution}</p>
            </div>
          )}
        </div>
      </section>

      {/* Verified Features */}
      {project.features && project.features.length > 0 && (
        <section className="mb-20 pb-16 border-b border-white/10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan block mb-2 font-medium">
              02 / FUNCTIONALITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Verified Project Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div key={i} className="bg-[#1E1E1E] p-5 rounded-xl border border-white/10 flex items-start gap-3.5 hover:border-accent-cyan/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-accent-mint shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/90 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technology Stack */}
      <section className="mb-20 pb-16 border-b border-white/10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan block mb-2 font-medium">
            03 / TECH STACK
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Technologies & Frameworks
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {techList.map((tech) => (
            <span
              key={tech}
              className="text-xs sm:text-sm font-mono px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:border-accent-violet/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {caseStudy.architecture && (
          <div className="p-6 rounded-2xl bg-[#0E0E14] border border-white/10 text-sm font-mono text-muted">
            <span className="text-white font-semibold block mb-1">Architecture Implementation:</span>
            {caseStudy.architecture}
          </div>
        )}
      </section>

      {/* Development Process */}
      {caseStudy.process && caseStudy.process.length > 0 && (
        <section className="mb-20 pb-16 border-b border-white/10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-2 font-medium">
              04 / METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.process.map((step) => (
              <div key={step.phase} className="glass-panel p-6 rounded-2xl border border-white/10">
                <span className="text-xs font-mono text-accent-violet font-bold block mb-2">
                  {step.phase}
                </span>
                <p className="text-sm text-muted leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges & Results */}
      {(caseStudy.challenges || caseStudy.results) && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20 pb-16 border-b border-white/10">
          {caseStudy.challenges && (
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Technical Challenges</h3>
              </div>
              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                {caseStudy.challenges}
              </p>
            </div>
          )}

          {caseStudy.results && (
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2.5 mb-4 text-emerald-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Impact & Results</h3>
              </div>
              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                {caseStudy.results}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Next Project Banner */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent-violet/30 transition-all group">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">
            Up Next
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent-blue transition-colors">
            {nextProject.title}
          </h3>
          <p className="text-xs font-mono text-muted mt-1">
            Year {nextProject.year}
          </p>
        </div>

        <Button to={`/projects/${nextProject.slug}`} variant="primary" size="lg" icon={ArrowRight}>
          View Next Project
        </Button>
      </div>
    </div>
  );
}
