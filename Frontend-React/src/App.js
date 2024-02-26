import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

axios.get('api/HelloWorld')
  .then(response => {
    console.log(response.data);
    setMessage(response.data);
  })
  .catch(error => console.error('Axios error:', error));

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
