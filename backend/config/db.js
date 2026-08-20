const mongoose = require('mongoose');

// Single source of truth for the DB connection.
const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI is not set. Add it to your .env file.');
    process.exit(1);
  }

  // Prevent multiple connections in serverless/hot-reloading environments
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 15000, // Wait up to 15s for MongoDB to connect on cold start
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    
    // Connection event listeners for resilience
    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected successfully.');
    });

  } catch (error) {
    console.error(`DB connection error: ${error.message}`);
    // Don't exit process in production if we want to allow retry, but for initial boot it's standard
    process.exit(1);
  }
};

module.exports = connectDB;
