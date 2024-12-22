

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      return null;
    }
  });

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Failed to save user to localStorage:', error);
    }
  };

  const logout = async () => {
    try {     
        setUser(null);
        localStorage.removeItem('user');

    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchAuthenticatedUser = async () => {
    try {
      const response = await fetch('https://whatsapp-backend-new.onrender.com/auth/user', {
        credentials: 'include',
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error fetching authenticated user:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  useEffect(() => {
    console.log('Auth state updated:', user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
