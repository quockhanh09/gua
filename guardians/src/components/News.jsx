import React from "react";

// Import hình ảnh
import characterImg from "../assets/img/Group-143726086-removebg-preview.png";
import imgTT from "../assets/img/img-tt.jpg";
import raceHorse from "../assets/img/race-hose1.png";
import bigCard from "../assets/img/big card.png";
import leftCard from "../assets/img/left-card.png";
import newsImg from "../assets/img/image-275.png";
import eventImg from "../assets/img/image-281.png";

function News() {
  return (
    <>
      {/* Portfolio Details Section */}
      <section
        id="portfolio-details"
        className="portfolio-details section"
        style={{ backgroundImage: "linear-gradient(#E3E1E1 100%)" }}
      >
        <div className="container"  data-aos-delay="100">
          <div className="swiper-body-tt">
            <div className="wrap">
              {/* Cột trái */}
              <div className="left">
                <img
                  className="character-img"
                  src={characterImg}
                  alt="female fantasy character"
                />
              </div>

              {/* Cột phải */}
              <div className="right">
                <div className="title-section">
                  <h1 style={{ textAlign: "center" }}>
                    Role-Playing the news,<br />
                    experiencing differently
                  </h1>
                </div>

                <div className="subtitle-right">Hôm Nay</div>

                <div className="cards">
                  {/* Card 1 */}
                  <article className="card">
                    <img
                      className="thumb-img"
                      src={imgTT}
                      alt="Geralt of Rivia character screen"
                    />
                    <div className="meta">
                      <div className="tag">RACE98 - 03 JUNE 2023</div>
                      <div className="title">
                        <a
                          href="/Newsletter"
                          style={{ color: "#000000" , textDecoration: "none" }}
                        >
                          Khai máy nhân vật mới mùa giải 2025
                        </a>
                      </div>
                    </div>
                  </article>

                  {/* Card 2 */}
                  <article className="card">
                    <img
                      className="thumb-img"
                      src={imgTT}
                      alt="Geralt of Rivia character screen"
                    />
                    <div className="meta">
                      <div className="tag">RACE98 - 03 JUNE 2023</div>
                      <div className="title">
                        <a
                          href="/Newsletter"
                           style={{ color: "#000000" , textDecoration: "none" }}
                        >
                          Khai máy nhân vật mới mùa giải 2025
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Tin nóng */}
            <div className="container py-5" style={{ backgroundColor: "white" }}>
              <div className="row gy-4">
                {/* Cột trái */}
                <div className="col-lg-6">
                  <h2 className="title-section-hot">Tin Nóng</h2>
                  {[1, 2, 3, 4].map((i) => (
                    <div className="news-item" key={i}>
                      <img src={raceHorse} alt="news" />
                      <div className="news-text">
                        <div className="news-meta-2">Race98 - 03 June 2023</div>
                        <h5>MỞ KHÓA LINH THÚ MÙA GIẢI MỚI 2025</h5>
                        <p>
                          Khám phá thế giới huyền bí và thu phục những linh thú
                          mạnh mẽ. Mỗi loài mang trong mình sức mạnh nguyên tố và
                          khả năng đặc biệt...
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cột phải */}
                <div className="col-lg-5" style={{ marginLeft: "90px" }}>
                  <div className="news-right">
                    <div className="card-2">
                      <img
                        src={bigCard}
                        alt="Mùa giải 2025"
                        className="card-img"
                      />
                      <div className="overlay"></div>
                      <div className="card-content-2">
                        <span className="tag">MÙA GIẢI 2025</span>
                        <p className="date">Debits · 03 June 2023</p>
                        <a href="/Newsletter"
                         style={{textDecoration: "none" }}>
                          <h3>
                            KHỞI ĐỘNG SERVER <br />
                            MÙA GIẢI 2025
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end phải */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tin tức gần đây */}
      <section style={{ backgroundImage: "linear-gradient(#E3E1E1 100%)" }}>
        <div className="layout-wrapper">
          <div className="layout-row">
            {/* Cột tin tức chính */}
            <div className="layout-column">
              <h2 className="block-heading">TIN TỨC GẦN ĐÂY</h2>
              <div className="main-article">
                <img src={leftCard} alt="Main News" />
                <div className="main-article-caption">
                  <h5 style={{ fontFamily: "Times New Roman" }}>
                    Baku 2023 World <br />
                    Taekwondo <br />
                    Championships
                  </h5>
                </div>
              </div>
            </div>

            {/* Cột tin nhỏ */}
            <div className="layout-column">
              <div style={{ height: "35px" }}></div>
              <div className="news-panel">
                <div>
                  {[1, 2, 3, 4].map((i) => (
                    <div className="news-entry" key={i}>
                      <img src={newsImg} alt="small news" />
                      <div className="news-entry-text">
                        <small>#Pollar. 87 - 12 July 2023</small>
                        <br />
                        <b>Baku 2023 Taekwondo Championships</b>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "15px" }}>
                  <button className="button-more">XEM THÊM →</button>
                </div>
              </div>
            </div>

            {/* Cột BXH */}
            <div className="layout-column">
              <h2 className="block-heading">XẾP HẠNG BANG HỘI</h2>
              <div className="ranking-panel">
                <table className="ranking-table">
                  <thead>
                    <tr>
                      <th>Bang hội</th>
                      <th>GP</th>
                      <th>W</th>
                      <th>D</th>
                      <th>L</th>
                      <th>GD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 ĐẶC NHIỆM DŨ</td>
                      <td>38</td>
                      <td>29</td>
                      <td>6</td>
                      <td>3</td>
                      <td>73</td>
                    </tr>
                    <tr>
                      <td>2 YÊU NHỀN NHỆN</td>
                      <td>38</td>
                      <td>28</td>
                      <td>8</td>
                      <td>2</td>
                      <td>68</td>
                    </tr>
                    <tr>
                      <td>3 SĨ QUAN</td>
                      <td>38</td>
                      <td>21</td>
                      <td>11</td>
                      <td>6</td>
                      <td>43</td>
                    </tr>
                    <tr>
                      <td>4 VK ENTERTAINM...</td>
                      <td>38</td>
                      <td>22</td>
                      <td>5</td>
                      <td>11</td>
                      <td>29</td>
                    </tr>
                    <tr>
                      <td>5 ĐẠI ĐOÀN KẾT</td>
                      <td>38</td>
                      <td>22</td>
                      <td>3</td>
                      <td>13</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>6 ĐẠI QUÂM</td>
                      <td>38</td>
                      <td>22</td>
                      <td>3</td>
                      <td>13</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>7 HÙNG BẠT</td>
                      <td>38</td>
                      <td>22</td>
                      <td>3</td>
                      <td>13</td>
                      <td>13</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sự kiện */}
      <section
        id="event-section"
        style={{ backgroundColor: "#E3E1E1", padding: "20px" }}
      >
        <div className="layout-wrapper">
          <h1
            style={{
              fontFamily: "Times New Roman",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            SỰ KIỆN
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <article
                key={i}
                style={{
                  backgroundColor: "white",
                  overflow: "hidden",
                  width: "280px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ padding: "15px" }}>
                  <h2
                    style={{
                      fontFamily: "Times New Roman",
                      fontSize: "1.2em",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    TRỰC TIẾP CHUNG KẾT <br />
                    MÙA GIẢI 2025
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      transform: "translateY(30px)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Times New Roman",
                        fontSize: "80px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      30
                    </span>
                    <div style={{ marginLeft: "10px" }}>
                      <span
                        style={{
                          fontFamily: "Times New Roman",
                          fontSize: "22px",
                          color: "#77777796",
                          fontWeight: "bold",
                        }}
                      >
                        THÁNG MƯỜI
                      </span>
                      <br />
                      <span
                        style={{
                          fontFamily: "Times New Roman",
                          fontSize: "22px",
                          color: "#777",
                          fontWeight: "bold",
                        }}
                      >
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <img
                    src={eventImg}
                    alt="Chung kết mùa giải 2025"
                    style={{ width: "100%", display: "block" }}
                  />

                  {/* Thanh nền dưới ảnh */}
                  <div
                    style={{
                      backgroundColor: "rgb(82, 82, 82)",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px 55px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ cursor: "pointer" }}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ cursor: "pointer" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
