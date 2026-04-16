import React from 'react';
import './TopNav.css';

export default function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav-logo">Solstice</div>
      
      <div className="topnav-links">
        <a href="#" className="topnav-link">Solutions</a>
        <a href="#" className="topnav-link">Resources</a>
        <a href="#" className="topnav-link">News & Events</a>
        <a href="#" className="topnav-link">About Us</a>
        <a href="#" className="topnav-link">Careers</a>
      </div>

      <div className="topnav-actions">
        <button className="topnav-search">
          <svg className="topnav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
        <div className="topnav-avatar">JR</div>
      </div>
    </div>
  );
}
