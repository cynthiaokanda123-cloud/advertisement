/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoCarousel } from './components/PromoCarousel';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project } from './types';

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleHireMeClick = () => {
    setPrefilledService('Scalable Web Application & Ad Platform');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWorkClick = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePromoAction = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireSimilarProject = (projectTitle: string) => {
    setPrefilledService(`Architecture similar to: ${projectTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B1120] text-[#0F172A] dark:text-[#F1F5F9] selection:bg-pink-500 selection:text-white transition-colors duration-200">
      
      {/* 1. Top Announcement Banner (Dismissable) */}
      <AnnouncementBanner />

      {/* 2. Sticky Navbar with 3-Zone Contract */}
      <Navbar
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        onHireMeClick={handleHireMeClick}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onExploreWorkClick={handleExploreWorkClick}
        />

        {/* 4. Rotating Promotional Advertisement Carousel */}
        <PromoCarousel onSelectAction={handlePromoAction} />

        {/* 5. About Me Section with Animated Counters */}
        <About />

        {/* 6. Skills Section with Categorized Progress Bars */}
        <Skills />

        {/* 7. Technologies Grid with Hover Tilt & Infinite Marquee */}
        <Technologies />

        {/* 8. Projects / Advertisement Showcase with Filterable Grid & Detail Modal */}
        <Projects onOpenModal={(p) => setSelectedProject(p)} />

        {/* 9. Specialized Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 10. Experience & Education Vertical Timeline */}
        <Experience />

        {/* 11. Testimonials Auto-Rotating Carousel */}
        <Testimonials />

        {/* 12. Validated Contact Section with Real-Time Feedback */}
        <Contact prefilledService={prefilledService} />
      </main>

      {/* 13. Brand Footer with Back-to-Top Button */}
      <Footer />

      {/* Floating Bottom-Right WhatsApp / Chat Widget */}
      <FloatingWhatsApp />

      {/* Interactive Project Deep Dive Zoom Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={handleInquireSimilarProject}
      />

      {/* Full Curriculum Vitae Printable Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onContactClick={handleHireMeClick}
      />

    </div>
  );
}
