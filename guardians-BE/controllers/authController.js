const Account = require("../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =====================
// Đăng ký
// =====================
exports.register = async (req, res) => {
  try {
    const {
      fullName,
      dob,
      phone,
      email,
      username,
      password,
      confirmPassword,
      isAdult
    } = req.body;

    // Validate input
    if (!fullName || !dob || !phone || !email || !username || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Vui lòng nhập đầy đủ thông tin" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Mật khẩu không khớp" });
    }

    if (!isAdult) {
      return res.status(400).json({ msg: "Bạn phải xác nhận trên 18 tuổi" });
    }

    // Check trùng email / username
    const existing = await Account.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ msg: "Email hoặc tên đăng nhập đã tồn tại" });
    }

    // Hash mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo account mới
    const newAccount = new Account({
      fullName,
      dob,
      phone,
      email,
      username,
      password: hashedPassword,
      isAdult
    });

    await newAccount.save();

    res.status(201).json({
      msg: "Đăng ký thành công!",
      user: {
        id: newAccount.id,
        username: newAccount.username,
        email: newAccount.email
      }
    });
  } catch (err) {
    console.error("❌ Lỗi đăng ký:", err);
    res.status(500).json({ msg: "Lỗi server" });
  }
};

// =====================
// Đăng nhập
// =====================
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kiểm tra có user không
    const account = await Account.findOne({ username });
    if (!account) {
      return res.status(400).json({ msg: "Tên đăng nhập không tồn tại" });
    }

    // So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Sai mật khẩu" });
    }

    // Tạo JWT token
    const token = jwt.sign(
      { id: account._id, username: account.username },
      process.env.JWT_SECRET || "MY_SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({
      msg: "Đăng nhập thành công",
      token,
      user: {
        id: account.id,
        username: account.username,
        email: account.email
      }
    });
  } catch (err) {
    console.error("❌ Lỗi đăng nhập:", err);
    res.status(500).json({ msg: "Lỗi server" });
  }
};

// =====================
// Middleware xác thực JWT
// =====================
exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ msg: "Không có token, truy cập bị từ chối" });
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET || "MY_SECRET_KEY"
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token không hợp lệ" });
  }
};
