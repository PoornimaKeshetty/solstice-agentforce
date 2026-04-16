import React from 'react';
import './RecentOrders.css';

const orders = [
  { id: 'ORD-2024-291', total: '$18,900', desc: 'Solstice Performance Metal', status: 'Shipped', date: 'Apr 12, 2026', badgeClass: 'badge-shipped' },
  { id: 'ORD-2024-290', total: '$22,100', desc: 'Specialty Chemicals', status: 'Processing', date: 'Apr 10, 2026', badgeClass: 'badge-processing' },
  { id: 'ORD-2024-289', total: '$9,750', desc: 'High-Performance Listing', status: 'Delivered', date: 'Apr 08, 2026', badgeClass: 'badge-delivered' },
  { id: 'ORD-2024-288', total: '$34,600', desc: 'Advanced Low-Lean Hybrid', status: 'Delivered', date: 'Apr 05, 2026', badgeClass: 'badge-delivered' },
];

export default function RecentOrders() {
  return (
    <div className="panel">
      <div className="ph2">
        <div className="ph2-title">Recent Orders</div>
        <div className="ph2-link">View All Orders &rarr;</div>
      </div>
      <div className="orders-list">
        {orders.map((o, i) => (
          <div key={i} className="or">
            <div className="ot">
              <span className="oid">{o.id}</span>
              <span className="otot">{o.total}</span>
            </div>
            <div className="ob">
              <span className="odesc">{o.desc}</span>
              <span className={`badge ${o.badgeClass}`}>{o.status}</span>
            </div>
            <div className="odt">{o.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
