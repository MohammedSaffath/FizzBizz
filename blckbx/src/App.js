import React, { useState } from 'react';
import FizzBuzz from './fizz.js';
import './App.css'; 
import 'materialize-css/dist/css/materialize.min.css';


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
        <div className="card  blue darken-4">
          <div className="card-content white-text">
          <span className="card-title">Login</span>
          <input
            type="text"
            className="white-text"
            placeholder="Username"
          
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="white-text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  className="waves-effect waves-light btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
