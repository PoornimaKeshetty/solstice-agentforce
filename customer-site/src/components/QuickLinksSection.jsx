import React from 'react';

const quickLinks = [
  'Certificate of Analysis (CoA) Database',
  'Safety Data Sheets (SDS) Search',
  'Online Ordering',
  'Research Chemicals Portal',
  'Channel Partner Locator',
  'Talk to an Engineer',
  'Compliance & Integrity',
];

const ArrowIcon = () => (
  <span className="quick-link-icon">
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function QuickLinksSection() {
  return (
    <section className="quick-links-section" id="quick-links-section">
      <div className="quick-links-card fade-in">
        <h3 className="quick-links-title">Quick Links</h3>
        <div className="quick-links-grid">
          {quickLinks.map((link, i) => (
            <a href="#" className="quick-link-item" key={i}>
              <ArrowIcon />
              {link}
            </a>
          ))}
        </div>
        <hr className="quick-links-divider" />
        <a href="#" className="quick-link-dot">Report a Concern</a>
      </div>
    </section>
  );
}
