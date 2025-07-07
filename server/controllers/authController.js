const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });

    const { password: pw, ...userData } = user._doc;
    res.status(201).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: pw, ...userData } = user._doc;
    res.json({ token, user: userData });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  const { email, name, googleId } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name, googleId, role: "customer" });
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: pw, ...userData } = user._doc;
    res.json({ token, user: userData });
  } catch (err) {
    res.status(500).json({ message: "Google login error" });
  }
};

// Secure route example
exports.getProfile = async (req, res) => {
  res.json({ message: "Secure access granted", user: req.user });
};
