import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Code, Radio, Cpu, Palette, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Radio: <Radio className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white dark:bg-[#0B1120] transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Commercial Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Specialized Engineering &amp; Design Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From single-feature performance bottlenecks to ground-up ad-tech platform builds, I work with startups and established enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = service.badge === 'Specialty' || service.badge === 'Popular';

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-blue-50/50 via-white to-pink-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/90 border-2 border-blue-500/40 dark:border-blue-500/30 shadow-lg shadow-blue-500/5'
                    : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Header with Icon & Optional Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      {SERVICE_ICONS[service.icon]}
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-pink-600 dark:text-pink-400 mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Deliverables Include:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Turnaround, Price, and Inquiry CTA */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Est. Timeline</span>
                    <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                      {service.turnaround}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
