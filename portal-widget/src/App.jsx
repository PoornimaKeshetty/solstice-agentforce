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
import Chatbot from './components/Chatbot';

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
      <Chatbot />
    </>
  );
}

export default App;
