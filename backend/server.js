const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());  // Parses JSON bodies

// Example route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

// Example POST route
app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.json({ status: 'Received', data: req.body });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
