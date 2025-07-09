const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Ensure this import is correct
const authMiddleware = require("../middleware/authMiddleware");

// Public Routes
router.post("/signup", authController.register);  // Ensure authController.register is a valid function
router.post("/login", authController.login);  // Ensure authController.login is a valid function
router.post("/google-login", authController.googleLogin);  // Ensure authController.googleLogin is a valid function

// Protected Routes
router.put("/user/profile", authMiddleware, authController.updateProfile);  // Ensure authController.updateProfile is a valid function
router.get("/user/profile", authMiddleware, authController.getProfile);  // Ensure authController.getProfile is a valid function

module.exports = router;
