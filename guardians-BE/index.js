const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware để đọc JSON
app.use(express.json());

// ✅ 1. Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Kết nối MongoDB thành công"))
.catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));

// ✅ 2. Định nghĩa Schema + Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});
const User = mongoose.model("User", UserSchema);

// ✅ 3. Routes

// Test server
app.get("/", (req, res) => {
  res.send("Hello from Node.js + MongoDB!");
});

// Test kết nối DB
app.get("/api/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.json({ message: "✅ MongoDB đã kết nối thành công!" });
  } catch (err) {
    res.status(500).json({ message: "❌ MongoDB chưa kết nối!", error: err.message });
  }
});

// Lấy toàn bộ user
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

// Tạo user mới
app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Không thể tạo user" });
  }
});

// Cập nhật user theo id
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Không thể cập nhật user" });
  }
});

// Xóa user theo id
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User đã bị xóa" });
  } catch (err) {
    res.status(500).json({ error: "Không thể xóa user" });
  }
});

// ✅ 4. Chạy server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
