// ============================================
// CONFIGURATION FILE
// Cấu hình các thông tin cá nhân và địa điểm
// ============================================

// Ngày bắt đầu yêu nhau (định dạng: YYYY-MM-DD)
const RELATIONSHIP_START_DATE = "2024-05-23";

// Tọa độ trung tâm bản đồ ban đầu
const MAP_CENTER = {
  lat: 13.8039,
  lng: 109.219,
};

// Mức độ zoom ban đầu của bản đồ
const MAP_ZOOM = 8;

// Cấu hình các địa điểm kỷ niệm
const MEMORY_LOCATIONS = [
  {
    id: 1,
    title: "Nơi Chúng Mình Gặp Nhau",
    date: "27/01/2024",
    lat: 13.80390945153792,
    lng: 109.21904657838888,
    images: ["images/mem1_1.jpg", "images/mem1_2.jpg"],
    story:
      "Ngày đó, anh nhớ như in khoảnh khắc đầu tiên nhìn thấy em. Đôi mắt em sáng lên như những vì sao, nụ cười em khiến tim anh đập thình thích. Đó là một buổi chiều mùa hè, nắng vàng và gió nhẹ...",
    isSpecial: false,
  },
  {
    id: 2,
    title: "Leo núi",
    date: "",
    lat: 13.733768466041461,
    lng: 109.21383402378592,
    images: [],
    story: "Leo núi cùng nhau hehe",
    isSpecial: false,
  },
  {
    id: 3,
    title: "Chuyến đi Đà Nẵng",
    date: "",
    lat: 15.968978720346735,
    lng: 108.2604835988369,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 4,
    title: "Chuyến đi trip",
    date: "",
    lat: 13.837147271604849,
    lng: 108.93010649829213,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 5,
    title: "Chuyến đi Quân sự",
    date: "",
    lat: 14.030128713915614,
    lng: 109.05674362014585,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 6,
    title: "FUV 1st exil",
    date: "",
    lat: 13.769603454430722,
    lng: 109.23436198466528,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 7,
    title: "Đi nhậu cùng nhau",
    date: "",
    lat: 13.76280604949219,
    lng: 109.22012323448227,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 8,
    title: "Chuyến đi trip 2",
    date: "",
    lat: 13.837147271604849,
    lng: 108.93010649829213,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 9,
    title: "112 thanh niên",
    date: "",
    lat: 13.762925408710293,
    lng: 109.21193811042609,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 10,
    title: "Chuyến đi Đà Lạt",
    date: "",
    lat: 11.944095189651684,
    lng: 108.52396456815104,
    images: [],
    story: "Đi dn heheh",
    isSpecial: false,
  },
  {
    id: 11,
    title: "Căn cứ 1",
    date: "",
    lat: 13.837147271604849,
    lng: 108.93010649829213,
    images: [],
    story: "Đi trip",
    isSpecial: false,
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
