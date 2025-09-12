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
router.delete("/:id", async (req, res) => {
  try {
    const user = await Account.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "❌ User không tồn tại" });
    }

    res.json({ message: "✅ Xóa user thành công", deletedUser: user });
  } catch (err) {
    res.status(500).json({ message: "❌ Lỗi server", error: err.message });
  }
});

module.exports = router;