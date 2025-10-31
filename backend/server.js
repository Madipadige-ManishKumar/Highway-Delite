const express = require('express');
const cors = require('cors');
const experiences = require('./data');



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

// // Example POST route
// app.post('/api/data', (req, res) => {
//   console.log(req.body);
//   res.json({ status: 'Received', data: req.body });
// });

app.get("/home",(req,res) =>{
    res.json(experiences);
})

app.get("/place/:id",(req,res)=>{
  const {id} = req.params
  const result = await experience.findOne({ _id: id }); // 1
  if (!result)
    res.json({message:"can't Find the details"});
  res.json(result)
  res.send(id);
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
