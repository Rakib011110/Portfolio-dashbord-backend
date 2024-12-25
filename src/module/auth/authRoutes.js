const express = require("express");

const { login, logout } = require("./authController");
const { protect } = require("./authMiddleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", protect, (req, res) => {
  res
    .status(200)
    .json({ message: "Profile fetched successfully", user: req.user });
});

module.exports = router;
