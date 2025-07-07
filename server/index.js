const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  credentials: true, // Allow credentials (cookies, Authorization headers)
};

app.use(cors(corsOptions));
app.use(express.json());

// Add headers to prevent COOP issues
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running!");
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
