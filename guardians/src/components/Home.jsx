import { useEffect } from "react";

import heroBg from "../assets/img/volcano-01.png";
import iconYoutube from "../assets/img/Icon-youtube.svg";
import iconInsta from "../assets/img/Icon-insta.svg";
import iconFace from "../assets/img/Facebook.svg";
import iconQr from "../assets/img/qr1-1.svg";
import appStore from "../assets/img/testimonials/appstore.svg";
import ggplay from "../assets/img/testimonials/gg play.svg";
import logoFull from "../assets/img/Logo-full.png";
import tabDot from "../assets/img/tab-dot.png";
import ttImg from "../assets/img/fortress-1.png";
import no1 from "../assets/img/no1.png";
import no2 from "../assets/img/no2.png";
import no3 from "../assets/img/no3.png";
import statusBg from "../assets/img/elrodika-05.png";
import nv12 from "../assets/img/nv-12.png";

import canonDefault from "../assets/img/character=canon, state=default.png";
import canonZoom from "../assets/img/character=canon, state=zoom.png";
import holyDefault from "../assets/img/character=holy, state=default.png";
import holyZoom from "../assets/img/character=holy, state=zoom.png";
import assasinDefault from "../assets/img/character=assasin, state=default.png";
import assasinZoom from "../assets/img/character=assasin, state=zoom.png";
import warriorDefault from "../assets/img/character=warrior, state=default.png";
import warriorZoom from "../assets/img/character=warrior, state=zoom.png";
import mageDefault from "../assets/img/character=mage, state=default.png";
import mageZoom from "../assets/img/character=mage, state=zoom.png";
import archerDefault from "../assets/img/character=archer, state=default.png";
import archerZoom from "../assets/img/character=archer, state=zoom.png";

import event1 from "../assets/img/lucarly-08.png";
import event2 from "../assets/img/lucarly-02.png";
import event3 from "../assets/img/lucarly-01.png";
import event4 from "../assets/img/kram-11.png";

const characters = [
    { key: "canon", default: canonDefault, zoom: canonZoom },
    { key: "holy", default: holyDefault, zoom: holyZoom },
    { key: "assasin", default: assasinDefault, zoom: assasinZoom },
    { key: "warrior", default: warriorDefault, zoom: warriorZoom },
    { key: "mage", default: mageDefault, zoom: mageZoom },
    { key: "archer", default: archerDefault, zoom: archerZoom },
];

const eventImages = [event1, event2, event3, event4]; 

