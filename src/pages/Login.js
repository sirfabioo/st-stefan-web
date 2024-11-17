import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      navigate('/admin');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Login Error:', err);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Teacher Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          {/* Email Input */}
          <input
            type="email"
            name="email" // Add name attribute for autofill
            id="email" // Add ID for better browser support
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" // Autofill email
            required
            className="login-input"
          />
          {/* Password Input */}
          <input
            type="password"
            name="password" // Add name attribute for autofill
            id="password" // Add ID for better browser support
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" // Autofill password
            required
            className="login-input"
          />
          {/* Error Message */}
          {error && <p className="login-error">{error}</p>}
          {/* Submit Button */}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
