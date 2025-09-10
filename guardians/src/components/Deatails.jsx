import { useState, useEffect } from "react";
import "../style/App.css";
import "../style/img-3d.css";
import bgDe from "../assets/img/004-01_Character.png";
// ===== Import ảnh Nhân Vật =====
import canonImg from "../assets/img/character=canon, state=zoom.png";
import holyImg from "../assets/img/character=holy, state=zoom.png";
import warriorImg from "../assets/img/character=warrior, state=zoom.png";
import assassinImg from "../assets/img/character=assasin, state=zoom.png";
import archerImg from "../assets/img/character=archer, state=zoom.png";
import mageImg from "../assets/img/character=mage, state=zoom.png";
// ===== Import ảnh Realm/Feature/Item/Money =====
import npcRealmImg from "../assets/img/image-287.png";
import petRealmImg from "../assets/img/Picture1.png";
import bossRealmImg from "../assets/img/Picture2.png";
import guildRealmImg from "../assets/img/Picture3.png";
import mapImg from "../assets/img/Picture4.png";
import dungeonImg from "../assets/img/Picture6.png";
import forgeImg from "../assets/img/Picture7.png";
import questImg from "../assets/img/Picture8.png";
//
import equipment1 from "../assets/img/Picture12.png";
import equipment2 from "../assets/img/Picture13.png";
import equipment3 from "../assets/img/Picture14.png";
import equipment4 from "../assets/img/Picture15.png";
import equipment5 from "../assets/img/Picture16.png";
import equipment6 from "../assets/img/Picture17.png";
import equipment7 from "../assets/img/Picture18.png";
import equipment8 from "../assets/img/Icon_Weapon_PC01_000_1.png";
import equipment9 from "../assets/img/Icon_Weapon_PC02_001_0.png";
import equipment10 from "../assets/img/Icon_Weapon_PC03_000_1.png";
import equipment11 from "../assets/img/Icon_Weapon_PC04_000_4.png";
import equipment12 from "../assets/img/Icon_Weapon_PC05_000_1.png";
import equipment13 from "../assets/img/Icon_Weapon_PC06_000_1.png";
//
import gemRed from "../assets/img/Icon_Gem_Red_001.png";
import moneyGold from "../assets/img/Picture9.png";
import moneyDiamondRed from "../assets/img/Picture10.png";
import moneyDiamondBlue from "../assets/img/Picture11.png";
import gem4 from "../assets/img/Icon_Gem_Brown_001.png";
import gem5 from "../assets/img/Icon_Gem_Olive_001.png";
import gem6 from "../assets/img/Icon_Gem_Yellow_001.png";
import gem7 from "../assets/img/Icon_Gem_Orange_001.png";
import gem8 from "../assets/img/Icon_Gem_SkyBlue_001.png";
import gem9 from "../assets/img/Icon_Gem_Violet_001.png";
import gem10 from "../assets/img/Icon_Gem_AddCrimson_001.png";
import gem11 from "../assets/img/Icon_Gem_AddLightPurple_001.png";
import gem12 from "../assets/img/Icon_Gem_AddLightRed_001.png";
import gem13 from "../assets/img/Icon_Gem_AddGreen_001.png";
import gem14 from "../assets/img/Icon_Gem_AddMint_001.png";
import gem15 from "../assets/img/Icon_Gem_AddNavyBlue_001.png";
import gem16 from "../assets/img/Icon_Gem_AddSkyBlue_001.png";
//
import consumables1 from "../assets/img/Icon_Consume_HpPotion_002.png";
import consumables2 from "../assets/img/Icon_Consume_Enchant_WeaponStone_001.png";
import consumables3 from "../assets/img/Icon_Consume_Enchant_JewelStone_001.png";
import consumables4 from "../assets/img/Icon_Consume_Enchant_ArmorStone_001.png";
import consumables5 from "../assets/img/Icon_Mat_CosFabric_001.png";
import consumables6 from "../assets/img/Icon_Consume_PercentUp_001.png";
import consumables7 from "../assets/img/Icon_Consume_SkillResetScroll_001.png";
import consumables8 from "../assets/img/Icon_Consume_WarpScroll_001.png";
import consumables9 from "../assets/img/Icon_Mat_BossSet_PC01_01.png";
import consumables10 from "../assets/img/Icon_Mat_BossSet_PC01_02.png";
import consumables11 from "../assets/img/Icon_Mat_BossSet_PC01_03.png";
import consumables12 from "../assets/img/Icon_Mat_BossSet_PC01_04.png";
import consumables13 from "../assets/img/Icon_Mat_CosFeather_001.png";
import consumables14 from "../assets/img/Icon_Soulstone_Pet_10.png";
import consumables15 from "../assets/img/Icon_RandBoxGuardian_002.png";
import consumables16 from "../assets/img/Icon_RandAcc_001.png";
//
import skin1 from "../assets/img/Icon_CosBack_AngelWing_001_2.png";
import skin2 from "../assets/img/Icon_CosBack_BackPack_001.png";
import skin3 from "../assets/img/Icon_CosBack_PumpkinHead_001.png";
import skin4 from "../assets/img/Icon_CosBack_RabbitLilac_001.png";
import skin5 from "../assets/img/Icon_CosBody_PC01_905_2.png";
import skin6 from "../assets/img/Icon_CosBody_PC02_905.png";
import skin7 from "../assets/img/Icon_CosBody_PC03_907.png";
import skin8 from "../assets/img/Icon_CosBody_PC04_908_2.png";
import skin9 from "../assets/img/Icon_CosBody_PC04_952_2.png";
import skin10 from "../assets/img/Icon_CosBody_PC06_953.png";
import skin11 from "../assets/img/Icon_CosWeapon_PC01_906.png";
import skin12 from "../assets/img/Icon_CosWeapon_PC02_1001_2.png";
import skin13 from "../assets/img/Icon_CosWeapon_PC03_905_2.png";
import skin14 from "../assets/img/Icon_CosWeapon_PC04_901_2.png";
import skin15 from "../assets/img/Icon_CosWeapon_PC05_908_2.png";
import skin16 from "../assets/img/Icon_CosWeapon_PC06_907_2.png";


