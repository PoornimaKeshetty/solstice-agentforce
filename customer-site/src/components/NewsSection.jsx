import React from 'react';

const newsItems = [
  {
    image: '/images/event-expo.png',
    alt: 'Solstice trade show booth',
    text: 'Solstice Advanced Materials unveiling low GWP solutions at China Refrigeration Show 2026. Visit us at Booth A2C63, China International Exhibition Center, Beijing!',
    link: 'Learn more',
  },
  {
    image: '/images/event-campus.png',
    alt: 'Corporate campus aerial view',
    text: 'Join the Solstice Advanced Materials team at SPFA 2026 to explore how Solstice supports you through reliable supply, dependable support, and decades of innovation in spray foam technology.',
    link: 'Request a meeting',
  },
  {
    image: '/images/event-thermal.png',
    alt: 'Semi-therm 2026 presentation',
    text: 'Engage with us at Semi-therm 2026, where we will share breakthrough insights into evolving thermal management strategies for AI systems. Effective thermal solutions are more crucial than ever.',
    link: 'Request a meeting',
  },
  {
    image: '/images/event-pharma.png',
    alt: 'Pharmaceutical packaging',
    text: 'Meet us at Pharmapack 2026 to discover Solstice\'s latest pharmaceutical packaging innovations — including ACLAR® Barrier Films and ACLON™ RESIN — delivering the highest moisture barrier.',
    link: 'Book a meeting',
  },
];

const LinkIcon = () => (
  <span className="link-icon">
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function NewsSection() {
  return (
    <section className="news-section" id="news-events-section">
      <h2 className="fade-in">News & Events</h2>
      <div className="news-grid">
        {newsItems.map((item, i) => (
          <div className={`news-card fade-in stagger-${i + 1}`} key={i}>
            <div className="news-card-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="news-card-content">
              <p>{item.text}</p>
              <a href="#" className="news-card-link">
                <LinkIcon />
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
