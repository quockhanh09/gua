const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const Account = require("../models/Account");
router.post("/register", register);
router.post("/login", login);

module.exports = router;

router.get("/users", async (req, res) => {
  try {
    const users = await Account.find(); // lấy hết user
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});