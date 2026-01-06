import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Loader, StatusMessage } from '../components/common';

const ApiExample = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchData = async (simulateError = false) => {
    setLoading(true);
    setError(null);
    setSuccessMsg('');
    setData(null);

    try {
      // Simulate long wait
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (simulateError) {
        throw new Error('This is a simulated error for demonstration.');
      }

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(response.data);
      setSuccessMsg('Data fetched successfully!');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h1>API Integration Example</h1>
      <p className="u-text-muted">Demonstrating loading states, error handling, and success feedback.</p>

      <StatusMessage type="error" message={error} onClose={() => setError(null)} />
      <StatusMessage type="success" message={successMsg} onClose={() => setSuccessMsg('')} />

      <Card className="u-mb-md">
        <h3>Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button onClick={() => fetchData(false)} isLoading={loading}>
            Fetch Data (Success)
          </Button>
          <Button variant="danger" onClick={() => fetchData(true)} isLoading={loading}>
            Fetch Data (Error)
          </Button>
          <Button variant="success" onClick={() => setSuccessMsg('This is a manual success message!')}>
            Trigger Success
          </Button>
        </div>
      </Card>

      {loading && (
        <div className="u-flex-center" style={{ padding: '2rem' }}>
          <Loader size="large" />
          <span style={{ marginLeft: '1rem' }}>Loading content, please wait...</span>
        </div>
      )}

      {data && (
        <Card>
          <h3>Result</h3>
          <pre style={{ background: 'var(--color-bg-sidebar)', padding: '1rem', borderRadius: 'var(--radius-md)', overflowX: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
};

export default ApiExample;
