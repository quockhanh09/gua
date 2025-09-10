import React, { useState } from "react";
import "../style/signup-in.css";

// Import images
import logo from "../assets/img/TheGuardian_Logo_VIE 3.png";
import facebookIcon from "../assets/img/Facebook.svg";
import youtubeIcon from "../assets/img/Icon-youtube.svg";
import instaIcon from "../assets/img/Icon-insta.svg";
import qrIcon from "../assets/img/qr1-1.svg";
import ggPlayIcon from "../assets/img/testimonials/gg play.svg";
import appStoreIcon from "../assets/img/testimonials/appstore.svg";
import bgLo from "../assets/img/volcano-01.png"

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <section className="body-ath" style={{ backgroundImage: `url(${bgLo})`, padding: "30px 0",  }}>
        <div className="auth-box">
          {/* Logo */}
          <img src={logo} alt="Logo" className="auth-logo" />

          {/* Nút thông báo */}
          <div className="auth-register-msg">ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG</div>

          {/* Form */}
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-group">
              <label htmlFor="username">TÊN ĐĂNG NHẬP</label>
              <input
                type="text"
                id="username"
                placeholder="vethan_vn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="auth-group auth-password">
              <label htmlFor="password">MẬT KHẨU</label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="auth-toggle"
                onClick={handleTogglePassword}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Nút đăng nhập */}
            <button className="auth-btn-login" type="submit">
              ĐĂNG NHẬP
            </button>
          </form>
        </div>
      </section>

      <div className="register-apps">
        <a href="">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="">
          <img src={instaIcon} alt="Instagram" />
        </a>
        <a href="">
          <img src={qrIcon} alt="QR" />
        </a>
        <a href="#">
          <img src={ggPlayIcon} alt="Google Play" />
        </a>
        <a href="">
          <img src={qrIcon} alt="QR" />
        </a>
        <a href="#">
          <img src={appStoreIcon} alt="App Store" />
        </a>
      </div>
    </div>
  );
};

export default Login;