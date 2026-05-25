const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 7275;

// middleware
app.use(express.json());
app.use(cors());

// mongodb
connectToMongo();

// api routes
app.use('/api/auth', require('./routes/auth'));

// static files
app.use(express.static(path.join(__dirname, 'build')));

// react routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// server start
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});