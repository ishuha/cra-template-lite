import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Input, Button } from '../../components/common';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Register logic here
    navigate('/login');
  };

  return (
    <div className="u-flex-center" style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-body)' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="u-text-center u-mb-md">Register</h2>

        <form onSubmit={handleRegister}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }}>
            Register
          </Button>
        </form>

        <p className="u-text-center u-text-muted" style={{ marginTop: '1rem' }}>
          Already have an account? <Link to="/login">Login now</Link>.
        </p>
      </Card>
    </div>
  );
}