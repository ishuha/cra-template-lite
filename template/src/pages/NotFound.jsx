import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="u-flex-center" style={{ minHeight: '100vh', flexDirection: 'column', textAlign: 'center', backgroundColor: 'var(--color-bg-body)' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: 0 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: 400, marginBottom: '2rem' }}>
        Oops! The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={() => navigate('/')}>Go Home</Button>
        <Button variant="outline" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
