import React from 'react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <div className="banner">
      <div className="banner-text">
        <span className="banner-highlight">Announcement:</span>
        <span className="banner-copy">
          Solstice Advanced Materials has announced the acquisition of Nexus Advanced Materials to advance research into next-generation composite materials.
        </span>
      </div>
      <button className="banner-button">LEARN MORE</button>
    </div>
  );
}
