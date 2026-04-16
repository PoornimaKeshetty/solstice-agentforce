import React from 'react';
import './UpcomingDeliveries.css';

const deliveries = [
  { sku: 'SKU-2024-1', desc: 'Benzyl Hydrocarbon Series', qty: '220', date: 'Apr 22', status: 'Scheduled', badgeClass: 'badge-scheduled' },
  { sku: 'SKU-2024-2', desc: 'Advanced Polymer Mixture', qty: '44 lb', date: 'Apr 25', status: 'In Transit', badgeClass: 'badge-intransit' },
  { sku: 'SKU-2024-3', desc: 'Thermol Foam Series', qty: '120', date: 'May 01', status: 'In Transit', badgeClass: 'badge-intransit' },
  { sku: 'SKU-2024-4', desc: 'Security Alloys', qty: '55', date: 'May 07', status: 'Scheduled', badgeClass: 'badge-scheduled' },
  { sku: 'SKU-2024-5', desc: 'Reactive Compounds B-Series', qty: '88', date: 'May 12', status: 'Pending', badgeClass: 'badge-pending' }
];

export default function UpcomingDeliveries() {
  return (
    <div className="panel">
      <div className="ph2">
        <div className="ph2-title">Upcoming Deliveries</div>
        <div className="ph2-link">View All Deliveries &rarr;</div>
      </div>
      <table className="deliveries-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Est. Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d, i) => (
            <tr key={i}>
              <td className="cp">{d.sku}</td>
              <td>{d.desc}</td>
              <td>{d.qty}</td>
              <td>{d.date}</td>
              <td>
                <span className={`badge ${d.badgeClass}`}>{d.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
