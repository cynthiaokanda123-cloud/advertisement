import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 5500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-white dark:bg-[#0B1120] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Social Proof &amp; Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Engineering Leaders Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Direct feedback from CTOs, founders, and product directors who rely on scalable systems.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto relative rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-md transition-all"
        >
          {/* Subtle Quote Watermark / Icon */}
          <div className="absolute top-8 right-8 text-blue-500/15 dark:text-blue-400/10 pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Client Info & Avatar Badge */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Resilient Monogram Avatar */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {current.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {current.role} · <span className="font-semibold text-slate-700 dark:text-slate-300">{current.company}</span>
                  </p>
                  <p className="text-[11px] text-pink-600 dark:text-pink-400 font-medium mt-0.5">
                    Context: {current.projectContext}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <span className="text-xs font-mono text-slate-400 px-2 tabular-nums">
                  {currentIndex + 1} / {total}
                </span>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-blue-600 dark:bg-blue-400'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
