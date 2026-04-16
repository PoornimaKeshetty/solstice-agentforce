import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38" cy="50" r="36" fill="white" />
                <circle cx="28" cy="42" r="12" fill="currentColor" style={{ color: 'var(--color-primary)' }} />
                <circle cx="50" cy="58" r="16" fill="currentColor" style={{ color: 'var(--color-primary)' }} />
              </svg>
              Solstice
            </div>
            <h4>Contact Us</h4>
            <p>
              We're here if you need us. Complete the form to connect with our team on any inquiry,
              including outreach to our sales or customer experience teams, tips on and troubleshooting
              with your portal or ecommerce profile, and to sign up for marketing communications.
            </p>
            <a href="#" className="footer-contact-btn">Contact Us</a>
            <div className="footer-address">
              Solstice Advanced Materials Inc.<br />
              115 Tabor Rd.<br />
              Morris Plains, NJ 07950
            </div>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-menu">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Solutions by Application</a></li>
              <li><a href="#">Solutions by Product</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          
          <div className="footer-quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">CoA Database</a></li>
              <li><a href="#">Safety Data Sheets Search</a></li>
              <li><a href="#">Online Ordering</a></li>
              <li><a href="#">Research Chemicals Portal</a></li>
              <li><a href="#">Talk to an Engineer</a></li>
              <li><a href="#">Compliance</a></li>
              <li><a href="#">Product Search</a></li>
              <li><a href="#">Apply for Jobs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            Copyright © 2026 Solstice Advanced Materials Inc.
          </div>
          <div className="footer-legal">
            <a href="#">Compliance & Integrity</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Your Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
