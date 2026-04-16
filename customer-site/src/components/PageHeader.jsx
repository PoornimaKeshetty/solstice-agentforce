import React from 'react';
import './PageHeader.css';

export default function PageHeader() {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <h1 className="page-title">Solstice Advanced Materials</h1>
        <p className="page-subtitle">
          Welcome back, John. You have 3 pending orders and 1 open case.
          View your materials portfolio and recent activity below.
        </p>
      </div>
      <div className="page-header-right">
        <button className="page-cta">
          <svg className="page-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Buy Profile
        </button>
      </div>
    </div>
  );
}
