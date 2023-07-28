import React, { useState } from 'react';
import FizzBuzz from './fizz.js';
import './App.css'; 

const App = () => {
  // Using states for authentication 
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // credentials
    if (username === 'saffath' && password === '12345') {
      setAuthenticated(true);
    }
  };
  const loginStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  };

  return (
    <div className="App" style={loginStyle} >
      {authenticated ? (
        <FizzBuzz />
      ) : (
        <div className="login-form">
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
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
