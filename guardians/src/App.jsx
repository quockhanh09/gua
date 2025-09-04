import { useState, useEffect } from "react";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

//
import logo from "./assets/img/Logo-name.png";
import iconGlobal from "./assets/img/Icon.svg";
import heroBg from "./assets/img/volcano-01.png";
import iconYoutube from "./assets/img/Icon-youtube.svg";
import iconInsta from "./assets/img/Icon-insta.svg";
import iconFace from "./assets/img/Facebook.svg";
import iconQr from "./assets/img/qr1-1.svg";
import appStore from "./assets/img/testimonials/appstore.svg";
import ggplay from "./assets/img/testimonials/gg play.svg";
import logoFull from "./assets/img/Logo-full.png";
import tabDot from "./assets/img/tab-dot.png";
import ttImg from "./assets/img/fortress-1.png"
import no1 from "./assets/img/no1.png";
import no2 from "./assets/img/no2.png";
import no3 from "./assets/img/no3.png";
import statusBg from "./assets/img/elrodika-05.png";
import nv12 from "./assets/img/nv-12.png";
import bgTime from "./assets/img/br-season.jpeg";
import seasonImg from "./assets/img/season 2025.png";


import canonDefault from "./assets/img/character=canon, state=default.png";
import canonZoom from "./assets/img/character=canon, state=zoom.png";
import holyDefault from "./assets/img/character=holy, state=default.png";
import holyZoom from "./assets/img/character=holy, state=zoom.png";
import assasinDefault from "./assets/img/character=assasin, state=default.png";
import assasinZoom from "./assets/img/character=assasin, state=zoom.png";
import warriorDefault from "./assets/img/character=warrior, state=default.png";
import warriorZoom from "./assets/img/character=warrior, state=zoom.png";
import mageDefault from "./assets/img/character=mage, state=default.png";
import mageZoom from "./assets/img/character=mage, state=zoom.png";
import archerDefault from "./assets/img/character=archer, state=default.png";
import archerZoom from "./assets/img/character=archer, state=zoom.png";
// danh sách nhân vật
const characters = [
  { key: "canon", default: canonDefault, zoom: canonZoom },
  { key: "holy", default: holyDefault, zoom: holyZoom },
  { key: "assasin", default: assasinDefault, zoom: assasinZoom },
  { key: "warrior", default: warriorDefault, zoom: warriorZoom },
  { key: "mage", default: mageDefault, zoom: mageZoom },
  { key: "archer", default: archerDefault, zoom: archerZoom },
];

import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";

const eventImages = [event1, event2, event3, event4];

