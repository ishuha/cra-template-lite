import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/Auth';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../common';

export default function Header({ onMenuClick }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  function logOut() {
    logout();
    navigate('/login');
  }

  return (
    <header style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={onMenuClick}
          className="lite-btn lite-btn--ghost"
          style={{ padding: '0.5rem', display: 'none' /* Handle via CSS media query ideally, or JS */ }}
        >
          {/* Simple Hamburger Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>Dashboard</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
        <Button variant="outline" onClick={logOut}>
          Log Out
        </Button>
      </div>
    </header>
  );
}
