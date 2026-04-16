import React, { useState } from 'react';
import './App.css';

function AnnouncementBar() {
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

function TopNav() {
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

function Sidebar({ activeItem, setActiveItem }) {
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

function PageHeader() {
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

function ActionCards() {
  const cards = [
    { title: 'Order Now', colorClass: 'purple', desc: 'Place an order now — select your items and choose a delivery reference.', linkText: 'Start an order', featured: true, icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></> },
    { title: 'My Orders', colorClass: 'blue', desc: 'Manage order status here. View your full order history anytime.', linkText: 'View all orders', icon: <><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></> },
    { title: 'Delivery Status', colorClass: 'green', desc: 'Track your active shipments in real time, anytime from anywhere.', linkText: 'Track deliveries', icon: <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></> },
    { title: 'Invoices', colorClass: 'amber', desc: 'Open or download a file — access all your invoices quickly.', linkText: 'Open invoices', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></> },
    { title: 'My Documents', colorClass: 'blue', desc: 'View, manage and download your important product documents.', linkText: 'View documents', icon: <><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></> },
    { title: 'Eco Analysis Calculator', colorClass: 'green', desc: 'Model the environmental impact of your material choices.', linkText: 'Open calculator', icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></> }
  ];

  return (
    <div className="cards-grid">
      {cards.map((c, i) => (
        <div key={i} className={`ac ${c.featured ? 'featured' : ''}`}>
          <div className={`ci ci-${c.colorClass}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
          </div>
          <div className="ct">{c.title}</div>
          <div className="cd">{c.desc}</div>
          <div className="cl">
            {c.linkText}
            <svg className="cl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
      ))}
    </div>
  );
}

function UpcomingDeliveries() {
  const deliveries = [
    { sku: 'SKU-2024-1', desc: 'Benzyl Hydrocarbon Series', qty: '220', date: 'Apr 22', status: 'Scheduled', badgeClass: 'badge-scheduled' },
    { sku: 'SKU-2024-2', desc: 'Advanced Polymer Mixture', qty: '44 lb', date: 'Apr 25', status: 'In Transit', badgeClass: 'badge-intransit' },
    { sku: 'SKU-2024-3', desc: 'Thermol Foam Series', qty: '120', date: 'May 01', status: 'In Transit', badgeClass: 'badge-intransit' },
    { sku: 'SKU-2024-4', desc: 'Security Alloys', qty: '55', date: 'May 07', status: 'Scheduled', badgeClass: 'badge-scheduled' },
    { sku: 'SKU-2024-5', desc: 'Reactive Compounds B-Series', qty: '88', date: 'May 12', status: 'Pending', badgeClass: 'badge-pending' }
  ];

  return (
    <div className="panel">
      <div className="ph2">
        <div className="ph2-title">Upcoming Deliveries</div>
        <div className="ph2-link">View All Deliveries &rarr;</div>
      </div>
      <table className="deliveries-table">
        <thead>
          <tr><th>SKU</th><th>Description</th><th>Qty</th><th>Est. Date</th><th>Status</th></tr>
        </thead>
        <tbody>
          {deliveries.map((d, i) => (
            <tr key={i}>
              <td className="cp">{d.sku}</td><td>{d.desc}</td><td>{d.qty}</td><td>{d.date}</td>
              <td><span className={`badge ${d.badgeClass}`}>{d.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecentOrders() {
  const orders = [
    { id: 'ORD-2024-291', total: '$18,900', desc: 'Solstice Performance Metal', status: 'Shipped', date: 'Apr 12, 2026', badgeClass: 'badge-shipped' },
    { id: 'ORD-2024-290', total: '$22,100', desc: 'Specialty Chemicals', status: 'Processing', date: 'Apr 10, 2026', badgeClass: 'badge-processing' },
    { id: 'ORD-2024-289', total: '$9,750', desc: 'High-Performance Listing', status: 'Delivered', date: 'Apr 08, 2026', badgeClass: 'badge-delivered' },
    { id: 'ORD-2024-288', total: '$34,600', desc: 'Advanced Low-Lean Hybrid', status: 'Delivered', date: 'Apr 05, 2026', badgeClass: 'badge-delivered' },
  ];

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
              <span className="oid">{o.id}</span><span className="otot">{o.total}</span>
            </div>
            <div className="ob">
              <span className="odesc">{o.desc}</span><span className={`badge ${o.badgeClass}`}>{o.status}</span>
            </div>
            <div className="odt">{o.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderStatus() {
  const allOrders = [
    { id: 'ORD-2024-291', date: 'Apr 12, 2026', product: 'Solstice Performance Metal', qty: 250, price: '$75.60', total: '$18,900', status: 'Shipped', badgeClass: 'badge-shipped' },
    { id: 'ORD-2024-290', date: 'Apr 10, 2026', product: 'Specialty Chemicals', qty: 400, price: '$55.25', total: '$22,100', status: 'Processing', badgeClass: 'badge-processing' },
    { id: 'ORD-2024-289', date: 'Apr 08, 2026', product: 'High-Performance Listing', qty: 150, price: '$65.00', total: '$9,750', status: 'Delivered', badgeClass: 'badge-delivered' },
    { id: 'ORD-2024-288', date: 'Apr 05, 2026', product: 'Advanced Low-Lean Hybrid', qty: 865, price: '$40.00', total: '$34,600', status: 'Delivered', badgeClass: 'badge-delivered' },
    { id: 'ORD-2024-287', date: 'Apr 01, 2026', product: 'Industrial Polycarbonate', qty: 500, price: '$12.50', total: '$6,250', status: 'Cancelled', badgeClass: 'badge-cancelled' },
    { id: 'ORD-2024-286', date: 'Mar 28, 2026', product: 'Thermal Shielding Foam', qty: 120, price: '$110.00', total: '$13,200', status: 'Shipped', badgeClass: 'badge-shipped' },
    { id: 'ORD-2024-285', date: 'Mar 25, 2026', product: 'Structural Adhesive', qty: 300, price: '$22.00', total: '$6,600', status: 'Processing', badgeClass: 'badge-processing' },
    { id: 'ORD-2024-284', date: 'Mar 21, 2026', product: 'Acoustic Dampening Panels', qty: 45, price: '$350.00', total: '$15,750', status: 'Delivered', badgeClass: 'badge-delivered' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Order Status</h1>
          <p className="page-subtitle">Track and manage all your submitted orders in real time.</p>
        </div>
        <div className="page-header-right">
          <button className="page-cta">
            <svg className="page-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            New Order
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <input type="text" className="filter-input" placeholder="Search orders..." />
        <select className="filter-select">
          <option>All</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
        <select className="filter-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>All time</option>
        </select>
        <button className="filter-apply">Apply Filters</button>
      </div>

      <div className="panel os-panel">
        <table className="deliveries-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Sales Rep</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((o, i) => (
              <tr key={i}>
                <td className="cp">{o.id}</td>
                <td>{o.date}</td>
                <td>{o.product}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
                <td>{o.total}</td>
                <td>
                  <span className="rep-avatar">{['AB', 'JS', 'MD', 'KL'][i % 4]}</span>
                </td>
                <td><span className={`badge ${o.badgeClass}`}>{o.status}</span></td>
                <td><a href="#" className="action-link">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-bar">
        <div className="pagination-info">Showing 1–8 of 42 orders</div>
        <div className="pagination-controls">
          <span className="page-link">Prev</span>
          <span className="page-link active">1</span>
          <span className="page-link">2</span>
          <span className="page-link">3</span>
          <span className="page-dots">…</span>
          <span className="page-link">6</span>
          <span className="page-link">Next</span>
        </div>
      </div>
    </>
  );
}

function InvoiceManagement() {
  const metrics = [
    { label: 'Total Invoiced (YTD)', value: '$248,300', colorClass: 'mc-default' },
    { label: 'Outstanding Balance', value: '$34,600', colorClass: 'mc-amber' },
    { label: 'Paid This Month', value: '$62,100', colorClass: 'mc-green' },
    { label: 'Overdue Invoices', value: '2', colorClass: 'mc-red' },
  ];

  const invoices = [
    { id: 'INV-2026-1042', order: 'ORD-2024-291', issue: 'Apr 12, 2026', due: 'May 12, 2026', amount: '$18,900', status: 'Pending', badgeClass: 'badge-pending' },
    { id: 'INV-2026-1041', order: 'ORD-2024-290', issue: 'Apr 10, 2026', due: 'May 10, 2026', amount: '$22,100', status: 'Pending', badgeClass: 'badge-pending' },
    { id: 'INV-2026-1040', order: 'ORD-2024-289', issue: 'Apr 08, 2026', due: 'May 08, 2026', amount: '$9,750', status: 'Paid', badgeClass: 'badge-delivered' },
    { id: 'INV-2026-1039', order: 'ORD-2024-288', issue: 'Apr 05, 2026', due: 'May 05, 2026', amount: '$34,600', status: 'Paid', badgeClass: 'badge-delivered' },
    { id: 'INV-2026-1038', order: 'ORD-2024-283', issue: 'Mar 15, 2026', due: 'Apr 14, 2026', amount: '$12,400', status: 'Overdue', badgeClass: 'badge-cancelled' },
    { id: 'INV-2026-1037', order: 'ORD-2024-280', issue: 'Mar 02, 2026', due: 'Apr 01, 2026', amount: '$22,200', status: 'Overdue', badgeClass: 'badge-cancelled' },
    { id: 'INV-2026-1036', order: 'ORD-2024-275', issue: 'Feb 20, 2026', due: 'Mar 22, 2026', amount: '$45,000', status: 'Paid', badgeClass: 'badge-delivered' },
    { id: 'INV-2026-1035', order: 'ORD-2024-274', issue: 'Feb 18, 2026', due: 'Mar 20, 2026', amount: '$17,100', status: 'Paid', badgeClass: 'badge-delivered' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Invoice Management</h1>
          <p className="page-subtitle">View and download all invoices associated with your account.</p>
        </div>
        <div className="page-header-right">
          <button className="page-cta btn-outlined">
            <svg className="page-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export All
          </button>
        </div>
      </div>

      <div className="metrics-row">
        {metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="mc-label">{m.label}</div>
            <div className={`mc-value ${m.colorClass}`}>{m.value}</div>
          </div>
        ))}
      </div>

      <div className="panel os-panel">
        <table className="deliveries-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Order Ref</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i}>
                <td className="cp">{inv.id}</td>
                <td>{inv.order}</td>
                <td>{inv.issue}</td>
                <td>{inv.due}</td>
                <td>{inv.amount}</td>
                <td><span className={`badge ${inv.badgeClass}`}>{inv.status}</span></td>
                <td>
                  <button className="dl-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function MyDocuments() {
  const tabs = ['All', 'Safety Data Sheets', 'Product Specs', 'Certificates', 'Contracts', 'Reports'];
  const [activeTab, setActiveTab] = useState('All');

  const docs = [
    { title: 'Benzyl Series SDS Sheet', type: 'PDF', size: '2.4 MB', category: 'Safety Data Sheets', date: 'Apr 10', iconColor: 'red' },
    { title: 'Polymer Mixture Spec Sheet', type: 'PDF', size: '1.1 MB', category: 'Product Specs', date: 'Apr 08', iconColor: 'red' },
    { title: 'ISO 9001 Certificate 2025', type: 'PDF', size: '340 KB', category: 'Certificates', date: 'Mar 25', iconColor: 'red' },
    { title: 'Supply Agreement Q2 2026', type: 'DOCX', size: '890 KB', category: 'Contracts', date: 'Mar 15', iconColor: 'blue' },
    { title: 'Q1 2026 Consumption Report', type: 'XLSX', size: '1.7 MB', category: 'Reports', date: 'Feb 28', iconColor: 'green' },
    { title: 'Advanced Alloys Technical Guide', type: 'PDF', size: '5.2 MB', category: 'Product Specs', date: 'Jan 12', iconColor: 'red' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">My Documents</h1>
          <p className="page-subtitle">Access SDS sheets, product specs, compliance certificates and more.</p>
        </div>
        <div className="page-header-right">
          <button className="page-cta">
            <svg className="page-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload Document
          </button>
        </div>
      </div>

      <div className="category-tabs">
        {tabs.map((t) => (
          <div key={t} className={`cat-tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
            {t}
          </div>
        ))}
      </div>

      <div className="doc-grid">
        {docs.filter(d => activeTab === 'All' || d.category === activeTab).map((doc, i) => (
          <div key={i} className="doc-card">
            <div className="doc-top">
              <div className={`doc-icon doc-icon-${doc.iconColor}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="doc-size">{doc.size}</div>
            </div>
            <div className="doc-mid">
              <div className="doc-title">{doc.title}</div>
              <div className="badge badge-pending doc-cat">{doc.category}</div>
            </div>
            <div className="doc-bot">
              <div className="doc-date">Last updated: {doc.date}</div>
              <div className="doc-actions">
                <button className="dl-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
                <a href="#" className="action-link">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function MyCases() {
  const cases = [
    { id: 'CASE-2391', subject: 'Delivery delay — SKU-2024-2', desc: 'Shipment is delayed at the transit hub and missed the estimated delivery window.', status: 'Open', statusClass: 'badge-intransit', accentClass: 'case-open', date: 'Apr 10, 2026' },
    { id: 'CASE-2388', subject: 'Invoice discrepancy on ORD-2024-288', desc: 'The unit price applied does not match the contracted rate.', status: 'Resolved', statusClass: 'badge-delivered', accentClass: 'case-resolved', date: 'Apr 06, 2026' },
    { id: 'CASE-2374', subject: 'Quality issue — Thermol Foam Series', desc: 'The received foam material feels more rigid than previous batches.', status: 'Escalated', statusClass: 'badge-cancelled', accentClass: 'case-escalated', date: 'Mar 28, 2026' },
    { id: 'CASE-2361', subject: 'Account access for new team member', desc: 'Requesting to open a purchasing account for Sarah from procurement.', status: 'Resolved', statusClass: 'badge-delivered', accentClass: 'case-resolved', date: 'Mar 15, 2026' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">My Cases</h1>
          <p className="page-subtitle">Track open and resolved support requests with your account team.</p>
        </div>
        <div className="page-header-right">
          <button className="page-cta">
            <svg className="page-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="9" x2="12" y2="15"></line>
              <line x1="9" y1="12" x2="15" y2="12"></line>
            </svg>
            Open New Case
          </button>
        </div>
      </div>

      <div className="cases-list">
        {cases.map((c, i) => (
          <div key={i} className={`case-card ${c.accentClass}`}>
            <div className="case-left">
              <div className="case-id">{c.id}</div>
              <div className="case-subject">{c.subject}</div>
              <div className="case-desc">{c.desc}</div>
            </div>
            <div className="case-right">
              <div className="case-status">
                <span className={`badge ${c.statusClass}`}>{c.status}</span>
              </div>
              <div className="case-date">Opened: {c.date}</div>
              <a href="#" className="action-link">View Details &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Profile() {
  const [toggles, setToggles] = useState({
    orders: true,
    delivery: true,
    invoice: false,
    cases: true
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Profile</h1>
          <p className="page-subtitle">Manage your account details, preferences, and security settings.</p>
        </div>
      </div>

      <div className="profile-layout">
        <div className="profile-left">
          <div className="profile-card">
            <div className="pc-top">
              <div className="pc-avatar">JR</div>
              <div className="pc-name">John Reynolds</div>
              <div className="pc-role">Senior Procurement Manager</div>
              <div className="pc-company">Apex Industrial Ltd.</div>
            </div>
            <hr className="pc-divider" />
            <div className="pc-fields">
              <div className="pc-row"><span className="pc-label">Email</span><span className="pc-val">j.reynolds@apex-industrial.com</span></div>
              <div className="pc-row"><span className="pc-label">Phone</span><span className="pc-val">+1 (312) 555-0184</span></div>
              <div className="pc-row"><span className="pc-label">Location</span><span className="pc-val">Chicago, IL, USA</span></div>
              <div className="pc-row"><span className="pc-label">Account No.</span><span className="pc-val">APX-00294</span></div>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="panel prof-panel">
            <div className="ph2"><div className="ph2-title">Notifications</div></div>
            <div className="settings-list">
              <div className="set-row">
                <span className="set-label">Order Updates</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={toggles.orders} onChange={() => handleToggle('orders')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="set-row">
                <span className="set-label">Delivery Alerts</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={toggles.delivery} onChange={() => handleToggle('delivery')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="set-row">
                <span className="set-label">Invoice Reminders</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={toggles.invoice} onChange={() => handleToggle('invoice')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="set-row">
                <span className="set-label">Case Updates</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={toggles.cases} onChange={() => handleToggle('cases')} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="panel prof-panel">
            <div className="ph2"><div className="ph2-title">Security</div></div>
            <div className="settings-list">
              <div className="set-row">
                <span className="set-label">Change Password</span>
                <a href="#" className="action-link">Update &rarr;</a>
              </div>
              <div className="set-row">
                <span className="set-label">Two-Factor Authentication: <span className="txt-enabled">Enabled</span></span>
                <a href="#" className="action-link">Manage &rarr;</a>
              </div>
              <div className="set-row">
                <span className="set-label">Active Sessions: 2</span>
                <a href="#" className="action-link">View All &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="portal">
      <AnnouncementBar />
      <TopNav />
      <div className="layout">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div key={activeItem} className="main">
          {activeItem === 'Dashboard' ? (
            <>
              <PageHeader />
              <ActionCards />
              <div className="data-section">
                <UpcomingDeliveries />
                <RecentOrders />
              </div>
            </>
          ) : activeItem === 'Order Status' ? (
            <OrderStatus />
          ) : activeItem === 'Invoice Management' ? (
            <InvoiceManagement />
          ) : activeItem === 'My Documents' ? (
            <MyDocuments />
          ) : activeItem === 'My Cases' ? (
            <MyCases />
          ) : activeItem === 'Profile' ? (
            <Profile />
          ) : (
            <div className="page-header">
              <div className="page-header-left">
                <h1 className="page-title">{activeItem}</h1>
                <p className="page-subtitle">Coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
