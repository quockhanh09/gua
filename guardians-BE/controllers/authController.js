const Account = require("../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullName, dob, phone, email, username, password, confirmPassword, isAdult } = req.body;

    if (!fullName || !dob || !phone || !email || !username || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Vui lòng nhập đầy đủ thông tin" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Mật khẩu không khớp" });
    }

    if (!isAdult) {
      return res.status(400).json({ msg: "Bạn phải xác nhận trên 18 tuổi" });
    }

    const existing = await Account.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ msg: "Email hoặc tên đăng nhập đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

    res.json({
      msg: "Đăng ký thành công",
      user: {
        id: newAccount.id,
        username: newAccount.username,
        email: newAccount.email
      }
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const account = await Account.findOne({ username });
    if (!account) return res.status(400).json({ msg: "Tên đăng nhập không tồn tại" });

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) return res.status(400).json({ msg: "Sai mật khẩu" });

    const token = jwt.sign({ id: account._id }, process.env.JWT_SECRET || "MY_SECRET_KEY", { expiresIn: "1d" });

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
    res.status(500).json({ msg: err.message });
  }
};
