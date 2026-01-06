import React from 'react';
import './components.css';

export const Button = ({ children, variant = 'primary', isLoading, disabled, className = '', ...props }) => {
  return (
    <button
      className={`lite-btn lite-btn--${variant} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <div className="lite-loader" style={{ width: 16, height: 16, borderWidth: 2 }} />}
      {children}
    </button>
  );
};

export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`lite-input-group ${className}`}>
      {label && <label className="lite-label">{label}</label>}
      <input className="lite-input" {...props} />
      {error && <span className="lite-input-error">{error}</span>}
    </div>
  );
};

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`lite-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Loader = ({ size = 'medium', className = '' }) => {
  const styles = size === 'large' ? { width: 48, height: 48, borderWidth: 4 } : {};
  return <div className={`lite-loader ${className}`} style={styles} />;
};

export const StatusMessage = ({ type = 'success', message, onClose }) => {
  if (!message) return null;
  return (
    <div className={`lite-status lite-status--${type}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}>
          &times;
        </button>
      )}
    </div>
  );
};
