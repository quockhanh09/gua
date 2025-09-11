import logosword from "../assets/img/TheGuardian_Logo_VIE 3.png";
import logo from "../assets/img/Logo-name.png";
import "../style/App.css";
// file PDF bạn có thể để trong public hoặc import như asset
import chinhSach from "../assets/img/Chính sách bảo mật.pdf";
import dieuKhoan from "../assets/img/The Guardians_Điều khoản sử dụng.pdf";

function Footer() {
  return (
    <footer
      className="tv-footer"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="tv-top">
        <div className="tv-left">
          <img src={logosword} alt="sword logo" className="tv-sword-large" />
        </div>

        <div className="tv-main">
          <div className="tv-welcome">CHÀO MỪNG CÁC VỆ THẦN !</div>

          <h1 className="tv-heading">
            KẾT NỐI VỚI <span>THẾ GIỚI VỆ THẦN</span>
          </h1>

          <p className="tv-sub">
            Cập nhật sắc lệnh vệ thần hàng tuần để không bỏ lỡ tin tức quan trọng
            và cơ hội vàng sở hữu NFT trước ra mắt! Đây là chìa khóa để bạn dẫn
            đầu trong thế giới vệ thần!
          </p>

          {/* Thay form bằng div thường */}
          <div className="tv-form">
            <div className="tv-inputs">
              <label className="lbl">
                <div className="lbl-title">Tên của bạn</div>
                <input
                  className="tv-input"
                  type="text"
                  placeholder="Nhập tên của bạn"
                />
              </label>

              <label className="lbl">
                <div className="lbl-title">Email của bạn</div>
                <input
                  className="tv-input"
                  type="email"
                  placeholder="Nhập email của bạn"
                />
              </label>
            </div>

            <div className="tv-submit-wrap">
              <button className="tv-btn" type="button">
                <a
                  href="/Register"
                  style={{ color: "#233D4D", textDecoration: "none" }}
                >
                  ĐĂNG KÝ
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* separator row */}
      <div className="tv-sep-row">
        <div className="sep-inner">
          <div className="sep-logo">
            <img src={logo} alt="small sword" className="tv-sword-small" />
          </div>

          <nav className="sep-nav">
            <a href="/">TRANG CHỦ</a>
            <a href="/Deatails">GIỚI THIỆU</a>
            <a href="/#rank">BẢNG XẾP HẠNG</a>
            <a href="/Contact">HỖ TRỢ</a>
          </nav>

          <div className="sep-socials">
            <a
              href="#"
              className="ic"
              style={{ color: "#ECC689", fontSize: "16px" }}
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="#"
              className="ic"
              style={{ color: "#ECC689", fontSize: "16px" }}
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a
              href="#"
              className="ic"
              style={{ color: "#ECC689", fontSize: "16px" }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              className="ic"
              style={{ color: "#ECC689", fontSize: "16px" }}
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="tv-sep"></div>

      <div className="tv-bottom">
        <div className="b-center">
          Bản quyền thuộc về @VKENTERTAINMENTJSC.
        </div>
        <div className="b-right">
          <a href={chinhSach} style={{ color: "#ECC689", textDecoration: "none" }}>
            CHÍNH SÁCH QUYỀN RIÊNG TƯ
          </a>{" "}
          |{" "}
          <a href={dieuKhoan} style={{ color: "#ECC689", textDecoration: "none" }}>
            ĐIỀU KHOẢN SỬ DỤNG
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
