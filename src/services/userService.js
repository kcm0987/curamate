import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class UserService {
  // Register a new user
  async registerUser({ fullName, email, password }) {
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Create new user
      const user = await User.create({
        fullName,
        email,
        password
      });

      // Generate JWT token
      const token = this.generateToken(user._id);

      return {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email
        }
      };
    } catch (error) {
      throw error;
    }
  }

  // Login user
  async loginUser({ email, password }) {
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Check password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error('Invalid credentials');
      }

      // Generate JWT token
      const token = this.generateToken(user._id);

      return {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email
        }
      };
    } catch (error) {
      throw error;
    }
  }

  // Get user by ID
  async getUserById(id) {
    try {
      const user = await User.findById(id).select('-password');
      if (!user) {
        throw new Error('User not found');
      }
      
      return {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      };
    } catch (error) {
      throw error;
    }
  }

  // Generate JWT token
  generateToken(userId) {
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1d' }
    );
  }
}

export default new UserService();