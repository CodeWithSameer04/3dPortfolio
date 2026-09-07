import React, { useState, useEffect, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { updatePageSEO } from '../utils/seo';
import { Star, FolderGit2, Sparkles, Filter } from 'lucide-react';

const CANDIDATE_CATEGORIES = [
  'All',
  'Java',
  'Backend',
  'Full Stack',
  'Frontend',
  'DSA',
  'Mobile',
  'Automation',
];

const matchesCategory = (project, cat) => {
  if (cat === 'All') return true;
  const list = project.categories || [project.category];
  return list.some((c) => c.toLowerCase() === cat.toLowerCase());
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    updatePageSEO({
      title: "Projects — Java, Full Stack & Software Systems",
      description: "Curated showcase of real Java backend services, algorithmic problem solving, full-stack applications, and automation tools built by Sameer Raj."
    });
  }, []);

  // Only display categories that actually contain projects
  const activeCategories = useMemo(() => {
    return CANDIDATE_CATEGORIES.filter((cat) => {
      if (cat === 'All') return true;
      return projects.some((p) => matchesCategory(p, cat));
    });
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => matchesCategory(p, selectedCategory));
  }, [selectedCategory]);

  const isAll = selectedCategory === 'All';
  const featuredList = filteredProjects.filter((p) => p.featured);
  const otherList = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <SectionTitle
          badge="SOFTWARE ENGINEERING & CODEBASE"
          title="Actual"
          highlight="Projects"
          subtitle="Real-world Java backend architectures, algorithmic solutions, full-stack web platforms, and mobile apps verified from GitHub."
        />
      </div>

      {/* Category Filter Pills (Section 57: Only display categories that actually contain projects) */}
      <div className="mb-14 flex flex-wrap items-center gap-2 sm:gap-2.5 pb-4 border-b border-white/10 select-none">
        <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-slate-400">
          <Filter className="w-3.5 h-3.5 text-orange-400" />
          <span>Filter:</span>
        </div>
        {activeCategories.map((cat) => {
          const count = cat === 'All' ? projects.length : projects.filter((p) => matchesCategory(p, cat)).length;
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                isSelected
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm shadow-orange-500/20'
                  : 'bg-white/[0.03] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-orange-500/30 text-orange-200' : 'bg-white/10 text-slate-400'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered Projects Display */}
      {isAll ? (
        <div className="space-y-20">
          {/* Featured Projects Section */}
          <section>
            <div className="flex items-center gap-2.5 mb-8">
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow/20" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Featured Flagship Projects
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-2">
                // Java, Algorithms & Full-Stack Systems
              </span>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {featuredList.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Other Projects Section */}
          <section className="pt-16 border-t border-white/10">
            <div className="flex items-center gap-2.5 mb-8">
              <FolderGit2 className="w-5 h-5 text-accent-cyan" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Systems, Mobile & Utilities
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-2">
                // Android, Automation & Specialized Tools
              </span>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {otherList.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={featuredList.length + index} />
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* Categorized Projects View */
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} matching <strong className="text-orange-400">{selectedCategory}</strong>
            </span>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
