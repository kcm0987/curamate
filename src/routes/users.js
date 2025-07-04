import express from 'express';
import userService from '../services/userService.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const result = await userService.registerUser({ fullName, email, password });
    res.status(201).json(result);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ message: error.message || 'Registration failed' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const result = await userService.loginUser({ email, password });
    res.json(result);
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({ message: error.message || 'Login failed' });
  }
});

// Get user data (protected route)
router.get('/me', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(404).json({ message: error.message || 'User not found' });
  }
});

export default router;