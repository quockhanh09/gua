import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";

function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img
            src={logo}
            alt="Dewi Logo"
            style={{ height: "300px" }}
          />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active" style={{ padding: "10px 20px" }}>
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a href="/News" style={{ padding: "10px 20px" }}>
                TIN TỨC
              </a>
            </li>
            <li>
              <a href="/Deatails" style={{ padding: "10px 20px" }}>
                CẨM NANG
              </a>
            </li>
            <li>
              <a href="/Contact" style={{ padding: "10px 20px" }}>
                HỖ TRỢ
              </a>
            </li>
            <li className="login-item">
              <img src={iconGlobal} alt="Globe Icon" className="icon-globe" />
              <button className="button-dow">
                {isLoginPage ? (
                  <Link to="/Register" style={{ color: "#2E3F55" }}>
                    ĐĂNG KÝ
                  </Link>
                ) : (
                  <Link to="/Login" style={{ color: "#2E3F55" }}>
                    ĐĂNG NHẬP
                  </Link>
                )}
              </button>
            </li>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;