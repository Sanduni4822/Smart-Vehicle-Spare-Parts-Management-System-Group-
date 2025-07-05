const express = require('express');
const connectDB = require('./config/db'); //  MUST add this
require('dotenv').config(); // Also required to load .env variables
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
connectDB();

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

