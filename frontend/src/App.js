import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.status === 200) {
        alert('Login successful!');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'orange' }}>
      <div style={{ backgroundColor: 'blue', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Welcome to Persistent Systems</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label style={{ color: 'white' }}>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label style={{ color: 'white' }}>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
