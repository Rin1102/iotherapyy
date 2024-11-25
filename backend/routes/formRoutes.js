const express = require('express');
const router = express.Router();
const Form = require('../models/Form');


router.post('/submit', async (req, res) => {
  try {
    const { userId, waterIntake, mood, sleep, heartRate, stressLevel } = req.body;

    console.log('Received request body:', req.body); // Log the request body

    if (!userId || !waterIntake || !mood || !sleep || !heartRate || !stressLevel) {
      console.log('Validation failed. Missing fields.');
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newForm = new Form({
      userId,
      waterCups: waterIntake,
      mood,
      sleep,
      heartRate,
      stressLevel,
      date: new Date(),
    });

    await newForm.save();

    res.status(201).json({ message: 'Form submitted successfully', form: newForm });
  } catch (error) {
    console.error('Error saving form:', error); // Log the actual error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
