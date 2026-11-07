import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Cpu, Cloud, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(SKILL_CATEGORIES[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50/70 dark:bg-[#0E1626] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Technical Capabilities &amp; Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Engineering &amp; Design Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Evaluated by commercial delivery track records, production incidents solved, and code maintainability standards.
          </p>
        </div>

        {/* Category Tabs (Segmented Button Controls) */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-blue-500 dark:text-blue-400'}>
                  {ICON_MAP[category.iconName]}
                </span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Overview & Skills Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                {ICON_MAP[activeCategory.iconName]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeCategory.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Production Tested</span>
            </div>
          </div>

          {/* Animated Skills Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {activeCategory.skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{skill.name}</span>
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {skill.proficiency}
                    </span>
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Track */}
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Summary Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>
              All benchmarks verified through actual client projects &amp; stress tests.
            </span>
            <a
              href="#projects"
              className="font-semibold text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1"
            >
              <span>See these skills applied in projects</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
