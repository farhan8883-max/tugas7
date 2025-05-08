const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Contoh endpoint GET
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Halo dari REST API Node.js!' });
});

app.get('/', (req, res) => {
  res.send('Welcome to my web the User API!');
});

// Contoh endpoint POST
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.status(201).json({ received: data });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.get('/api/hello', (req, res) => {
  console.log('Endpoint /api/hello diakses');
  res.json({ message: 'Halo dari REST API Node.js!' });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// http://localhost:3000/api/hello

