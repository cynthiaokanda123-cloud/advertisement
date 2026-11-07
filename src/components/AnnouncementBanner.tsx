import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onDismiss?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  return (
    <aside 
      aria-label="New Project Announcement"
      className="relative z-50 bg-gradient-to-r from-blue-700 via-indigo-600 to-pink-600 text-white px-4 py-2 text-xs md:text-sm font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-semibold text-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-pink-200 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Q2/Q3 Booking Open:</span>
          </span>
          <span className="text-white/95">
            Now accepting new projects. Let&apos;s build something scalable!
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 hover:text-pink-200 transition-colors ml-1 whitespace-nowrap"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement banner"
          className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
