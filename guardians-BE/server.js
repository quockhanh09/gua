const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // load .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Kết nối MongoDB (chỉ gọi 1 lần)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Kết nối MongoDB thành công");
  console.log("🔗 URI:", process.env.MONGO_URI);

  // Đảm bảo connection đã open thì mới lấy databaseName
  mongoose.connection.once("open", () => {
    console.log("📂 Database:", mongoose.connection.db.databaseName);
  });
})
.catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Server Node.js + MongoDB đang chạy!");
});

// Run server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
