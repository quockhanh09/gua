import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link } from "react-router-dom";
import "../style/App.css";
function Header() {
  return (
     
         <header id="header" className="header d-flex align-items-center fixed-top">
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
                   <a href="tin-tuc.html" style={{ padding: "10px 20px" }}>
                     TIN TỨC
                   </a>
                 </li>
                 <li>
                   <a href="cam-nang.html" style={{ padding: "10px 20px" }}>
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
                     <Link to="/dang-nhap" style={{ color: "#2E3F55" }}>
                  ĐĂNG NHẬP
                </Link>
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