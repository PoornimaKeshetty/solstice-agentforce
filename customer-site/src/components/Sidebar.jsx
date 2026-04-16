import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { label: 'Dashboard', badge: null, icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></> },
    { label: 'Order Status', badge: 3, icon: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></> },
    { label: 'Invoice Management', badge: null, icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></> },
    { label: 'My Products', badge: null, icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></> },
    { label: 'My Subscriptions', badge: null, icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></> },
    { label: 'My Documents', badge: null, icon: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></> },
    { label: 'Return Center', badge: null, icon: <><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></> },
    { label: 'My Cases', badge: 1, icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></> },
    { label: 'Profile', badge: null, icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></> }
  ];

  return (
    <div className="sidebar">
      <div className="sl">MAIN MENU</div>
      {navItems.map((item) => (
        <div 
          key={item.label}
          className={`si ${activeItem === item.label ? 'active' : ''}`}
          onClick={() => setActiveItem(item.label)}
        >
          <svg className="si-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {item.icon}
          </svg>
          {item.label}
          {item.badge && <span className="sb">{item.badge}</span>}
        </div>
      ))}
    </div>
  );
}
