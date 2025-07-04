const mongoose = require("mongoose");

// Connect to MongoDB with options to avoid deprecation warnings
mongoose.connect("mongodb://localhost:27017/curamate", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection failed:", err);
});

// Define schema with improved structure
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export model
const UserCollection = mongoose.model("User", userSchema);

module.exports = UserCollection;