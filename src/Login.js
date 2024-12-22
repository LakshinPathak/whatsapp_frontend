// // // import React, { useState, useContext } from 'react';
// // // import { AuthContext } from './AuthContext';
// // // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // // import './Login.css';

// // // function Login() {
// // //   const { login } = useContext(AuthContext);
// // //   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const navigate = useNavigate(); // Initialize useNavigate

// // //   const handleLogin = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/users/login', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ username, password }),
// // //       });
// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         login(data); // Update AuthContext
// // //         alert('Login successful');
// // //         navigate('/chat'); // Redirect to ChatArea
// // //       } else {
// // //         alert(data.message);
// // //       }
// // //     } catch (err) {
// // //       console.error('Login error:', err);
// // //     }
// // //   };

// // //   const handleSignup = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/users/register', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ username, password }),
// // //       });

// // //       console.log("Response status:", response.status);
// // //       const data = await response.json();
// // //       console.log("Response data:", data);

// // //       if (response.ok) {
// // //         alert('Signup successful! Please login.');
// // //         setIsLogin(true);
// // //       } else {
// // //         alert(data.message);
// // //       }
// // //     } catch (err) {
// // //       console.error('Signup error:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div id="container">
// // //       <h1>{isLogin ? 'Login' : 'Signup'}</h1>
// // //       <form onSubmit={(e) => e.preventDefault()}>
// // //         <input
// // //           type="text"
// // //           placeholder="Username"
// // //           value={username}
// // //           onChange={(e) => setUsername(e.target.value)}
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />
// // //         {isLogin ? (
// // //           <button onClick={handleLogin}>Login</button>
// // //         ) : (
// // //           <button onClick={handleSignup}>Signup</button>
// // //         )}
// // //       </form>
// // //       <p>
// // //         {isLogin ? (
// // //           <>
// // //             New user?{' '}
// // //             <span className="toggle-link" onClick={() => setIsLogin(false)}>
// // //               Signup here
// // //             </span>
// // //           </>
// // //         ) : (
// // //           <>
// // //             Already have an account?{' '}
// // //             <span className="toggle-link" onClick={() => setIsLogin(true)}>
// // //               Login here
// // //             </span>
// // //           </>
// // //         )}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // // export default Login;




// // import React, { useState, useContext } from 'react';
// // import { AuthContext } from './AuthContext';
// // import { useNavigate } from 'react-router-dom';
// // import './Login.css';

// // function Login() {
// //   const { login } = useContext(AuthContext);
// //   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleLogin = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/users/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, password }),
// //       });
// //       const data = await response.json();

// //       if (response.ok) {
// //         login(data); // Update AuthContext
// //         alert('Login successful');
// //         navigate('/chat'); // Redirect to ChatArea
// //       } else {
// //         alert(data.message);
// //       }
// //     } catch (err) {
// //       console.error('Login error:', err);
// //     }
// //   };

// //   const handleSignup = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/users/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert('Signup successful! Please login.');
// //         setIsLogin(true);
// //       } else {
// //         alert(data.message);
// //       }
// //     } catch (err) {
// //       console.error('Signup error:', err);
// //     }
// //   };

// //   const handleGoogleLogin = () => {
// //     window.location.href = 'http://localhost:5000/auth/google'; // Redirect to the backend Google OAuth endpoint
// //   };

// //   return (
// //     <div id="container">
// //       <h1>{isLogin ? 'Login' : 'Signup'}</h1>
// //       <form onSubmit={(e) => e.preventDefault()}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         {isLogin ? (
// //           <>
// //             <button onClick={handleLogin}>Login</button>
// //             <button onClick={handleGoogleLogin} className="google-login">
// //               Login with Google
// //             </button>
// //           </>
// //         ) : (
// //           <button onClick={handleSignup}>Signup</button>
// //         )}
// //       </form>
// //       <p>
// //         {isLogin ? (
// //           <>
// //             New user?{' '}
// //             <span className="toggle-link" onClick={() => setIsLogin(false)}>
// //               Signup here
// //             </span>
// //           </>
// //         ) : (
// //           <>
// //             Already have an account?{' '}
// //             <span className="toggle-link" onClick={() => setIsLogin(true)}>
// //               Login here
// //             </span>
// //           </>
// //         )}
// //       </p>
// //     </div>
// //   );
// // }

// // export default Login;



// import React, { useState, useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const { login } = useContext(AuthContext);
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         login(data);
//         alert('Login successful');
//         navigate('/chat');
//       } else {
//         alert(data.message || 'Failed to login. Please try again.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignup = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/users/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         alert('Signup successful! Please login.');
//         setIsLogin(true);
//       } else {
//         alert(data.message || 'Failed to signup. Please try again.');
//       }
//     } catch (err) {
//       console.error('Signup error:', err);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = () => {
//     //process.env.REACT_APP_BACKEND_URL ||
//     const backendUrl =  'http://localhost:5000';
//     window.location.href = `${backendUrl}/auth/google`;
//     // login(data);
//   };


//   return (
//     <div id="container">
//       <h1>{isLogin ? 'Login' : 'Signup'}</h1>
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isLogin ? (
//             <>
//               <button onClick={handleLogin}>Login</button>
//               <button onClick={handleGoogleLogin} className="google-login">
//                 Login with Google
//               </button>
//             </>
//           ) : (
//             <button onClick={handleSignup}>Signup</button>
//           )}
//         </form>
//       )}
//       <p>
//         {isLogin ? (
//           <>
//             New user?{' '}
//             <span className="toggle-link" onClick={() => setIsLogin(false)}>
//               Signup here
//             </span>
//           </>
//         ) : (
//           <>
//             Already have an account?{' '}
//             <span className="toggle-link" onClick={() => setIsLogin(true)}>
//               Login here
//             </span>
//           </>
//         )}
//       </p>
//     </div>
//   );
// }

// export default Login;




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
      const response = await fetch('http://localhost:5000/users/login', {
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
      const response = await fetch('http://localhost:5000/users/register', {
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
    const backendUrl = 'http://localhost:5000'; // Replace with your backend URL
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
