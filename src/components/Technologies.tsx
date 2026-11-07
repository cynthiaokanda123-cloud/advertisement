import React, { useState } from 'react';
import { TECHNOLOGIES, MARQUEE_LOGOS } from '../data/portfolioData';
import { Sparkles, Terminal, Layers, Cpu, Code2, Globe, Database, Server, Flame, Box, Zap, Radio, Cloud, GitBranch, Network, Palette } from 'lucide-react';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  Atom: <Code2 className="w-6 h-6 text-blue-500" />,
  Code2: <Code2 className="w-6 h-6 text-blue-600" />,
  Globe: <Globe className="w-6 h-6 text-slate-800 dark:text-slate-200" />,
  Paintbrush: <Palette className="w-6 h-6 text-cyan-500" />,
  Server: <Server className="w-6 h-6 text-emerald-500" />,
  Binary: <Terminal className="w-6 h-6 text-amber-500" />,
  Database: <Database className="w-6 h-6 text-blue-500" />,
  Zap: <Zap className="w-6 h-6 text-red-500" />,
  Box: <Box className="w-6 h-6 text-blue-400" />,
  Cloud: <Cloud className="w-6 h-6 text-sky-500" />,
  Flame: <Flame className="w-6 h-6 text-amber-500" />,
  Network: <Network className="w-6 h-6 text-pink-500" />,
  Radio: <Radio className="w-6 h-6 text-emerald-400" />,
  Figma: <Layers className="w-6 h-6 text-purple-500" />,
  GitBranch: <GitBranch className="w-6 h-6 text-orange-500" />,
  Workflow: <Cpu className="w-6 h-6 text-indigo-500" />,
  Layers: <Layers className="w-6 h-6 text-slate-600 dark:text-slate-300" />,
  DatabaseZap: <Database className="w-6 h-6 text-emerald-600" />,
};

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Cloud & Systems', 'Design & Tooling'] as const;

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTech =
    selectedCategory === 'All'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="technologies"
      className="py-16 md:py-24 bg-white dark:bg-[#0B1120] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Modern Production Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technologies &amp; Frameworks
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Battle-hardened frameworks and scalable protocols selected for reliability, speed, and developer experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid with 3D lift, tilt and glow on hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={tech.name}
              className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-pink-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:rotate-1 transition-all duration-300 flex flex-col items-center text-center cursor-default"
            >
              {/* Subtle top indicator glow */}
              <div
                className="absolute top-0 inset-x-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-gradient-to-r from-blue-500 to-pink-500"
              />

              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {ICON_COMPONENTS[tech.icon] || <Code2 className="w-6 h-6 text-blue-500" />}
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-0.5">
                {tech.name}
              </h3>
              
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {tech.level}
              </span>

              <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-tight">
                {tech.highlight}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative py-6 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10">
          {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold text-sm tracking-wide shrink-0 px-3 py-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
