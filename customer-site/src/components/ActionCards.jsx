import React from 'react';
import './ActionCards.css';

const cards = [
  {
    title: 'Order Now',
    colorClass: 'purple',
    desc: 'Place an order now — select your items and choose a delivery reference.',
    linkText: 'Start an order',
    featured: true,
    icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>
  },
  {
    title: 'My Orders',
    colorClass: 'blue',
    desc: 'Manage order status here. View your full order history anytime.',
    linkText: 'View all orders',
    icon: <><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></>
  },
  {
    title: 'Delivery Status',
    colorClass: 'green',
    desc: 'Track your active shipments in real time, anytime from anywhere.',
    linkText: 'Track deliveries',
    icon: <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></>
  },
  {
    title: 'Invoices',
    colorClass: 'amber',
    desc: 'Open or download a file — access all your invoices quickly.',
    linkText: 'Open invoices',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></>
  },
  {
    title: 'My Documents',
    colorClass: 'blue',
    desc: 'View, manage and download your important product documents.',
    linkText: 'View documents',
    icon: <><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></>
  },
  {
    title: 'Eco Analysis Calculator',
    colorClass: 'green',
    desc: 'Model the environmental impact of your material choices.',
    linkText: 'Open calculator',
    icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>
  }
];

export default function ActionCards() {
  return (
    <div className="cards-grid">
      {cards.map((c, i) => (
        <div key={i} className={`ac ${c.featured ? 'featured' : ''}`}>
          <div className={`ci ci-${c.colorClass}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {c.icon}
            </svg>
          </div>
          <div className="ct">{c.title}</div>
          <div className="cd">{c.desc}</div>
          <div className="cl">
            {c.linkText}
            <svg className="cl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
