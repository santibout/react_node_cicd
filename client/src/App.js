import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [username, setUsername] = useState();

  useEffect(() => {
    // getNames();
    console.log('react app started');
  }, []);

  const getNames = async () => {
    const response = await axios.get('/names');
    setUsername(response.data);
  }

  return (
    <div className='app'>
      {/* <h1>username: {username}</h1> */}
      <h1>Hi, I'm Sam</h1>
    </div>
  );
}

export default App;
