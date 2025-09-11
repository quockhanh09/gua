const express = require("express");
const app = express();
const PORT = 3000;

// Middleware để đọc JSON
app.use(express.json());

// Route cơ bản
app.get("/", (req, res) => {
  res.send("Hello from Node.js Backend!");
});

// Route demo API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Trung" },
    { id: 2, name: "Ngọc" }
  ]);
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
