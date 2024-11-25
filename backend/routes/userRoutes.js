const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User Sign-up Endpoint
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, gender, age, email, password } = req.body;

    // Basic validation
    if (!firstName || !lastName || !gender || !age || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({ firstName, lastName, gender, age, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User Login Endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Get User by ID
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user from database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update User Profile
// Update user profile
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age, email } = req.body;

    // Validate input
    if (!firstName || !lastName || !age || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, age, email },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
