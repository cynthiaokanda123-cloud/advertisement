import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Layers, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onExploreWorkClick: () => void;
}

const ROLES = [
  'Software Engineer',
  'Web Designer',
  'Scalable Systems Builder',
  'Tech Explorer',
];

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onExploreWorkClick }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullText = ROLES[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(110);

        if (displayText.length + 1 === currentFullText.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(55);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-18 lg:pb-28"
    >
      {/* Ambient background floating gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden opacity-40 dark:opacity-25"
      >
        <div className="absolute top-12 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/35 to-indigo-600/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-28 right-12 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-purple-600/25 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/25 to-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Availability Status Badge (Green Pulsing Dot) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for projects &amp; Q2/Q3 partnerships</span>
            </div>

            {/* Main Headline with Animated Typing Effect */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-400">
                Hello, I am {PERSONAL_INFO.name}
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Architecting scalable systems as a{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 min-h-[1.25em]">
                  {displayText}
                  <span className="inline-block w-1 h-9 sm:h-11 ml-1 bg-pink-500 animate-pulse align-middle" />
                </span>
              </h1>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Bridging high-throughput backend infrastructure, resilient distributed systems, and intuitive UI/UX. Creator of the WiFi Reach advertising platform and modern web architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary Action: View My Work */}
              <button
                onClick={onExploreWorkClick}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Action: Download CV / Preview */}
              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl shadow-xs hover:shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>6+ Years Production Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-500" />
                <span>Ad-Tech &amp; Distributed Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>Figma to Production React</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo in Blob/Gradient Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer Decorative Gradient Rings */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-pink-500 rotate-6 opacity-85 blur-sm transition-transform hover:rotate-3 duration-500" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-bl from-pink-500 via-purple-500 to-emerald-500 -rotate-3 opacity-60 transition-transform hover:-rotate-1 duration-500" />

              {/* Profile Card Container */}
              <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-slate-900 border-2 border-white/20 shadow-2xl z-10">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Cynthia Okanda – Software Engineer & Web Designer"
                  className="w-full h-full object-cover object-center filter saturate-[1.05]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Scrim at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-bold text-sm sm:text-base flex items-center gap-1.5">
                    <span>Cynthia Okanda</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs text-slate-300">
                    Lead Systems &amp; Web Architect
                  </span>
                </div>
              </div>

              {/* Floating Animated Badge 1: Distributed Systems */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Architecture</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Scalable Systems</p>
                </div>
              </div>

              {/* Floating Animated Badge 2: Ad-Tech Specialist */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 animate-float-reverse">
                <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-950 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Specialty</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Ad-Tech &amp; Portals</p>
                </div>
              </div>

              {/* Floating Animated Badge 3: React & Tailwind */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Stack</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">React 19 &amp; Node</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
