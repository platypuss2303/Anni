// ============================================
// CONFIGURATION FILE
// Cấu hình các thông tin cá nhân và địa điểm
// ============================================

// Ngày bắt đầu yêu nhau (định dạng: YYYY-MM-DD)
const RELATIONSHIP_START_DATE = "2024-05-23"; // Thay đổi ngày này theo ngày bắt đầu của bạn

// Tọa độ trung tâm bản đồ ban đầu (Việt Nam)
const MAP_CENTER = {
  lat: 16.0544, // Latitude (Vĩ độ)
  lng: 108.2022, // Longitude (Kinh độ)
};

// Mức độ zoom ban đầu của bản đồ
const MAP_ZOOM = 12;

// Cấu hình các địa điểm kỷ niệm
// Mỗi địa điểm cần có: title, date, lat, lng, images, story, và isSpecial
const MEMORY_LOCATIONS = [
  {
    id: 1,
    title: "Nơi Chúng Ta Gặp Nhau Lần Đầu",
    date: "23/05/2024",
    lat: 16.0544, // Thay đổi tọa độ thực tế
    lng: 108.2022,
    images: [
      "images/memory1-1.jpg",
      "images/memory1-2.jpg",
      "images/memory1-3.jpg",
    ],
    story:
      "Ngày đó, anh nhớ như in khoảnh khắc đầu tiên nhìn thấy em. Đôi mắt em sáng lên như những vì sao, nụ cười em khiến tim anh đập thình thích. Đó là một buổi chiều mùa hè, nắng vàng và gió nhẹ, nhưng điều khiến anh nhớ nhất chính là sự hiện diện của em. Từ lúc đó, anh biết rằng em là người đặc biệt mà anh đã tìm kiếm bấy lâu nay. ❤️",
    isSpecial: false,
  },
  {
    id: 2,
    title: "Buổi Hẹn Hò Đầu Tiên",
    date: "30/05/2024",
    lat: 16.0544,
    lng: 108.2222,
    images: ["images/memory2-1.jpg", "images/memory2-2.jpg"],
    story:
      "Chuyến đi đầu tiên của chúng ta... Anh còn nhớ anh hồi hộp đến mức không ngủ được đêm hôm trước. Em đẹp lắm em ạ, với chiếc váy màu hồng nhạt và mái tóc được buộc cao. Chúng ta đi dạo bên bờ biển, nói chuyện về những điều nhỏ nhặt trong cuộc sống. Đó là lúc anh nhận ra, bên em, mọi thứ đều trở nên ý nghĩa hơn. 🌸",
    isSpecial: false,
  },
  {
    id: 3,
    title: 'Nơi Anh Nói "Anh Yêu Em"',
    date: "15/06/2024",
    lat: 16.0744,
    lng: 108.2122,
    images: [
      "images/memory3-1.jpg",
      "images/memory3-2.jpg",
      "images/memory3-3.jpg",
    ],
    story:
      'Đây là nơi anh lần đầu tiên mạnh dạn nói với em ba từ "Anh yêu em". Tim anh đập thình thích, tay anh run run, nhưng khi nhìn vào đôi mắt em, anh biết đó là điều đúng đắn nhất anh từng làm. Và khi em cũng nói yêu anh, đó là khoảnh khắc hạnh phúc nhất trong đời anh. Cảm ơn em đã đến bên anh. 💕',
    isSpecial: false,
  },
  {
    id: 4,
    title: "Kỷ Niệm 6 Tháng - Điều Anh Muốn Nói",
    date: "23/11/2024",
    lat: 16.0644,
    lng: 108.2322,
    images: ["images/memory4-1.jpg", "images/memory4-2.jpg"],
    story: "", // Bỏ trống vì sẽ có một bức thư dài riêng
    letter: `Em yêu dấu của anh,

6 tháng đã trôi qua, nhưng với anh, mỗi ngày bên em đều là một món quà quý giá. Anh vẫn nhớ như in ngày đầu tiên gặp em, khoảnh khắc tim anh rung động khi nhìn thấy nụ cười của em. Từ đó đến giờ, em đã làm cuộc sống của anh trở nên tươi đẹp và ý nghĩa hơn rất nhiều.

6 tháng có thể ngắn ngủi, nhưng trong khoảng thời gian đó, chúng ta đã cùng nhau trải qua biết bao kỷ niệm đẹp. Từ những buổi tản bộ dưới ánh hoàng hôn, những lần cùng nhau ăn kem và cười đùa, đến những đêm nói chuyện điện thoại đến tận khuya. Mỗi khoảnh khắc bên em đều là một kỷ niệm mà anh trân trọng giữ gìn trong tim.

Em có biết không, em đã thay đổi anh rất nhiều? Em dạy anh cách yêu thương chân thành, dạy anh cách kiên nhẫn, dạy anh cách trở thành một người đàn ông tốt hơn. Em là nguồn động viên lớn nhất của anh, là ánh sáng dẫn lối cho anh trong những lúc khó khăn.

Anh biết rằng chúng ta còn rất nhiều chặng đường phía trước, còn rất nhiều thử thách sẽ đến. Nhưng anh tin rằng, với tình yêu và sự thấu hiểu của chúng ta, không có gì là không thể vượt qua. Anh hứa sẽ luôn ở bên em, yêu thương em, chăm sóc em và bảo vệ em.

6 tháng chỉ là khởi đầu em ạ. Anh mong chúng ta sẽ có thêm rất nhiều những mốc 6 tháng khác, và rồi sẽ là 1 năm, 2 năm, 10 năm... và mãi mãi. Anh muốn được ở bên em, cùng em trải qua mọi niềm vui và nỗi buồn, cùng em xây dựng một tương lai tươi đẹp.

Em à, cảm ơn em vì đã đến bên anh, vì đã yêu anh và cho anh cơ hội được yêu em. Anh yêu em nhiều lắm, nhiều hơn những gì lời nói có thể diễn tả.

Kỷ niệm 6 tháng này là một cột mốc quan trọng, nhưng anh biết rằng, những điều tốt đẹp nhất vẫn còn ở phía trước đang chờ đợi chúng ta.

Mãi yêu em,
Anh của em ❤️

23/11/2024`,
    isSpecial: true, // Đánh dấu là địa điểm đặc biệt
  },
];

// Cấu hình phong cách bản đồ (Minimalist - Tối giản)
const MAP_STYLES = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7c93a3" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }, { lightness: 13 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [{ color: "#fef9f5" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#f5e9dc" }, { lightness: 5 }],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#f4d1c8" }, { lightness: -25 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#f4e8e1" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [{ color: "#d4e4eb" }, { visibility: "on" }],
  },
];
