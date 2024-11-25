const express = require('express');
const router = express.Router();

// Simulated Real-Time Data
router.get('/', (req, res) => {
  const heartRate = Math.floor(Math.random() * (120 - 60 + 1)) + 60; // Random between 60-120
  const stressLevel = Math.floor(Math.random() * 101); // Random between 0-100

  res.json({ heartRate, stressLevel });
});

module.exports = router;