function App() {
 const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // ===== TAB MENU =====
    const buttons = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    const handleTabClick = (btn) => {
      if (!btn || !btn.dataset?.tab) return;
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");

      const tabContent = document.getElementById(btn.dataset.tab);
      if (tabContent) tabContent.classList.add("active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleTabClick(btn));
    });

    // ===== CHARACTER CARD =====
    const cards = document.querySelectorAll(".character-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        if (!card.classList.contains("active")) {
          const hoverImg = card.querySelector("img.hover");
          if (hoverImg) {
            card.style.width = hoverImg.naturalWidth + "px";
            card.style.height = hoverImg.naturalHeight + "px";
          }
          card.classList.add("show-overlay");
        }
      });

      card.addEventListener("mouseleave", () => {
        if (!card.classList.contains("active")) {
          const defaultImg = card.querySelector("img.default");
          if (defaultImg) {
            card.style.width = defaultImg.naturalWidth + "px";
            card.style.height = defaultImg.naturalHeight + "px";
          }
          card.classList.remove("show-overlay");
        }
      });

      card.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        cards.forEach((c) => {
          c.classList.remove("active");
          c.classList.remove("show-overlay");
          const defaultImg = c.querySelector("img.default");
          if (defaultImg) {
            c.style.width = defaultImg.naturalWidth + "px";
            c.style.height = defaultImg.naturalHeight + "px";
          }
        });
        if (!isActive) {
          card.classList.add("active", "show-overlay");
          const hoverImg = card.querySelector("img.hover");
          if (hoverImg) {
            card.style.width = hoverImg.naturalWidth + "px";
            card.style.height = hoverImg.naturalHeight + "px";
          }
        }
      });
    });

    // ===== INIT CHARACTER SIZE =====
    const setDefaultSize = () => {
      document.querySelectorAll(".character-card").forEach((card) => {
        const defaultImg = card.querySelector("img.default");
        if (defaultImg) {
          card.style.width = defaultImg.naturalWidth + "px";
          card.style.height = defaultImg.naturalHeight + "px";
        }
      });
    };

    if (document.readyState === "complete") {
      setDefaultSize();
    } else {
      window.addEventListener("load", setDefaultSize);
    }

    // ===== COUNTDOWN =====
    const targetDate = new Date("Sep 15, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", setDefaultSize);
    };
  }, []);


  return (
    <div className="index-page">
      {/* ===== HEADER ===== */}
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            <img
              src={logo}
              alt="Dewi Logo"
              style={{ height: "300px" }}
            />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html" className="active" style={{ padding: "10px 20px" }}>
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
                <a href="cskh.html" style={{ padding: "10px 20px" }}>
                  HỖ TRỢ
                </a>
              </li>
              <li className="login-item">
                <img src={iconGlobal} alt="Globe Icon" className="icon-globe" />
                <button className="button-dow">
                  <a href="dang-nhap.html" style={{ color: "#2E3F55" }}>
                    ĐĂNG NHẬP
                  </a>
                </button>
              </li>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="hero section"
        style={{
          margin: 0,
          padding: 0,
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div
          className="parallax-window fullscreen hero-flex"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container hero-container">
            <div className="hero-main">
              <div className="hero-text">
                <a href="">
                  <img src={iconYoutube} alt="youtube" />
                </a>
                <a href="">
                  <img src={iconInsta} alt="instagram" />
                </a>
                <a href="">
                  <img src={iconFace} alt="facebook" />
                </a>
                <a href="">
                  <img src={iconQr} alt="qr" />
                </a>
                <a href="">
                  <img src={iconQr} alt="qr" />
                </a>
                <div className="store-links">
                  <a href="">
                    <img src={appStore} alt="appstore" />
                  </a>
                  <a href="">
                    <img src={ggplay} alt="playstore" />
                  </a>
                </div>
              </div>
              <div className="hero-image" data-aos-delay="200">
                <img
                  src={logoFull}
                  alt="Dewi Logo"
                  className="img-fluid"
                  style={{ width: "500px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about section">
        {/* Menu */}
        <div className="tab-menu">
          <button className="tab-link active" data-tab="news">TIN TỨC</button>
          <img src={tabDot} alt="dot" className="tab-dot" />
          <button className="tab-link" data-tab="rank">XẾP HẠNG</button>
          <img src={tabDot} alt="dot" className="tab-dot" />
          <button className="tab-link" data-tab="event">SỰ KIỆN</button>
        </div>

        {/* ===================== TAB NỘI DUNG ===================== */}

        {/* Tin tức */}
        <div id="news" className="tab-content active" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          <div className="news-grid">
            {[1, 2, 3, 4].map((i) => (

              <article className="news-card" >
                <div className="news-inner">
                  <div className="news-thumb">
                    <img src={ttImg} alt={`news ${i}`} />
                  </div>
                  <div className="news-body">
                    <p className="news-meta">CẬP NHẬT TRÒ CHƠI | 1 NGÀY TRƯỚC</p>
                    <h3 className="news-title">KHỞI ĐỘNG SERVER MÙA GIẢI 2025</h3>
                    <p className="news-desc">
                      Hỡi các chiến binh!<br />
                      Mùa giải [Tên Mùa Giải Mới] chính thức khai mở, mang theo những thử thách cam go hơn,
                      những chiến lược đỉnh cao hơn và những phần thưởng vinh quang hơn bao giờ hết!
                    </p>
                  </div>
                </div>
              </article>

            ))}
          </div>
          <a href="tin-tuc.html" className="btn-more">
            Xem thêm <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        {/* Xếp hạng */}
        <div id="rank" className="tab-content">
          <div className="rank-top">
            <div className="player" style={{ marginTop: "80px" }}>
              <img src={no2} alt="no2" />
              <h4>SOOAH<br />LV.99</h4>
            </div>
            <div className="player" style={{ marginTop: "-40px" }}>
              <img src={no1} alt="no1" />
              <h4>DECAF<br />LV.99</h4>
            </div>
            <div className="player" style={{ marginTop: "80px" }}>
              <img src={no3} alt="no3" />
              <h4>GRACE<br />LV.99</h4>
            </div>
          </div>
          <table className="rank-table">
            <thead>
              <tr>
                <th>HẠNG</th>
                <th>TÊN NGƯỜI DÙNG</th>
                <th>NHÂN VẬT</th>
                <th>LEVEL</th>
                <th>BANG HỘI</th>
                <th>SERVER</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "#ECC689" }}>
                <td>1</td>
                <td>DECAF</td>
                <td>CHIẾN BINH</td>
                <td>99</td>
                <td>DECAF</td>
                <td>VALION</td>
              </tr>
              <tr style={{ color: "#ECC689" }}>
                <td>2</td>
                <td>SOOAH</td>
                <td>SÁT THỦ</td>
                <td>99</td>
                <td>VK ENT</td>
                <td>TRIAD</td>
              </tr>
              <tr style={{ color: "#ECC689" }}>
                <td>3</td>
                <td>GRACE</td>
                <td>THÁNH KỴ SĨ</td>
                <td>99</td>
                <td>VK ENT</td>
                <td>TRIAD</td>
              </tr>
              <tr>
                <td>4</td>
                <td>DEFT</td>
                <td>CHIẾN BINH</td>
                <td>96</td>
                <td>KT</td>
                <td>ASTRID</td>
              </tr>
              <tr>
                <td>5</td>
                <td>FAKER</td>
                <td>CUNG THỦ</td>
                <td>96</td>
                <td>T1</td>
                <td>ASTRID</td>
              </tr>
              <tr>
                <td>6</td>
                <td>ZEUS</td>
                <td>XẠ THỦ PHÁO</td>
                <td>94</td>
                <td>HLE</td>
                <td>VALION</td>
              </tr>
              <tr>
                <td>7</td>
                <td>PEANUT</td>
                <td>THÁNH KỴ SĨ</td>
                <td>98</td>
                <td>HLE</td>
                <td>VALION</td>
              </tr>
              <tr>
                <td>8</td>
                <td>RASCAL</td>
                <td>CUNG THỦ</td>
                <td>97</td>
                <td>DRX</td>
                <td>TRIAD</td>
              </tr>
              <tr>
                <td>9</td>
                <td>ONER</td>
                <td>SÁT THỦ</td>
                <td>94</td>
                <td>T1</td>
                <td>VALION</td>
              </tr>
              <tr>
                <td>10</td>
                <td>PERFECT</td>
                <td>XẠ THỦ PHÁO</td>
                <td>94</td>
                <td>KT</td>
                <td>VALION</td>
              </tr>
              {/* ... copy thêm các hàng còn lại từ file gốc */}
            </tbody>
          </table>
          <a href="tin-tuc.html" className="btn-more">
            Xem thêm <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        {/* Sự kiện */}
        <div id="event" className="tab-content">
          <div className="event-grid">
            {eventImages.map((img, i) => (
              <div
                key={i}
                className="event-card"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="overlay"></div>
                <div className="event-info">
                  <p className="event-year">2025</p>
                  <p className="event-date">30 . 10</p>
                  <p className="event-title">
                    Khu Thi Đấu Cyber Galaxy: <br />
                    Chung Kết Mùa Giải 2025
                  </p>
                  <span className="event-link">VEVE.AI.VN</span>
                </div>
              </div>
            ))}
          </div>
          <a href="tin-tuc.html" className="btn-more">
            Xem thêm <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        id="stats"
        className="stats"
        style={{
          backgroundImage: `url(${statusBg})`,
          backgroundSize: "cover",        // không bị lặp, phủ toàn bộ section
          backgroundPosition: "center",   // căn giữa ảnh
          backgroundRepeat: "no-repeat",  // không lặp ảnh
          minHeight: "500px",
          maxHeight: "1200px",
          width: "100%",
          alignItems: "center",
          display: "flex",
          position: "relative",           // để overlay hoặc nội dung nổi trên
          color: "#fff",                  // cho chữ sáng lên
          zIndex: 1,
        }}
      >
        <div className="container"  data-aos-delay="100" >
          <div className="row gy-4">
            <div className="col-lg-8 stats-card">
              <article className="news-stats-card">
                <div className="news-stats-inner">
                  <div className="news-stats-body">
                    <p
                      className="news-stats"
                      style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        textAlign: "center",
                      }}
                    >
                      Chào mừng đến với thế giới của những cuộc phiêu lưu bất tận! Game nhập vai (RPG) không chỉ là một
                    trò chơi, mà là một cánh cửa mở ra những câu chuyện huyền bí, nơi bạn không chỉ điều khiển nhân vật
                    mà còn sống cuộc đời của họ. Hãy tạo dựng số phận của riêng bạn, từ một người lính vô danh trở thành
                    anh hùng cứu thế giới, hoặc một pháp sư quyền năng điều khiển các nguyên tố.
                    </p>
                  </div>
                </div>
              </article>

              <a href="cam-nang.html" className="btn-stats-more">
                TÌM HIỂU THÊM <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <img
                src={nv12}
                alt=""
                style={{ width: "700px", height: "auto", transform: "translateX(-120px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHARACTERS ===== */}
      <section
        id="services"
        className="services section"
        style={{
          backgroundImage: "linear-gradient(#272C36 100%, #2E3F55 80%, #545660 80%)",
          padding: "20px 0px",
        }}
      >
        <div className="tab-menu-character">
          <img src={tabDot} alt="dot" className="tab-dot" />
          <button className="">NHÂN VẬT</button>
          <img src={tabDot} alt="dot" className="tab-dot" />
        </div>
<div className="container character-main">
  <div className="character-list">
    {characters.map((char, i) => (
      <div className="character-card" key={i}>
        <div className="character-image">
          <img src={char.default} alt={`${char.key}-default`} className="default" />
          <img src={char.zoom} alt={`${char.key}-hover`} className="hover" />
        </div>
        <div className="character-overlay">
          <h3>{`CHARACTER ${i + 1}`}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet cras et cras aliquam
            volutpat non dolor sagittis sed.
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        <div className="character-btn">
          <a href="cam-nang.html" className="btn-stats-more-character">
            XEM THÊM <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* ===== SEASON COUNTDOWN ===== */}
      <section
        id="season"
        className="season section"
        style={{
          backgroundImage: `url(${bgTime})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <div className="container-season">
          <img src={seasonImg} alt="season 2025" />
        </div>

        <div className="countdown">
          {timeLeft ? (
            <>
              <div className="time-box">
                <div>{timeLeft.days}</div>
                <span>NGÀY</span>
              </div>
              <div className="divider"></div>
              <div className="time-box">
                <div>{timeLeft.hours}</div>
                <span>GIỜ</span>
              </div>
              <div className="divider"></div>
              <div className="time-box">
                <div>{timeLeft.minutes}</div>
                <span>PHÚT</span>
              </div>
              <div className="divider"></div>
              <div className="time-box">
                <div>{timeLeft.seconds}</div>
                <span>GIÂY</span>
              </div>
            </>
          ) : (
            <h2 style={{ color: "#fff" }}>Sự kiện đã bắt đầu!</h2>
          )}
        </div>
      </section>
      {/* ===== COMMENTS ===== */}
      <section
        id="testimonials"
        className="testimonials section"
        style={{
          backgroundImage: "url('/assets/img/blood-lucarly.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Cộng đồng nói gì?</h2>
          <p>Những chia sẻ từ các game thủ hàng đầu</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {[
              {
                img: "testimonials/testimonials-1.jpg",
                name: "Nguyễn Văn A",
                role: "Game thủ chuyên nghiệp",
                text: "Trò chơi mang lại trải nghiệm cực kỳ hấp dẫn!",
              },
              {
                img: "testimonials/testimonials-2.jpg",
                name: "Trần Thị B",
                role: "Streamer",
                text: "Mình rất thích chế độ xếp hạng và các sự kiện trong game.",
              },
              {
                img: "testimonials/testimonials-3.jpg",
                name: "Lê Văn C",
                role: "Game thủ",
                text: "Đồ họa đẹp mắt, gameplay cuốn hút. Rất đáng để trải nghiệm.",
              },
            ].map((c, i) => (
              <div className="col-lg-4" key={i}>
                <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                  <img src={`/assets/img/${c.img}`} className="testimonial-img" alt={c.name} />
                  <h3>{c.name}</h3>
                  <h4>{c.role}</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    {c.text}
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== FOOTER ===== */}
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span>DEWI</span>
                </a>
                <p>
                  DEWI là tựa game nhập vai MMORPG với đồ họa ấn tượng, cốt truyện hấp dẫn
                  và cộng đồng người chơi đông đảo.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="youtube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Liên kết</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Trang chủ</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Tin tức</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Cẩm nang</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Hỗ trợ</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Liên hệ</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Liên hệ</h4>
                <p>
                  123 Đường ABC <br />
                  Quận XYZ, TP.HCM <br />
                  Việt Nam <br /><br />
                  <strong>Điện thoại:</strong> +84 123 456 789<br />
                  <strong>Email:</strong> info@dewivn.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Nhận tin tức mới</h4>
                <p>Đăng ký để không bỏ lỡ các sự kiện và cập nhật mới nhất.</p>
                <form>
                  <input type="email" name="email" placeholder="Email của bạn" />
                  <input type="submit" value="Đăng ký" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; 2025 <strong><span>DEWI</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Thiết kế bởi <a href="#">VK Entertainment</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
