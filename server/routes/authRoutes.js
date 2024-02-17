const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/authController");

// Middleware to handle CORS for all routes
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Handle CORS preflight OPTIONS request for /register endpoint
router.options("/register", cors());

// Routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
