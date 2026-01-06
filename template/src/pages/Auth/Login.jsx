import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Auth';
import { Card, Input, Button, StatusMessage } from '../../components/common';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      if (email === 'email@email.com' && password === 'password') {
        login('data');
        navigate('/');
      } else {
        setError('Try email@email.com and password');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="u-flex-center" style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-body)' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="u-text-center u-mb-md">Login</h2>

        <StatusMessage type="error" message={error} onClose={() => setError('')} />

        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@email.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }} isLoading={loading}>
            Login
          </Button>
        </form>

        <p className="u-text-center u-text-muted" style={{ marginTop: '1rem' }}>
          Don't have an account? <Link to="/register">Register now</Link>.
        </p>
      </Card>
    </div>
  );
}