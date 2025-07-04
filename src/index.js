import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import userRoutes from './routes/users.js';

// Load environment variables
dotenv.config();

// Initialize the server
async function startServer() {
  try {
    // Connect to MongoDB
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/curamate';
    await connectDB(MONGO_URI);
    
    // Create Express app
    const app = express();
    
    // Middleware
    app.use(cors());
    app.use(express.json());
    
    // Routes
    app.use('/api/users', userRoutes);
    
    // Health check route
    app.get('/health', (req, res) => {
      res.json({ status: 'ok' });
    });
    
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();