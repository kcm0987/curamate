const express = require("express");
const collection = require("./mongo.cjs");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", cors(), (req, res) => {
  res.json({ message: "Server is running" });
});

// Login route
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await collection.findOne({ email: email });
    
    if (user) {
      // Compare password (should use bcrypt in production)
      if (user.password === password) {
        res.json("exist");
      } else {
        res.json("incorrect_password");
      }
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json("fail");
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password, fullName } = req.body;
  
  const data = {
    email: email,
    password: password,
    fullName: fullName || "" // Add fullName field if provided
  };
  
  try {
    const existingUser = await collection.findOne({ email: email });
    
    if (existingUser) {
      res.json("exist");
    } else {
      await collection.create(data); // Using create instead of insertMany
      res.json("notexist");
    }
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json("fail");
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});