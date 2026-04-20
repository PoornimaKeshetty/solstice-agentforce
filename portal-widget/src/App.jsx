import React, { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import UtilityBar from './components/UtilityBar';
import MainNav from './components/MainNav';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import QuickLinksSection from './components/QuickLinksSection';
import SpotlightSection from './components/SpotlightSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <AnnouncementBar />
      <UtilityBar />
      <MainNav />
      <main>
        <HeroSection />
        <IntroSection />
        <QuickLinksSection />
        <SpotlightSection />
        <NewsSection />
      </main>
      <Footer />
      <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer" className="reference-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        Customer Portal
      </a>
    </>
  );
}

export default App;
