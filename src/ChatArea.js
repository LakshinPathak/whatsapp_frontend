// // import React, { useState, useEffect, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { AuthContext } from './AuthContext';
// // import { io } from 'socket.io-client';
// // import './ChatArea.css';

// // const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

// // function ChatArea() {
// //   const { user, logout } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   // Redirect to login if user is not authenticated
// //   useEffect(() => {
// //     if (!user) {
// //       console.log("hiiiiiiiiiiiiiiii");
// //       navigate('/');
// //     } else {
// //       socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
// //     }
// //   }, [user, navigate]);

// //   useEffect(() => {
// //     if (!user) return;

// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/users');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch users');
// //         }
// //         const data = await response.json();


// //         const usernameToDelete = user.user.username || user.username; // Get the username to delete
// // const updatedData = data.filter(item => item.username !== usernameToDelete);
// // //console.log(updatedData);

// //         //console.log(data);
// //         setUsers(updatedData);
// //       } catch (err) {
// //         setError(err.message);
// //       }
// //     };

// //     fetchUsers();

// //     // Listen for incoming private messages
// //     socket.on('new message', (message) => {
// //       if (message.chatId === getChatId(user?.user?.username, selectedUser)) {
// //         setMessages((prevMessages) => [...prevMessages, message]);
// //       }
// //     });

// //     return () => {
// //       socket.off('new message'); // Cleanup listener
// //     };
// //   }, [selectedUser, user?.user?.username]);

// //   const getChatId = (user1, user2) => {
// //     // Create a unique chatId based on usernames
// //     return [user1, user2].sort().join('_');
// //   };

// //   // const fetchMessages = async (recipient) => {
// //   //   const chatId = getChatId(user?.user?.username, recipient);

// //   //   try {
// //   //     const response = await fetch(http://localhost:5000/messg/messages/${chatId});
// //   //     if (!response.ok) {
// //   //       throw new Error('Failed to fetch messages');
// //   //     }
// //   //     const data = await response.json();
// //   //     setMessages(data);
// //   //   } catch (err) {
// //   //     setError(err.message);
// //   //   }
// //   // };


// //   const fetchMessages = async (recipient) => {
// //     const chatId = getChatId(user?.user?.username || user.username, recipient);
  
// //     try {
// //       const response = await fetch(`http://localhost:5000/messg/messages/${chatId}`);
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch messages');
// //       }
// //       const data = await response.json();
// //       setMessages(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };
  
// //   const handleUserClick = (username) => {
// //     setSelectedUser(username);
// //     fetchMessages(username);
// //   };

// //   const handleSendMessage = () => {
// //     if (newMessage.trim() && selectedUser) {
// //       const chatId = getChatId(user?.user?.username, selectedUser);

// //       const message = {
// //         text: newMessage,
// //         sender: user?.user?.username,
// //         recipient: selectedUser,
// //         chatId,
// //         timestamp: new Date().toISOString(),
// //       };

// //       socket.emit('new message', message);

