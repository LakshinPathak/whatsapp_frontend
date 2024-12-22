
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(''); // Clear previous errors
    try {
      const response = await fetch('https://whatsapp-backend-new.onrender.com/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        login(data); // Update AuthContext with user data
        alert('Login successful!');
        navigate('/chat'); // Redirect to ChatArea
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    setError(''); // Clear previous errors
    try {
      const response = await fetch('https://whatsapp-backend-new.onrender.com/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Signup successful! You can now log in.');
        setIsLogin(true); // Switch to login view
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const backendUrl = 'https://whatsapp-backend-new.onrender.com'; // Replace with your backend URL
    window.location.href = `${backendUrl}/auth/google`; // Redirect to Google OAuth
  };

  return (
    <div id="container">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>

      {/* Show error messages */}
      {error && <div className="error-message">{error}</div>}

      {/* Show loading spinner */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLogin ? (
            <>
              <button onClick={handleLogin} disabled={loading}>
                Login
              </button>
              <button onClick={handleGoogleLogin} className="google-login" disabled={loading}>
                Login with Google
              </button>
            </>
          ) : (
            <button onClick={handleSignup} disabled={loading}>
              Signup
            </button>
          )}
        </form>
      )}

      {/* Toggle between Login and Signup */}
      <p>
        {isLogin ? (
          <>
            New user?{' '}
            <span className="toggle-link" onClick={() => setIsLogin(false)}>
              Signup here
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span className="toggle-link" onClick={() => setIsLogin(true)}>
              Login here
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;
