import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { Sparkles, ExternalLink, Github, ArrowRight, Eye, Layers } from 'lucide-react';

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Web', 'Design', 'Systems'];

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50/70 dark:bg-[#0E1626] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Commercial &amp; Experimental Builds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Systems &amp; Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              High-impact digital platforms engineered for scale, monetization, and seamless developer ergonomics.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs self-start md:self-auto">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-pink-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Media Preview Container with zoom effect on hover */}
              <div
                onClick={() => onOpenModal(project)}
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Overlay Floating Tags */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <span className="text-xs font-medium text-slate-300">
                    {project.clientOrContext} · {project.year}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => onOpenModal(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Unboxed Metadata / Tech Stack */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < Math.min(project.techStack.length - 1, 4) && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-blue-600 dark:text-blue-400">+{project.techStack.length - 5}</span>
                  )}
                </div>

                {/* Metrics Pill Strip if exists */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-xs">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{m.value}</span>{' '}
                        <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenModal(project)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo of ${project.title}`}
                        className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository of ${project.title}`}
                        className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