const characters = {
  canon: {
    story:
      "Có kiến thức sâu rộng về máy móc và văn minh nhờ ảnh hưởng của ông nội, một kỹ sư cung đình trong thời kỳ hoàng kim của Vương Quốc Diot. Dù có vẻ ngoài đáng yêu và tính cách sôi nổi, cô lại sở hữu hỏa lực khủng khiếp trong chiến đấu. Có tin đồn rằng cô tham gia trận chiến để thử nghiệm vũ khí mạnh mẽ mới của mình.",
    role:
      "Tấn công tầm xa, gây sát thương lớn bằng bom mạnh mẽ và sử dụng các loại thuốc hồi phục đặc chế.",
    weapon: "Bom và pháo tầm xa",
  },
  holy: {
    story:
      "Là một tu sĩ của Đại Thần Điện Yulla, thuộc Liên Minh Thần Thánh Asgard. Với đức tin và công lý vững chắc, Thánh Kỵ Sĩ luôn tiên phong trong mọi trận chiến để thanh tẩy thế giới khỏi những thế lực đen tối sau khi chứng kiến những thay đổi bất thường của lục địa",
    role: "Cận chiến, tấn công mạnh mẽ, có khả năng bảo vệ đồng đội",
    weapon: "Đại kiếm",
  },
  warrior: {
    story:
      "Sinh ra từ liên minh bộ tộc dã man, Chiến Binh từng có ước mơ trở thành học giả khi còn nhỏ. Tuy nhiên, sau những biến cố lớn của thế giới, anh ta đã cầm vũ khí và tham gia chiến trường để bảo vệ bộ tộc và những người thân yêu.",
    role:
      "Tanker cận chiến, có khả năng chịu đựng mọi đòn tấn công của kẻ địch, bảo vệ đồng đội.",
    weapon: "Khiên và rìu",
  },
  assassin: {
    story:
      "Xuất thân từ tổ chức sát thủ bí ẩn của Vương Quốc Kaidan, Sát Thủ từng hoạt động như một mật vụ và được đồn đoán là một thợ săn tiền thưởng lạnh lùng. Dù có vẻ ngoài khắc kỷ, họ lại nổi tiếng là những người luôn giữ chữ tín và sẵn sàng xông pha tiền tuyến.",
    role: "Cận chiến, nhanh nhẹn, khả năng gây sát thương cao trong chớp nhoáng.",
    weapon: "Song kiếm và song đao",
  },
  archer: {
    story:
      "Sử dụng các kỹ năng đa dạng và nhanh nhẹn để gây rối loạn chiến trường, bao gồm các kỹ năng diện rộng bắn nhiều mũi tên và kỹ năng sát thương lớn gây sát thương chí mạng.",
    role:
      "Tấn công vật lý tầm xa, linh hoạt và nhanh nhẹn, né tránh đòn tấn công của kẻ thù và gây sát thương bằng các đòn đánh khó lường.",
    weapon: "Cung",
  },
  mage: {
    story:
      "Đến từ vùng biên của Đế Quốc Ma Đạo, một khu vực đã bị hố đen nuốt chửng. Pháp Sư thông minh từ nhỏ, sớm nắm vững kiến thức về nguyên tố và phép thuật, luôn dẫn dắt những người cùng lứa. Sau khi tự mình tu luyện trên dãy núi Valion, cô nhận ra những thay đổi của thế giới và tự nguyện tham gia chiến trường.",
    role:
      "Tấn công tầm xa, gây sát thương diện rộng bằng phép thuật nguyên tố và có khả năng cản trở hành động của kẻ địch.",
    weapon: "Phép thuật nguyên tố",
  },
};

