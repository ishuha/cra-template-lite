import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../../components/common';

function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Lite Template</h1>
        <p className="u-text-muted" style={{ fontSize: '1.25rem' }}>
          A modern, lightweight React template with premium UI components.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/api-example">
            <Button>View API Example</Button>
          </Link>
          <a href="https://github.com/ishuha/cra-template-lite" target="_blank" rel="noreferrer">
            <Button variant="outline">Documentation</Button>
          </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Card>
          <h3>🎨 Design System</h3>
          <p>Built with HSL CSS variables for easy theming and dark mode support.</p>
        </Card>
        <Card>
          <h3>🧩 Components</h3>
          <p>Includes pre-built Buttons, Inputs, Cards, and Layout components.</p>
        </Card>
        <Card>
          <h3>⚡ Features</h3>
          <p>Ready-to-use API integration examples, Error Boundary, and 404 pages.</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
