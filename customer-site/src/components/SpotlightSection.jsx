import React from 'react';

const spotlightItems = [
  {
    image: '/images/spotlight-semiconductor.png',
    alt: 'Semiconductor chip close-up',
    text: 'As electronic systems grow more complex, conventional thermal interface materials (TIMs) can disrupt heat transfer between components, potentially causing overheating and failure.',
    link: 'Learn more',
  },
  {
    image: '/images/spotlight-refrigerant.png',
    alt: 'Industrial HVAC units',
    text: 'The industry is transitioning to A2L refrigerants to minimize environmental impact and meet stricter regulations on greenhouse gas emissions.',
    link: 'Learn more',
  },
  {
    image: '/images/spotlight-armor.png',
    alt: 'Ballistic protection armor',
    text: 'Spectra Shield® technology is trusted by hundreds of military, law enforcement, and security organizations across more than 40 countries worldwide.',
    link: 'Learn more',
  },
  {
    image: '/images/spotlight-logistics.png',
    alt: 'Industrial logistics fleet',
    text: 'Jet Applied Brazing Flux (JABF) can speed up manufacturing of EV, Wind Turbine, Solar Panel, and EV Charging Station cooling plates while cutting waste, energy, and labor costs.',
    link: 'Learn more',
  },
];

const LinkIcon = () => (
  <span className="link-icon">
    <svg viewBox="0 0 24 24">
      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function SpotlightSection() {
  return (
    <section className="spotlight-section" id="spotlight-section">
      <h2 className="fade-in">Spotlight Series</h2>
      <div className="spotlight-grid">
        {spotlightItems.map((item, i) => (
          <div className={`spotlight-card fade-in stagger-${i + 1}`} key={i}>
            <div className="spotlight-card-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="spotlight-card-content">
              <p>{item.text}</p>
              <a href="#" className="spotlight-card-link">
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
