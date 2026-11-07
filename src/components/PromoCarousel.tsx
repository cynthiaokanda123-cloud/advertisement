import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Megaphone } from 'lucide-react';
import { PROMOTIONAL_SLIDES } from '../data/portfolioData';

interface PromoCarouselProps {
  onSelectAction: (target: string) => void;
}

export const PromoCarousel: React.FC<PromoCarouselProps> = ({ onSelectAction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = PROMOTIONAL_SLIDES.length;

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentSlide = PROMOTIONAL_SLIDES[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl transition-all"
      >
        {/* Subtle Ambient Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${currentSlide.gradient} opacity-20 blur-2xl transition-all duration-700`}
        />

        <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Content Info */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-1">
                <Megaphone className="w-3 h-3 text-pink-400" />
                <span>{currentSlide.badge}</span>
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                {currentSlide.eyebrow}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {currentSlide.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {currentSlide.description}
            </p>
          </div>

          {/* Right Action & Nav Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onSelectAction(currentSlide.ctaAction)}
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 rounded-xl shadow-lg hover:shadow-pink-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={goToPrev}
                aria-label="Previous promotional slide"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/60 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="px-2 text-xs font-mono text-slate-400 tabular-nums">
                {currentIndex + 1} / {totalSlides}
              </div>

              <button
                onClick={goToNext}
                aria-label="Next promotional slide"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/60 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Progress Bar Indicators at bottom */}
        <div className="flex h-1 bg-slate-800">
          {PROMOTIONAL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`flex-1 transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-pink-500'
                  : 'bg-transparent hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
