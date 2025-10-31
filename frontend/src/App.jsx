import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');

  // GET request
  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  // POST request
  const sendData = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/data', { text: input });
      console.log(res.data);
      alert('Data sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Backend says:</h2>
      <p>{message}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={sendData}>Send to Backend</button>
    </div>
  );
}

export default App;
