import React, { useEffect, useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, Briefcase, Code, Users, CheckCircle, Shield, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    tech: 0,
    clients: 0,
  });

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out

            setCounts({
              years: Math.round(easeOutProgress * PERSONAL_INFO.experienceYears),
              projects: Math.round(easeOutProgress * PERSONAL_INFO.projectsCount),
              tech: Math.round(easeOutProgress * PERSONAL_INFO.technologiesCount),
              clients: Math.round(easeOutProgress * PERSONAL_INFO.happyClientsCount),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                years: PERSONAL_INFO.experienceYears,
                projects: PERSONAL_INFO.projectsCount,
                tech: PERSONAL_INFO.technologiesCount,
                clients: PERSONAL_INFO.happyClientsCount,
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-[#0B1120] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Engineering Philosophy &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Architecting for High Throughput &amp; Immersive Design
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I specialize at the intersection of robust backend infrastructure, low-latency ad-tech systems, and human-friendly design.
          </p>
        </div>

        {/* Content Split: Bio Story on Left, Value Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p>
              Hi, I’m <strong className="text-slate-950 dark:text-white font-semibold">Cynthia Okanda</strong>. Over the past 6+ years, I have navigated both sides of the engineering spectrum: crafting microsecond-efficient cloud backends and sculpting pixel-exact digital products.
            </p>
            <p>
              My signature work includes the <strong className="text-blue-600 dark:text-blue-400 font-medium">WiFi Reach advertising platform</strong>, a high-throughput captive portal network powering hyper-local video and interactive banner advertising across busy transit hubs and commercial venues.
            </p>
            <p>
              Whether orchestrating distributed Docker/GCP clusters, tuning database indexes, or coding modular design systems in React and Tailwind CSS, I operate on the belief that scalable software must feel instantaneous to the end user and predictable to operators.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Fault-Tolerant by Default</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Graceful degradation and sub-second failovers</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Human-First Design</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">WCAG AA accessible with zero cognitive clutter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#131D33] text-white border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-pink-600/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Full Product Lifecycle</h3>
                    <p className="text-xs text-slate-400">From concept wireframe to 99.98% SLA</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">System Availability Target</span>
                    <span className="font-mono text-emerald-400 font-semibold">99.98% SLA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Average Portal Roundtrip</span>
                    <span className="font-mono text-pink-400 font-semibold">&lt; 65 ms</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Accessibility Standards</span>
                    <span className="font-mono text-blue-400 font-semibold">WCAG AA/AAA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Delivery Velocity</span>
                    <span className="font-mono text-emerald-400 font-semibold">Sprint-based</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                  &ldquo;A scalable architecture is worthless if the interface frustrates the user. My job is to make sure both the engine and the cockpit are flawless.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Count-up Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat 1: Years */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              {counts.years}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Years Production Experience
            </p>
          </div>

          {/* Stat 2: Projects Completed */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center hover:border-pink-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              {counts.projects}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Projects Shipped
            </p>
          </div>

          {/* Stat 3: Technologies */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              {counts.tech}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Technologies Mastered
            </p>
          </div>

          {/* Stat 4: Happy Clients */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              {counts.clients}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Satisfied Clients &amp; Partners
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
