const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Public
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/google-login", authController.googleLogin);

// Protected
router.get("/profile", authMiddleware, authController.getProfile);

module.exports = router;