function Home() {

 const [commentsColumn1, setCommentsColumn1] = useState([
    "Đắm chìm trong một thế giới sống động như thật!... ",
    "Đồ họa quá đỉnh! Thế giới trong game được thiết kế tỉ mỉ...",
    "Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn...Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn...",
    "Đắm chìm trong một thế giới sống động như thật! Đồ họa của game thực sự là một tác phẩm nghệ thuật. Từ những ngọn cỏ lay động trước gió, ánh nắng xuyên qua tán lá, cho đến kiến trúc tráng lệ của các thành phố cổ kính, mọi chi tiết đều được chăm chút tỉ mỉ đến kinh ngạc. Hiệu ứng ánh sáng và đổ bóng chân thực càng làm tăng thêm chiều sâu và sự cuốn hút cho thế giới ảo này, khiến người chơi hoàn toàn bị mê hoặc và quên đi ranh giới giữa thực và ảo.",
    "Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn..."
  ]);

  const commentsColumn2 = [
    "Gameplay sáng tạo và gây nghiện!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Gameplay sáng tạo và gây nghiện! Cơ chế chiến đấu mượt mà, các nhiệm vụ đa dạng và luôn có điều gì đó mới mẻ để khám phá.",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách! Cơ chế chiến đấu của game được thiết kế tinh tế, đòi hỏi người chơi không chỉ có kỹ năng cá nhân mà còn phải có tư duy chiến thuật. Sự đa dạng trong cách xây dựng nhân vật, lựa chọn vũ khí và kỹ năng mở ra vô vàn chiến thuật khác nhau. Các nhiệm vụ được thiết kế thông minh, không lặp lại nhàm chán mà luôn mang đến những thử thách mới mẻ, đòi hỏi người chơi phải vận dụng tất cả những gì mình có để vượt qua.",

  ];

  const commentsColumn3 = [
    "Hiệu ứng ánh sáng và đổ bóng chân thực...",
    "Game mang lại những khoảnh khắc đáng nhớ...",
    "Đắm chìm trong một thế giới sống động như thật! Đồ họa của game thực sự là một tác phẩm nghệ thuật. Từ những ngọn cỏ lay động trước gió, ánh nắng xuyên qua tán lá, cho đến kiến trúc tráng lệ của các thành phố cổ kính, mọi chi tiết đều được chăm chút tỉ mỉ đến kinh ngạc. Hiệu ứng ánh sáng và đổ bóng chân thực càng làm tăng thêm chiều sâu và sự cuốn hút cho thế giới ảo này, khiến người chơi hoàn toàn bị mê hoặc và quên đi ranh giới giữa thực và ảo.",
    "Game mang lại những khoảnh khắc đáng nhớ...",
    "Game mang lại những khoảnh khắc đáng nhớ...",
    
  ];

  const [newComment, setNewComment] = useState("");

  // hàm render 1 cột
  const renderColumn = (comments) => (
    <div className="column">
      {comments.map((text, i) => (
        <div key={i} className="comment">
          @decaf
          <br />
          {text}
        </div>
      ))}
    </div>
  );

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setCommentsColumn1([...commentsColumn1, newComment]);
    setNewComment(""); // clear textarea
  };


    useEffect(() => {
        // TAB MENU
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

        buttons.forEach((btn) =>
            btn.addEventListener("click", () => handleTabClick(btn))
        );

        // CHARACTER CARDS
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
                    c.classList.remove("active", "show-overlay");
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

        // INIT CHARACTER SIZE
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

        return () => {
            window.removeEventListener("load", setDefaultSize);
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO */}
            <section
                id="hero"
                className="hero section"
                style={{ margin: 0, padding: 0, backgroundImage: `url(${heroBg})` }}
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
                                <a href=""><img src={iconYoutube} alt="youtube" /></a>
                                <a href=""><img src={iconInsta} alt="instagram" /></a>
                                <a href=""><img src={iconFace} alt="facebook" /></a>
                                <a href=""><img src={iconQr} alt="qr" /></a>
                                <a href=""><img src={iconQr} alt="qr" /></a>
                                <div className="store-links">
                                    <a href=""><img src={appStore} alt="appstore" /></a>
                                    <a href=""><img src={ggplay} alt="playstore" /></a>
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

            {/* ABOUT SECTION */}
            <section id="about" className="about section">
                <div className="tab-menu">
                    <button className="tab-link active" data-tab="news">TIN TỨC</button>
                    <img src={tabDot} alt="dot" className="tab-dot" />
                    <button className="tab-link" data-tab="rank">XẾP HẠNG</button>
                    <img src={tabDot} alt="dot" className="tab-dot" />
                    <button className="tab-link" data-tab="event">SỰ KIỆN</button>
                </div>

                {/* Tin tức */}
                <div id="news" className="tab-content active">
                    <div className="news-grid">
                        {[1, 2, 3, 4].map((i) => (
                            <article className="news-card" key={i}>
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
                                <td>1</td><td>DECAF</td><td>CHIẾN BINH</td><td>99</td><td>DECAF</td><td>VALION</td>
                            </tr>
                            <tr style={{ color: "#ECC689" }}>
                                <td>2</td><td>SOOAH</td><td>SÁT THỦ</td><td>99</td><td>VK ENT</td><td>TRIAD</td>
                            </tr>
                            <tr style={{ color: "#ECC689" }}>
                                <td>3</td><td>GRACE</td><td>THÁNH KỴ SĨ</td><td>99</td><td>VK ENT</td><td>TRIAD</td>
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
                        </tbody>
                    </table>
                    <a href="tin-tuc.html" className="btn-more">Xem thêm <i className="bi bi-arrow-right"></i></a>
                </div>

                {/* Sự kiện */}
                <div id="event" className="tab-content">
                    <div className="event-grid">
                        {eventImages.map((img, i) => (
                            <div key={i} className="event-card" style={{ backgroundImage: `url(${img})` }}>
                                <div className="overlay"></div>
                                <div className="event-info">
                                    <p className="event-year">2025</p>
                                    <p className="event-date">30 . 10</p>
                                    <p className="event-title">Khu Thi Đấu Cyber Galaxy:<br />Chung Kết Mùa Giải 2025</p>
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

            {/* STATS */}
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
                   <div className="container" data-aos-delay="100" >
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

            {/* CHARACTERS */}
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

                 <section
      id="services"
      className="services section"
      style={{
        backgroundImage:
          "linear-gradient(#272C36 100%, #2E3F55 80%, #545660 80%)",
        padding: "20px 0px",
      }}
    >
      <div className="body-comments">
        <div className="comments-layout">
          {/* Cột bình luận */}
          <div className="comments-wrapper">
            {renderColumn(commentsColumn1)}
            {renderColumn(commentsColumn2)}
            {renderColumn(commentsColumn3)}
          </div>

          {/* Form bình luận */}
          <div
            className="content-box"
            style={{
              backgroundImage:
                "linear-gradient(#272C36 100%, #2E3F55 80%, #545660 80%)",
              padding: "20px 0px",
            }}
          >
            <h3>NỘI DUNG</h3>
            <textarea
              placeholder="Nhập nội dung của bạn"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <br />
            <button onClick={handleAddComment}>BÌNH LUẬN →</button>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default Home;
