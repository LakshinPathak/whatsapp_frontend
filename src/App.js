// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import ChatArea from './ChatArea';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/chat" element={<ChatArea />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ChatArea from './ChatArea';
import { AuthProvider } from './AuthContext';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<Login />} />
      {/* Protected route */}
      <Route path="/chat" element={<ChatArea />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