const sections = {
  realm: [
    { id: "npc-realm", label: "NPC", img: npcRealmImg, text: "Với gần 400 nhân vật, hệ thống NPC (Non-Player Character) trong Vệ Thần - The Guardians được xây dựng đa dạng và phong phú, đóng vai trò không thể thiếu trong việc định hình trải nghiệm của người chơi, từ việc hỗ trợ vận hành các tính năng cốt lõi đến việc làm sâu sắc thêm thế giới và cốt truyện game" },
    { id: "pet-realm", label: "LINH THÚ", img: petRealmImg, text: "Linh thú là một trong những điểm cốt lõi và độc đáo của Vệ Thần - The Guardians, mang lại chiều sâu chiến thuật và hỗ trợ đa dạng cho người chơi. Linh thú là những Vệ thần đồng hành mạnh mẽ, đóng vai trò như một người bạn chiến đấu trung thành và là nguồn sức mạnh bổ trợ quan trọng cho nhân vật chính. Mỗi Linh thú sở hữu ngoại hình, bộ kỹ năng, và thuộc tính riêng biệt, phù hợp với nhiều phong cách chơi và chiến thuật khác nhau." },
    { id: "boss-realm", label: "QUÁI & TRÙM", img: bossRealmImg, text: "Mỗi khu vực có các loại quái vật đặc trưng với cấp độ và sức mạnh tương ứng, yêu cầu người chơi phải phát triển nhân vật để có thể đối phó.Trùm Hầm ngục Là những kẻ địch mạnh mẽ xuất hiện ở cuối mỗi Hầm ngục, yêu cầu người chơi phải có chiến thuật rõ ràng và sức mạnh đủ lớn để đánh bại. Các Hầm ngục như Rừng Hein, Vùng Đất Ngập Lụt, Vùng Đầm Lầy Ô Nhiễm, và Lối Đi Đến Pháo Đài đều có những Trùm riêng biệt với bộ kỹ năng độc đáo và sức chống chịu cao." },
    { id: "guild-realm", label: "BANG HỘI", img: guildRealmImg, text: "Bang hội là một tính năng xã hội và cộng đồng cốt lõi, nơi người chơi có thể tập hợp, hợp tác và cùng nhau phát triển, mang lại nhiều lợi ích và trải nghiệm độc đáo. Thành viên thuộc Bang Hội có thể xem danh sách bang hội, các thông báo bang hội, và thông tin trạng thái của các thành viên khác. Ngoài ra còn có thể đóng góp Vàng và Điểm Danh vọng để tăng điểm kinh nghiệm Bang hội (Guild EXP)." },
  ],
  feature: [
    { id: "map-box", label: "BẢN ĐỒ", img: mapImg, text: "Trò chơi có một hệ thống bản đồ phong phú, bao gồm các khu vực chính và các Hầm ngục đa dạng. Các khu vực chính trên bản đồ thế giới bao gồm: Vương Quốc Diot, Làng Gió Đông, Rừng Hein, Vùng Đất Ngập Lụt, Vùng Đầm Lầy Ô Nhiễm, Lối Đi Đến Pháo Đài, Hẻm Núi Gale, Khu Rừng Ẩn Giấu, Thành Astrid, Núi Tuyết Valion, Thành Diot,và các loại Hầm ngục khác nhau." },
    { id: "dungeon-box", label: "HẦM NGỤC", img: dungeonImg, text: "Hầm ngục thông thường: Đây là các Hầm ngục cơ bản, được tích hợp trong các khu vực chính của bản đồ thế giới. Người chơi sẽ vượt qua các đấu trường và đối mặt với các Trùm Hầm ngục. Hầm ngục anh hùng: Đây là phiên bản khó hơn của các Hầm ngục thông thường, mang đến thử thách cao hơn và phần thưởng giá trị hơn, bao gồm các vật phẩm hiếm, những khu vực tương tự như Hầm ngục thông thường, tuy nhiên các Trùm sẽ trở nên mạnh và khó đánh bại hơn." },
    { id: "forge-box", label: "LÒ RÈN", img: forgeImg, text: "Hệ thống Lò Rèn là một trong những tính năng cốt lõi nhất trong Vệ Thần - The Guardians, nơi người chơi có thể nâng cấp, tùy biến và tối ưu hóa trang bị của mình để tăng cường sức mạnh chiến đấu. Người chơi có thể truy cập Lò rèn thông qua NPC Berman (Đại Lý) trong làng hoặc thông qua menu nhanh “Lò rèn”." },
    { id: "quest-box", label: "NHIỆM VỤ", img: questImg, text: "Hệ thống nhiệm vụ có mục đích giúp người chơi hứng thú hơn với nội dung của trò chơi, luyện tập thuần thục các thao tác, trải nghiệm gần gũi với các sự kiện để dễ dàng khám phá những điểm đặc biệt và thú vị của trò chơi. Hệ thống nhiệm vụ cho các nhân vật được thiết kế sẵn trong trò chơi đưa ra trong suốt quá trình chơi, khi người chơi đạt đến một cấp độ hoặc điều kiện nhất định thì người mới có thể mở khóa các cấp nhiệm vụ mới." },
  ],
  item: [
    {
      id: "equipment-box",
      label: "TRANG BỊ",
      items: [
        { img: equipment1, title: "Áo Giáp", desc: "Tăng phòng thủ và máu cho nhân vật" },
        { img: equipment2, title: "Thắt Lưng", desc: "Tăng phòng thủ và máu cho nhân vật" },
        { img: equipment3, title: "Găng tay", desc: "Tăng phòng thủ và tỷ lệ chí mạng cho nhân vật" },
        { img: equipment4, title: "Giày", desc: "Tăng phòng thủ và máu cho nhân vật" },
        { img: equipment5, title: "Dây chuyền", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment6, title: "Hoa tai", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment7, title: "Nhẫn", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment8, title: "Rìa", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment9, title: "Cung", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment10, title: "Cầu ma thuật", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment11, title: "Pháo", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment12, title: "Kiếm", desc: "Tăng sát thương lên Quái vật thường" },
        { img: equipment13, title: "Song đao", desc: "Tăng sát thương lên Quái vật thường" },
      ],
    },
    {
      id: "gem-box",
      label: "ĐÁ QUÝ",
      items: [
        { img: gemRed, title: "Hồng Ngọc", desc: "Tăng chỉ số nhân vật" },
        { img: gem4, title: "Hổ Phách", desc: "Tăng chỉ số nhân vật" },
        { img: gem5, title: "Olivine", desc: "Tăng chỉ số nhân vật" },
        { img: gem6, title: "Hoàng Ngọc", desc: "Tăng chỉ số nhân vật" },
        { img: gem7, title: "Thạch Anh Vàng", desc: "Tăng chỉ số nhân vật" },
        { img: gem8, title: "Ngọc Mắt Mèo", desc: "Tăng chỉ số nhân vật" },
        { img: gem9, title: "Thạch Anh Tím", desc: "Tăng chỉ số nhân vật" },
        { img: gem10, title: "Kunzite", desc: "Tăng chỉ số nhân vật" },
        { img: gem11, title: "Fluorite", desc: "Tăng chỉ số nhân vật" },
        { img: gem12, title: "Spinel", desc: "Tăng chỉ số nhân vật" },
        { img: gem13, title: "Citrine", desc: "Tăng chỉ số nhân vật" },
        { img: gem14, title: "Verdelite", desc: "Tăng chỉ số nhân vật" },
        { img: gem15, title: "Kyanite", desc: "Tăng chỉ số nhân vật" },
        { img: gem16, title: "Topaz", desc: "Tăng chỉ số nhân vật" },
      ],
    },
    {
      id: "consumables",
      label: "TIÊU HAO PHẨM",
      items: [
        { img: consumables1, title: "Máu", desc: "Hồi phục máu cho nhân vật" },
        { img: consumables2, title: "Đá Cường Hóa Vũ Khí", desc: "Sử dụng để cường hóa vũ khí" },
        { img: consumables3, title: "Đá Cường Hóa Giáp", desc: "Sử dụng để cường hóa giáp" },
        { img: consumables4, title: "Đá Cường Hóa Phụ Kiện", desc: "Sử dụng để cường hóa phụ kiện" },
        { img: consumables5, title: "Vải Ma Thuật", desc: "Nguyên liệu chế tạo trang phục đặc biệt" },
        { img: consumables6, title: "Thẻ Tăng Tỷ Lệ Cường Hóa Cấp Thấp Nhất", desc: "Tăng tỷ lệ thành công của việc cường hóa khi sử dụng" },
        { img: consumables7, title: "Sắc Lệnh Phục Hồi Kỹ Năng", desc: "Khôi phục toàn bộ điểm kỹ năng đã sử dụng" },
        { img: consumables8, title: "Sắc Lệnh Phục Hồi Di Chuyển", desc: "Tăng chỉ số nhân vật" },
        { img: consumables9, title: "Bảo Châu Hắc Vân Vũ", desc: "Nguyên liệu chế tác vật phẩm bộ Hắc Vân Vũ" },
        { img: consumables10, title: "Bảo Châu Thần Thú", desc: "Nguyên liệu chế tác vật phẩm bộ Thần Thú" },
        { img: consumables11, title: "Bảo Châu Giáp Hạng Nặng", desc: "Nguyên liệu chế tác vật phẩm bộ Giáp Hạng Nặng" },
        { img: consumables12, title: "Bảo Châu Vương Quốc Kỵ Sĩ Trưởng", desc: "Nguyên liệu chế tác vật phẩm bộ Kỵ Sĩ Vương Quốc Trưởng" },
        { img: consumables13, title: "Lông Vũ Linh Hồn", desc: "Nguyên liệu chế tạo trang phục đặc biệt" },
        { img: consumables14, title: "Đá Kĩ Năng", desc: "Sử dụng để nhận 1 điểm kỹ năng" },
        { img: consumables15, title: "Hòm Triệu Hồi", desc: "Mở ra ngẫu nhiên các loại linh thú" },
        { img: consumables16, title: "Hòm Đá Qúy", desc: "Mở ra các loại đá quý" },
      ],
    },
    {
      id: "skin",
      label: "TRANG PHỤC",
      items: [
        { img: skin1, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin2, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin3, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin4, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin5, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin6, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin7, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin8, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin9, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin10, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin11, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin12, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin13, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin14, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin15, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
        { img: skin16, title: "Trang phục", desc: "Tăng chỉ số nhân vật" },
      ],
    }
  ],
};

function GameContent() {
  const [locked, setLocked] = useState(null);   // nhân vật đã click (khóa)
  const [hovered, setHovered] = useState(null); // nhân vật đang hover
  const [active, setActive] = useState({
    realm: sections.realm[0].id,
    feature: sections.feature[0].id,
    item: sections.item[0].id,
  });

  // Khi click nhân vật
const handleSelectChar = (charKey) => {
  if (locked === charKey) {
    // Nếu đang click lại chính nhân vật đã khóa => hủy chọn
    setLocked(null);
    setHovered(null); // reset luôn hover cho chắc
  } else {
    // Ngược lại thì khóa nhân vật mới
    setLocked(charKey);
  }
};

  // Khi hover nhân vật
  const handleHoverChar = (charKey) => {
    if (!locked) {
      setHovered(charKey); // chỉ hiển thị hover nếu chưa khóa
    }
  };

useEffect(() => {
    const items = document.querySelectorAll(
      ".gu-item, .gu-item-2, .gu-item-3, .gu-item-4, .gu-item-5, .gu-item-6"
    );

    items.forEach((item) => {
      const charKey = item.getAttribute("data-char");

      const onEnter = () => handleHoverChar(charKey);
      const onClick = () => handleSelectChar(charKey);

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("click", onClick);

      // cleanup đúng cách
      return () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("click", onClick);
      };
    });
  }, [locked]);

 const currentChar = locked || hovered;

  const handleSwitch = (group, id) => {
    setActive((prev) => ({ ...prev, [group]: id }));
  };

  return (
   <section
      id="service-details"
      className="service-details section"
      style={{ padding: "30px 0", backgroundImage: `url(${bgDe})` , backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Nhân Vật Chính */}
      <div style={{ marginTop: "140px" }}>
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <h2 className="gu-title-box">NHÂN VẬT CHÍNH</h2>
        </div>

       <div className="gu-wrapper">
  <div className="gu-list">
    {/* Canon */}
    <div
      className={`gu-item ${locked === "canon" ? "active" : ""}`}
      data-char="canon"
    >
      <div className="gu-card">
        <img src={canonImg} alt="canon" />
      </div>
      <div className="gu-name-floor">CANON SHOOTER</div>
    </div>

    {/* Holy */}
    <div
      className={`gu-item-2 ${locked === "holy" ? "active" : ""}`}
      data-char="holy"
    >
      <div className="gu-card-2">
        <img src={holyImg} alt="holy" />
      </div>
      <div className="gu-name-floor">HOLY KNIGHT</div>
    </div>

    {/* Warrior */}
    <div
      className={`gu-item-3 ${locked === "warrior" ? "active" : ""}`}
      data-char="warrior"
    >
      <div className="gu-card-3">
        <img src={warriorImg} alt="warrior" />
      </div>
      <div className="gu-name-floor">WARRIOR</div>
    </div>

    {/* Assassin */}
    <div
      className={`gu-item-4 ${locked === "assassin" ? "active" : ""}`}
      data-char="assassin"
    >
      <div className="gu-card-4">
        <img src={assassinImg} alt="assassin" />
      </div>
      <div className="gu-name-floor">ASSASSIN</div>
    </div>

    {/* Archer */}
    <div
      className={`gu-item-5 ${locked === "archer" ? "active" : ""}`}
      data-char="archer"
    >
      <div className="gu-card-5">
        <img src={archerImg} alt="archer" />
      </div>
      <div className="gu-name-floor">ARCHER</div>
    </div>

    {/* Mage */}
    <div
      className={`gu-item-6 ${locked === "mage" ? "active" : ""}`}
      data-char="mage"
    >
      <div className="gu-card-6">
        <img src={mageImg} alt="mage" />
      </div>
      <div className="gu-name-floor">MAGE</div>
    </div>
  </div>
</div>


        {currentChar && (
          <div id="guInfo" className="gu-thongtin">
            <h3>CỐT TRUYỆN</h3>
            <p>{characters[currentChar].story}</p>
            <h3>VAI TRÒ</h3>
            <p>{characters[currentChar].role}</p>
            <h3>VŨ KHÍ</h3>
            <p>{characters[currentChar].weapon}</p>
          </div>
        )}
      </div>

      <div
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: '#EDD9B9',
          margin: '70px auto',
        }}
      />

      
      {/* ===== Realm ===== */}
      <div className="gate-container" data-group="realm">
        <div className="gate-switcher">
          {sections.realm.map((sec) => (
            <button
              key={sec.id}
              className={`gate-switch ${active.realm === sec.id ? "chosen" : ""}`}
              onClick={() => handleSwitch("realm", sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {sections.realm.map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className={`realm-box ${active.realm === sec.id ? "active" : ""}`}
            style={{ display: active.realm === sec.id ? "flex" : "none" }}
          >
            <div className="realm-image">
              <img src={sec.img} alt={sec.label} />
            </div>
            <div className="realm-text">
              <p>{sec.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: '#EDD9B9',
          margin: '70px auto',
        }}
      />
      {/* ===== Feature ===== */}
      <div className="gate-container" data-group="feature">
        <div className="gate-switcher">
          {sections.feature.map((sec) => (
            <button
              key={sec.id}
              className={`gate-switch ${active.feature === sec.id ? "chosen" : ""}`}
              onClick={() => handleSwitch("feature", sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {sections.feature.map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className={`realm-box ${active.feature === sec.id ? "active" : ""}`}
            style={{ display: active.feature === sec.id ? "flex" : "none" }}
          >
            <div className="realm-image">
              <img src={sec.img} alt={sec.label} />
            </div>
            <div className="realm-text">
              <p>{sec.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: '#EDD9B9',
          margin: '70px auto',
        }}
      />
      {/* ===== Item ===== */}
      <div className="gate-container" data-group="item">
        <div className="gate-switcher">
          {sections.item.map((sec) => (
            <button
              key={sec.id}
              className={`gate-switch ${active.item === sec.id ? "chosen" : ""}`}
              onClick={() => handleSwitch("item", sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {sections.item.map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className={`realm-box ${active.item === sec.id ? "active" : ""}`}
            style={{ display: active.item === sec.id ? "flex" : "none" }}
          >
            <div className="item-grid">
              {sec.items?.map((it, idx) => (
                <div key={idx} className="item-card">
                  <img src={it.img} alt={it.title} />
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: '#EDD9B9',
          margin: '70px auto',
        }}
      />
      {/* ===== Money ===== */}
      <div className="money-wrap">
        <h2 className="money-title">TIỀN TỆ</h2>
        <div className="money-grid">
          <div className="money-card">
            <img src={moneyGold} alt="Vàng" />
            <h3 className="money-head">VÀNG</h3>
            <p className="money-text">Đơn vị tiền tệ dùng để mua các vật phẩm trong Cửa hàng.</p>
            <p className="money-text">Nhận thưởng từ nhiệm vụ, điểm danh hàng ngày, sự kiện.</p>
          </div>
          <div className="money-card">
            <img src={moneyDiamondRed} alt="Kim Cương Đỏ" />
            <h3 className="money-head">KIM CƯƠNG ĐỎ</h3>
            <p className="money-text">Đơn vị tiền tệ dùng để mua các vật phẩm trong Cửa hàng.</p>
            <p className="money-text">Nạp tiền, nhận thưởng sự kiện.</p>
          </div>
          <div className="money-card">
            <img src={moneyDiamondBlue} alt="Kim Cương Xanh" />
            <h3 className="money-head">KIM CƯƠNG XANH</h3>
            <p className="money-text">Đơn vị tiền tệ dùng để mua các vật phẩm trong Cửa hàng.</p>
            <p className="money-text">Nhận thưởng từ nhiệm vụ, điểm danh hàng ngày, sự kiện.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameContent;








