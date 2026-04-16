import React from 'react';

export default function IntroSection() {
  return (
    <section className="intro-section" id="intro-section">
      <div className="intro-video fade-in-left">
        <img
          src="/images/brand-visual.png"
          alt="Solstice brand video thumbnail"
          loading="lazy"
        />
        <div className="play-button" aria-label="Play company video">
          <svg viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21" fill="white" />
          </svg>
        </div>
      </div>
      <div className="intro-text fade-in-right">
        <h2>Introducing: Solstice Advanced Materials</h2>
        <p>
          Driven by the brightest minds in advanced materials, Solstice partners with customers
          across the globe to develop highly specialized scientific solutions that create
          measurable, real-world impact.
        </p>
        <p>
          Our refrigerants preserve food freshness, while our ballistic protection fibers help
          safeguard lives. We manufacture semiconductor materials that keep the world connected,
          and our healthcare packaging solutions ensure medications remain effective for patients.
        </p>
        <p>
          Discover how we're turning the essential into the exceptional.
        </p>
        <a href="#" className="cta-btn">
          View Company Overview
        </a>
      </div>
    </section>
  );
}
