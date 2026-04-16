import React, { useState, useEffect } from 'react';
import SolsticeLogo from './SolsticeLogo';

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`main-nav${scrolled ? ' scrolled' : ''}`} id="main-navigation">
      <SolsticeLogo size={34} />

      <div className={`nav-links${mobileOpen ? ' mobile-open' : ''}`}>
        <span className="nav-dropdown-trigger">
          Solutions
          <svg className="nav-dropdown-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l4 4 4-4" />
          </svg>
        </span>
        <a href="#">Resources</a>
        <span className="nav-dropdown-trigger">
          News & Events
          <svg className="nav-dropdown-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l4 4 4-4" />
          </svg>
        </span>
        <span className="nav-dropdown-trigger">
          About Us
          <svg className="nav-dropdown-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l4 4 4-4" />
          </svg>
        </span>
        <a href="#">Careers</a>
        <button className="nav-search-btn">
          Search
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      <div
        className={`mobile-menu-btn${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
