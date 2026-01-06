import React from 'react';
import { NavLink } from 'react-router-dom';
// The styles are largely handled by Layout.css but we can import it here or ensure it's loaded.
// Since Layout imports Layout.css, and SideBar is used in Layout, it should be fine.
// But for standalone usage it might be weird. Let's assume Layout is the entry.

export default function SideBar({ onClose }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Counter', path: '/counter' },
    { name: 'About', path: '/about' },
    { name: 'API Example', path: '/api-example' },
  ];

  return (
    <div className="lite-sidebar">
      <div className="lite-sidebar__logo">
        <span>LiteTemplate</span>
        <button className="lite-btn lite-btn--ghost d-md-none" onClick={onClose} style={{ marginLeft: 'auto', display: 'none' /* Only visible on mobile? Need media query */ }}>
          &times;
        </button>
      </div>
      <nav className="lite-sidebar__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose} // Close sidebar on mobile when clicked
            className={({ isActive }) => `lite-sidebar__link ${isActive ? 'active' : ''}`}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