// //       setMessages((prevMessages) => [...prevMessages, message]);
// //       setNewMessage('');
// //     }
// //   };

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   if (!user) {
// //     return <p>Redirecting to login...</p>;
// //   }

// //   return (
// //     <div className="chat-wrapper">
// //       <div className="sidebar">
// //         <div className="sidebar-header">
// //           <h2>Contacts</h2>
// //         </div>
// //         <ul className="user-list">
// //           {users.map((userItem) => (
// //             <li
// //               key={userItem._id}
// //               className={`user-item ${
// //                 selectedUser === userItem.username ? 'active' : ''
// //               }`}
// //               onClick={() => handleUserClick(userItem.username)}
// //             >
// //               {userItem.username}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="chat-container">
// //         <div className="chat-header">
// //           <div className="current-user">
// //             Logged in as: <strong>{user?.user?.username}</strong>
// //           </div>
// //           <button className="logout-button" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>

// //         {selectedUser ? (
// //           <>
// //             <div className="chat-header">
// //               <h3>Chatting with {selectedUser}</h3>
// //             </div>
// //             <div className="message-list">
// //               {messages.map((msg, index) => (
// //                 <div
// //                   key={index}
// //                   className={`message ${
// //                     msg.sender === user?.user?.username ? 'sent' : 'received'
// //                   }`}
// //                 >
// //                   <p>{msg.text}</p>
// //                   <span className="timestamp">
// //                     {new Date(msg.timestamp).toLocaleTimeString([], {
// //                       hour: '2-digit',
// //                       minute: '2-digit',
// //                     })}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //             <form
// //               className="message-form"
// //               onSubmit={(e) => {
// //                 e.preventDefault();
// //                 handleSendMessage();
// //               }}
// //             >
// //               <input
// //                 type="text"
// //                 placeholder="Type a message..."
// //                 value={newMessage}
// //                 onChange={(e) => setNewMessage(e.target.value)}
// //               />
// //               <button type="submit">Send</button>
// //             </form>
// //           </>
// //         ) : (
// //           <div className="no-chat">
// //             <h3>Select a user to start chatting</h3>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatArea;





// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
// import { io } from 'socket.io-client';
// import './ChatArea.css';

// const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

// function ChatArea() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [error, setError] = useState(null);

//   // Redirect to login if user is not authenticated
//   useEffect(() => {
//     if (!user) {
//       console.log("hiiiiiiiiiiiiiiii");
//       navigate('/');
//     } else {
//       socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     if (!user) return;

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();


//         const usernameToDelete = user.user.username || user.username; // Get the username to delete
// const updatedData = data.filter(item => item.username !== usernameToDelete);
// //console.log(updatedData);

//         //console.log(data);
//         setUsers(updatedData);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchUsers();

//     // Listen for incoming private messages
//     socket.on('new message', (message) => {
//       if (message.chatId === getChatId(user?.user?.username, selectedUser)) {
//         setMessages((prevMessages) => [...prevMessages, message]);
//       }
//     });

//     return () => {
//       socket.off('new message'); // Cleanup listener
//     };
//   }, [selectedUser, user?.user?.username]);

//   const getChatId = (user1, user2) => {
//     // Create a unique chatId based on usernames
//     return [user1, user2].sort().join('_');
//   };

//   const fetchMessages = async (recipient) => {
//     const chatId = getChatId(user?.user?.username, recipient);

//     try {
//       const response = await fetch(`http://localhost:5000/messg/messages/${chatId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch messages');
//       }
//       const data = await response.json();
//       setMessages(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleUserClick = (username) => {
//     setSelectedUser(username);
//     fetchMessages(username);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() && selectedUser) {
//       const chatId = getChatId(user?.user?.username, selectedUser);

//       const message = {
//         text: newMessage,
//         sender: user?.user?.username,
//         recipient: selectedUser,
//         chatId,
//         timestamp: new Date().toISOString(),
//       };

//       socket.emit('new message', message);

//       setMessages((prevMessages) => [...prevMessages, message]);
//       setNewMessage('');
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   if (!user) {
//     return <p>Redirecting to login...</p>;
//   }

//   return (
//     <div className="chat-wrapper">
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <h2>Contacts</h2>
//         </div>
//         <ul className="user-list">
//           {users.map((userItem) => (
//             <li
//               key={userItem._id}
//               className={`user-item ${
//                 selectedUser === userItem.username ? 'active' : ''
//               }`}
//               onClick={() => handleUserClick(userItem.username)}
//             >
//               {userItem.username}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="chat-container">
//         <div className="chat-header">
//           <div className="current-user">
//             Logged in as: <strong>{user?.user?.username}</strong>
//           </div>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>

//         {selectedUser ? (
//           <>
//             <div className="chat-header">
//               <h3>Chatting with {selectedUser}</h3>
//             </div>
//             <div className="message-list">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`message ${
//                     msg.sender === user?.user?.username ? 'sent' : 'received'
//                   }`}
//                 >
//                   <p>{msg.text}</p>
//                   <span className="timestamp">
//                     {new Date(msg.timestamp).toLocaleTimeString([], {
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <form
//               className="message-form"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSendMessage();
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//               />
//               <button type="submit">Send</button>
//             </form>
//           </>
//         ) : (
//           <div className="no-chat">
//             <h3>Select a user to start chatting</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChatArea;




import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { io } from 'socket.io-client';
import './ChatArea.css';

const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

function ChatArea() {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    } else if (user) {
      socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();

        // Remove the logged-in user from the user list
        const updatedData = data.filter(
          (item) => item.username !== (user?.user?.username || user.username)
        );
        setUsers(updatedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();

    // Listen for incoming private messages
    socket.on('new message', (message) => {
      if (message.chatId === getChatId(user?.user?.username, selectedUser)) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off('new message'); // Cleanup listener
    };
  }, [selectedUser, user]);

  const getChatId = (user1, user2) => {
    // Create a unique chatId based on usernames
    return [user1, user2].sort().join('_');
  };

  const fetchMessages = async (recipient) => {
    const chatId = getChatId(user?.user?.username, recipient);

    try {
      const response = await fetch(`http://localhost:5000/messg/messages/${chatId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUserClick = (username) => {
    setSelectedUser(username);
    fetchMessages(username);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const chatId = getChatId(user?.user?.username, selectedUser);

      const message = {
        text: newMessage,
        sender: user?.user?.username,
        recipient: selectedUser,
        chatId,
        timestamp: new Date().toISOString(),
      };

      socket.emit('new message', message);

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading spinner or message
  }

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="chat-wrapper">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Contacts</h2>
        </div>
        <ul className="user-list">
          {users.map((userItem) => (
            <li
              key={userItem._id}
              className={`user-item ${
                selectedUser === userItem.username ? 'active' : ''
              }`}
              onClick={() => handleUserClick(userItem.username)}
            >
              {userItem.username}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-container">
        <div className="chat-header">
          <div className="current-user">
            Logged in as: <strong>{user?.user?.username}</strong>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {selectedUser ? (
          <>
            <div className="chat-header">
              <h3>Chatting with {selectedUser}</h3>
            </div>
            <div className="message-list">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === user?.user?.username ? 'sent' : 'received'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="timestamp">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              ))}
            </div>
            <form
              className="message-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="no-chat">
            <h3>Select a user to start chatting</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatArea;
