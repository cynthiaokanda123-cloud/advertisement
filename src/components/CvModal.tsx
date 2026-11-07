import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle2, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onContactClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#EC4899', '#10B981'],
    });

    // Provide formatted printable version
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-6 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100"
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              CV
            </span>
            <div>
              <h2 id="cv-modal-title" className="text-lg font-bold">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Senior Systems Engineer &amp; Web Architect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="space-y-6 text-sm">
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Executive Summary
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              Accomplished Software Engineer and Web Designer with 6+ years of commercial experience building high-throughput distributed systems, low-latency ad-tech platforms, and responsive consumer web applications. Renowned for creating the WiFi Reach captive portal advertising platform and architecting the Prism Design System.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • Distributed Systems &amp; Concurrency
              </span>
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • Ad-Tech &amp; Captive Portals
              </span>
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • React 19, TypeScript &amp; Next.js
              </span>
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • Node.js &amp; Python Microservices
              </span>
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • Cloud (GCP, Docker, Redis)
              </span>
              <span className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                • Figma UI/UX &amp; Design Systems
              </span>
            </div>
          </div>

          {/* Key Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Employment History
            </h3>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                <span>Lead Systems &amp; Product Engineer — Apex Digital</span>
                <span className="font-mono text-xs text-slate-500">2023 – Present</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Architected the WiFi Reach core routing gateway, scaling across 140+ active commercial transit hubs. Reduced average captive portal response time from 120ms to 65ms.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                <span>Senior Full-Stack Engineer &amp; Designer — Vanguard Systems Lab</span>
                <span className="font-mono text-xs text-slate-500">2021 – 2023</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Built the Prism multi-brand design system utilized across 12 product lines. Engineered algorithmic trading UI handling 5,000+ real-time WebSocket feeds with 0 frame drops.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                <span>Software Engineer — Horizon Tech Solutions</span>
                <span className="font-mono text-xs text-slate-500">2019 – 2021</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Created responsive single-page web portals and automated CI/CD deployment pipelines, reducing release cycles from 3 days to 25 minutes.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Education
            </h3>
            <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
              <span>B.Sc. in Computer Science (First Class Honours) — University of Nairobi</span>
              <span className="font-mono text-xs text-slate-500">2015 – 2019</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Specialized in Distributed Computing, HCI &amp; Network Architecture. Winner of National Inter-University Hackathon (2018).
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            References and full project repositories available on request.
          </span>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 transition-all shadow-sm"
          >
            Hire Cynthia Okanda
          </button>
        </div>

      </div>
    </div>
  );
};
