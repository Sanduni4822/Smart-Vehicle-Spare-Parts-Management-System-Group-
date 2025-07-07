const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String },
  role: { type: String, enum: ["customer", "admin", "manager"], default: "customer" },
  googleId: { type: String }, // For Google OAuth
});

module.exports = mongoose.model("User", userSchema);
