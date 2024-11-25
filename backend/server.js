const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');
const realtimeRoutes = require('./routes/realTimeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: '10mb' })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: '10mb', extended: true })); // Increase URL-encoded payload limit

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/realtime', realtimeRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
