import React from 'react';
import { Button } from './index';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="u-flex-center" style={{ minHeight: '100vh', flexDirection: 'column', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--color-danger)' }}>Something went wrong.</h1>
          <p style={{ maxWidth: 500, margin: '1rem 0' }}>
            We're sorry, but an unexpected error has occurred. Please try refreshing the page.
          </p>
          <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', textAlign: 'left', maxWidth: '100%', overflow: 'auto' }}>
            <code>{this.state.error?.toString()}</code>
          </div>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
