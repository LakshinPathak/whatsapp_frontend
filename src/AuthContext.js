// // import React, { createContext, useState, useEffect } from 'react';

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(() => {
// //     try {
// //       // Retrieve user from localStorage on initial load
// //       const savedUser = localStorage.getItem('user');
// //       return savedUser ? JSON.parse(savedUser) : null;
// //     } catch (error) {
// //       console.error('Failed to parse user from localStorage:', error);
// //       return null;
// //     }
// //   });

// //   const login = (userData) => {
// //     try {
// //       setUser(userData);
// //       localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
// //     } catch (error) {
// //       console.error('Failed to save user to localStorage:', error);
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem('user'); // Remove user from localStorage
// //   };





// // // const fetchAuthenticatedUser = async () => {
// // //   try {
// // //     const response = await fetch('http://localhost:5000/auth/user', {
// // //       credentials: 'include', // Ensure cookies are sent
// // //     });
// // //     if (response.ok) {
// // //       const userData = await response.json();
// // //       setUser(userData);
// // //     } else {
// // //       setUser(null);
// // //     }
// // //   } catch (error) {
// // //     console.error('Error fetching authenticated user:', error);
// // //   }
// // // };




// // const fetchAuthenticatedUser = async () => {
// //   try {
// //     const response = await fetch('http://localhost:5000/auth/user', {
// //       credentials: 'include', // Ensure cookies are sent
// //     });
// //     if (response.ok) {
// //       const userData = await response.json();
// //       setUser(userData);
// //     } else {
// //       setUser(null);
// //     }
// //   } catch (error) {
// //     console.error('Error fetching authenticated user:', error);
// //   }
// // };



// //   // Sync frontend state with backend session on component mount
// //   useEffect(() => {
// //     fetchAuthenticatedUser();
// //   }, []);

// //   // Debugging: Log user state changes
// //   useEffect(() => {
// //     console.log('Auth state updated:', user);
// //   }, [user]);



  

  
// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };




// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     try {
//       // Retrieve user from localStorage on initial load
//       const savedUser = localStorage.getItem('user');
//       return savedUser ? JSON.parse(savedUser) : null;
//     } catch (error) {
//       console.error('Failed to parse user from localStorage:', error);
//       return null;
//     }
//   });

//   const navigate = useNavigate();

//   const login = (userData) => {
//     try {
//       setUser(userData);
//       localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
//       navigate('/chat'); // Navigate to chat area after login
//     } catch (error) {
//       console.error('Failed to save user to localStorage:', error);
//     }
//   };

//   const logout = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/auth/logout', {
//         method: 'GET',
//         credentials: 'include', // Ensure cookies are sent
//       });
//       if (response.ok) {
//         setUser(null);
//         localStorage.removeItem('user'); // Remove user from localStorage
//         navigate('/'); // Navigate to login page
//       } else {
//         console.error('Failed to logout:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   const fetchAuthenticatedUser = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/auth/user', {
//         credentials: 'include', // Ensure cookies are sent
//       });
//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData)); // Cache user locally
//       } else {
//         setUser(null);
//         localStorage.removeItem('user'); // Clear cached user data
//       }
//     } catch (error) {
//       console.error('Error fetching authenticated user:', error);
//       setUser(null);
//     }
//   };

//   // Fetch the authenticated user when the component mounts
//   useEffect(() => {
//     fetchAuthenticatedUser();
//   }, []);

//   // Debugging: Log user state changes
//   useEffect(() => {
//     console.log('Auth state updated:', user);
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



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
      const response = await fetch('http://localhost:5000/auth/user', {
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
