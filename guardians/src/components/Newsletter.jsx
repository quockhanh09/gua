import React from "react";
import "../style/App.css";

// Import ảnh
import bgImage from "../assets/img/ice-01-1.png";
import logoFull from "../assets/img/Logo-full.png";
import cd15 from "../assets/img/cd15.png";
import cd16 from "../assets/img/cd16.png";
import cd17 from "../assets/img/cd17.png";
import gamePreview from "../assets/img/image-278.png";
import raceHorse from "../assets/img/race-hose1.png";

function Newsletter() {
  return (
    <>
      {/* PHẦN HERO */}
      <section
        id="portfolio-details"
        className="portfolio-details section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          textAlign: "center",
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.459)",
          backgroundBlendMode: "lighten",
        }}
      >
        <div
          className="container guardian-container"
          data-aos-delay="100"
        >
          <div className="guardian-box">
            <img src={logoFull} alt="Guardian Background" className="guardian-bg" />
          </div>

          <div className="guardian-characters">
            <img src={cd15} alt="Dragon" className="char dragon" />
            <img src={cd16} alt="Horse Guardian" className="char horse" />
            <img src={cd17} alt="Fairy Guardian" className="char fairy" />
          </div>
        </div>
      </section>

      {/* PHẦN TIN TỨC CHÍNH */}
      <section
        className="news-section-guardian"
        style={{ backgroundImage: "linear-gradient(#E3E1E1 100%)" }}
      >
        <div className="news-container-guardian">
          <h1 className="title">
            MÙA GIẢI 2025 BÙNG NỔ:
            <br />
            THỨC TỈNH SỨC MẠNH TIỀM ẨN!
          </h1>
          <p className="meta">decaf | 30/10/2025 10:30</p>

          <p className="intro">
            Đây mà chơi game đi, do dự xếp hạng bét đấy!!!
          </p>

          <p>
            Các chiến binh dũng cảm của [Tên Thế Giới/Vương Quốc], hãy lắng nghe tiếng vọng từ ngàn xưa! Mùa Giải [Tên Mùa
          Giải], mang trong mình ngọn lửa nhiệt huyết và những bí mật chưa được khám phá, đã chính thức khởi động tại
          thế giới rộng lớn của tựa game nhập vai huyền thoại [Tên Game]. Nhà phát hành tận tâm [Tên Nhà Phát Hành] đã
          dày công chuẩn bị một bản cập nhật hoành tráng, hứa hẹn sẽ viết nên một chương mới đầy những trải nghiệm đỉnh
          cao và thử thách nghẹt thở cho hàng triệu người chơi trên toàn thế giới. <br />
           Trái tim của mùa giải mới chính là chương cốt truyện "[Tên Chương Mới]", một câu chuyện sử thi đầy những nút
          thắt bất ngờ và những nhân vật được khắc họa sâu sắc. Người chơi sẽ được đặt chân đến [Mô tả ngắn gọn về vùng
          đất mới trong chương cốt truyện], một vùng đất ẩn chứa những tàn tích cổ xưa và những thế lực đen tối đang
          trỗi dậy. Liệu bạn có đủ dũng cảm để vén màn bí mật về [Nhắc đến một bí ẩn/mối đe dọa chính trong chương cốt
          truyện] và bảo vệ [Tên Thế Giới/Vương Quốc] khỏi bờ vực diệt vong?<br />
          Bên cạnh cốt truyện hấp dẫn, Mùa Giải [Tên Mùa Giải] còn mang đến một làn gió mới cho đấu trường cạnh tranh
          với hệ thống [Tên Hệ Thống Xếp Hạng Mới/Cải Tiến]. Những trận chiến PvP nảy lửa sẽ trở nên kịch tính và chiến
          thuật hơn bao giờ hết, với những phần thưởng độc quyền và danh hiệu cao quý dành cho những người xứng đáng
          nhất. Hãy rèn luyện kỹ năng, phối hợp đồng đội và chứng minh sức mạnh của bạn trên bảng xếp hạng toàn cầu!
          Không chỉ dừng lại ở đó, bản cập nhật lần này còn giới thiệu [Mô tả chi tiết về một hoặc hai tính năng mới
          quan trọng]. Ví dụ: "Một lớp nhân vật hoàn toàn mới, [Tên Lớp Nhân Vật], với bộ kỹ năng độc đáo dựa trên [Mô
          tả ngắn gọn về lối chơi của lớp nhân vật]. Hoặc: "Hệ thống chế tạo trang bị [Tên Hệ Thống] được nâng cấp, cho
          phép người chơi tùy chỉnh vũ khí và áo giáp với những thuộc tính đặc biệt, tạo ra những build độc nhất vô
          nhị." <br />
          Ngoài ra, hàng loạt sự kiện in-game hấp dẫn cũng sẽ diễn ra xuyên suốt mùa giải, từ những thử thách PvE đầy
          cam go đến những minigame thú vị với những phần quà giá trị. Đừng bỏ lỡ cơ hội sở hữu những trang phục giới
          hạn, vật phẩm quý hiếm và những biểu tượng độc quyền chỉ có trong Mùa Giải [Tên Mùa Giải].
          Hãy chuẩn bị tinh thần cho một cuộc phiêu lưu hoành tráng và đầy bất ngờ! Mùa Giải [Tên Mùa Giải] của [Tên
          Game] đã chính thức mở ra cánh cửa chào đón tất cả các nhà thám hiểm. Truy cập ngay trang chủ chính thức tại
          [Link Trang Chủ] hoặc theo dõi fanpage [Link Fanpage] để cập nhật những thông tin mới nhất và tham gia vào
          cộng đồng sôi động của chúng ta! Vận mệnh của [Tên Thế Giới/Vương Quốc] nằm trong tay bạn!
          </p>

          <img src={gamePreview} alt="Game preview" className="game-img" />

          <p>
           Trung tâm của sự kiện lần này chính là chương sử thi "[Tên Chương Mới]", một bức tranh hoành tráng được vẽ nên
          từ những mảnh ghép của quá khứ và tương lai. Người chơi sẽ hóa thân thành những nhà thám hiểm dũng cảm, đặt
          chân lên [Mô tả chi tiết hơn về vùng đất mới, ví dụ: "vùng đất băng giá vĩnh cửu Icewind Peaks, nơi những lâu
          đài băng sừng sững ẩn chứa những bí mật lạnh giá, hoặc sa mạc rực lửa Sunken Sands, nơi những tàn tích của một
          nền văn minh đã lụi tàn đang chờ đợi được khám phá"]. Tại đây, họ sẽ phải đối mặt với [Mô tả chi tiết hơn về
          kẻ thù chính/mối đe dọa, ví dụ: "lãnh chúa bóng tối Malazar, kẻ đang âm mưu triệu hồi những thế lực tà ác từ
          chiều không gian khác, hoặc một chủng tộc quái vật cổ xưa trỗi dậy từ giấc ngủ ngàn năm, đe dọa nuốt chửng mọi
          sự sống"]. Những nhiệm vụ cam go, những cuộc chạm trán định mệnh với những nhân vật NPC được xây dựng tỉ mỉ,
          và những lựa chọn đạo đức khó khăn sẽ thử thách lòng dũng cảm và trí tuệ của mỗi người chơi.<br />
          Đấu trường vinh quang cũng chào đón những chiến binh ưu tú nhất với hệ thống [Mô tả chi tiết hơn về hệ thống
          xếp hạng, ví dụ: "hệ thống xếp hạng Elo cải tiến với những bậc rank mới và cơ chế ghép trận công bằng hơn,
          hoặc
          giải đấu арена hàng tuần với những quy tắc đặc biệt và những phần thưởng danh giá, bao gồm cả những trang bị
          huyền thoại chỉ dành cho những nhà vô địch"]. Sự cạnh tranh sẽ trở nên gay cấn hơn bao giờ hết, đòi hỏi người
          chơi không chỉ có kỹ năng cá nhân xuất sắc mà còn cần sự phối hợp ăn ý với đồng đội để chinh phục đỉnh cao của
          bảng xếp hạng.
          </p>

          <img src={gamePreview} alt="Game preview" className="game-img" />

          <p>
             Điểm nhấn không thể bỏ qua của Mùa Giải [Tên Mùa Giải] chính là sự ra mắt của [Mô tả cực kỳ chi tiết về một
          tính năng mới quan trọng nhất, ví dụ: "Lớp nhân vật [Tên Lớp Nhân Vật], một bậc thầy sử dụng sức mạnh nguyên
          tố cổ xưa, có khả năng điều khiển [Liệt kê các nguyên tố/khả năng chính]. Với lối chơi linh hoạt, vừa có thể
          gây sát thương diện rộng, vừa có khả năng hỗ trợ đồng đội bằng những phép thuật mạnh mẽ, [Tên Lớp Nhân Vật]
          hứa hẹn sẽ làm thay đổi meta của game và mang đến những chiến thuật chiến đấu hoàn toàn mới. Người chơi có thể
          mở khóa lớp nhân vật này thông qua [Cách mở khóa: hoàn thành chuỗi nhiệm vụ đặc biệt, đạt cấp độ nhất định,
          hoặc thông qua sự kiện in-game]."] Hoặc: "**Hệ thống [Tên Hệ Thống] cho phép người chơi không chỉ chế tạo mà
          còn [Mô tả sâu hơn về hệ thống, ví dụ: "tinh luyện, khảm nạm, và cường hóa trang bị lên những cấp độ chưa từng
          có, mở khóa những thuộc tính ẩn và những hiệu ứng đặc biệt. Người chơi có thể thu thập nguyên liệu từ những
          vùng đất khắc nghiệt nhất và sử dụng những công thức bí truyền để tạo ra những món trang bị huyền thoại, mang
          đậm dấu ấn cá nhân của mình"]."<br />
          Xuyên suốt Mùa Giải [Tên Mùa Giải], vô số sự kiện đặc biệt sẽ diễn ra, mang đến những thử thách độc đáo và
          những phần thưởng giá trị. Hãy sẵn sàng tham gia vào [Liệt kê một vài sự kiện cụ thể và hấp dẫn, ví dụ: "sự
          kiện săn boss thế giới 'Wrath of the Ancient Dragon' với những chiến lợi phẩm cực kỳ quý hiếm, chuỗi nhiệm vụ
          hàng ngày 'Whispers of the Ancients' hé lộ những bí mật về cốt truyện, hoặc lễ hội 'Harvest of Heroes' với
          những minigame vui nhộn và những phần quà bất ngờ"].<br />
          Mùa Giải [Tên Mùa Giải] không chỉ là một bản cập nhật, mà là một cuộc cách mạng, một chương mới đầy hứa hẹn
          trong летопис của [Tên Game]. Hãy triệu tập bạn bè, mài gươm, rèn giáp và sẵn sàng cho một hành trình huyền
          thoại, nơi mỗi quyết định sẽ định hình số phận của [Tên Thế Giới/Vương Quốc]. Cánh cổng đến với những thử
          thách và vinh quang đang rộng mở. Bạn đã sẵn sàng bước qua?<br />
          Truy cập ngay [Link Trang Chủ], theo dõi [Link Fanpage], và tham gia cộng đồng [Link Cộng Đồng Discord/Forum]
          để không bỏ lỡ bất kỳ thông tin quan trọng và cơ hội nhận những phần quà hấp dẫn! Huyền thoại đang chờ bạn
          viết nên!
          </p>

          {/* COMMENT BOX */}
          <div className="comment-section-guardian">
            <div className="comment-header-guardian">
              <h2>BÌNH LUẬN</h2>
              <div className="auth-links-guardian">
                <a href="dang-nhap.html">👤 Đăng nhập</a>
                <a href="dang-ky.html">🔑 Đăng ký</a>
              </div>
            </div>

            <div className="comment-box-guardian">
              <textarea placeholder="Nội dung bình luận..."></textarea>
            </div>

            <div className="comment-footer-guardian">
              <button className="comment-btn-guardian">
                GỬI BÌNH LUẬN →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TIN LIÊN QUAN */}
      <section style={{ backgroundColor: "white", padding: "20px" }}>
        <div className="block-section" style={{ backgroundColor: "white" }}>
          <h2 className="block-title">TIN LIÊN QUAN</h2>

          <div className="block-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <article className="block-card" key={i}>
                <img src={raceHorse} alt="news" className="block-thumb" />
                <div className="block-content">
                  <div className="block-meta">Race98 - 03 June 2023</div>
                  <h5 className="block-heading">
                    MỞ KHÓA LINH THÚ MÙA GIẢI MỚI 2025
                  </h5>
                  <p className="block-text">
                    Khám phá thế giới huyền bí và thu phục những linh thú mạnh
                    mẽ. Mỗi loài mang trong mình sức mạnh nguyên tố và khả năng
                    đặc biệt...
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
