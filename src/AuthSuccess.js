import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function AuthSuccess() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/user', {
          credentials: 'include', // Include session cookies
        });
        if (response.ok) {
          const userData = await response.json();
          login(userData); // Set user in context
          navigate('/chat'); // Redirect to chat
        } else {
          console.error('Failed to fetch authenticated user');
          navigate('/login'); // Redirect to login on failure
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchUser();
  }, [login, navigate]);

  return <p>Loading...</p>; // Temporary loading state
}

export default AuthSuccess;
