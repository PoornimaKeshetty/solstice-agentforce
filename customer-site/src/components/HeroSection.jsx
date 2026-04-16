import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <img
        src="/images/hero-scientist.png"
        alt="Scientist examining advanced materials"
        className="hero-bg"
        loading="eager"
      />
      <div className="hero-overlay" />
      <div className="hero-content fade-in">
        <h1>Advancing Science for Smarter Outcomes</h1>
        <p>
          Backed by deep technical expertise across industries and a commitment to continuous
          improvement, we're a leading specialty materials company that tackles complexity,
          accelerates progress, and ensures dependable quality — every time.
        </p>
        <a href="#" className="hero-cta">
          Get to Know Solstice
        </a>
      </div>
    </section>
  );
}
