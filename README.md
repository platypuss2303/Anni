# 💖 Website Kỷ Niệm 6 Tháng Yêu Nhau

Website tương tác đẹp mắt với bản đồ Google Maps để lưu giữ những kỷ niệm đặc biệt trong mối quan hệ của bạn.

## 🎯 Tính Năng Chính

- ✅ **Hệ Thống Đăng Nhập** bảo mật, chỉ người yêu mới truy cập được
- ✅ **Bản Đồ Tương Tác Google Maps** với các marker tùy chỉnh hình trái tim
- ✅ **Đếm Thời Gian** hiển thị chính xác số ngày, giờ, phút, giây yêu nhau
- ✅ **Dòng Thời Gian** (Timeline) hiển thị các mốc kỷ niệm quan trọng
- ✅ **Sổ Lưu Bút** để người yêu viết lời nhắn
- ✅ **Nhạc Nền** tự động phát bài hát yêu thích
- ✅ **Responsive Design** hiển thị đẹp trên mọi thiết bị
- ✅ **Thiết Kế Màu Hồng Pastel** lãng mạn và tinh tế
- ✅ **Hiệu Ứng Animations** mượt mà, thu hút

## 📋 Yêu Cầu Hệ Thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối Internet (để load Google Maps API)
- Google Maps API Key (miễn phí)

## 🚀 Hướng Dẫn Cài Đặt

### Bước 1: Thông Tin Đăng Nhập

**Thông tin đăng nhập mặc định:**

- **Email:** `hiepdayne23@gmail.com`
- **Mật khẩu:** `thyhiepdangiu`

**Session:** Sau khi đăng nhập, website sẽ lưu session trong 24 giờ. Bạn không cần đăng nhập lại trong thời gian này.

**Đăng xuất:** Nhấn `Ctrl + Shift + L` hoặc xóa localStorage của trình duyệt.

**Thay đổi thông tin đăng nhập:**

Mở file `js/auth.js` và chỉnh sửa:

```javascript
const VALID_CREDENTIALS = {
  email: "email-moi@gmail.com",
  password: "mat-khau-moi",
};
```

### Bước 2: Lấy Google Maps API Key

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo project mới hoặc chọn project có sẵn
3. Bật **Google Maps JavaScript API**
4. Vào mục **Credentials** → **Create Credentials** → **API Key**
5. Copy API key vừa tạo

### Bước 3: Cấu Hình Website

#### 3.1. Thêm Google Maps API Key

Mở file `index.html`, tìm dòng:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=places"
  async
  defer
></script>
```

Thay `YOUR_API_KEY` bằng API key của bạn:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxx&callback=initMap&libraries=places"
  async
  defer
></script>
```

#### 3.2. Cấu Hình Thông Tin Cá Nhân

Mở file `js/config.js` và chỉnh sửa:

```javascript
// Ngày bắt đầu yêu nhau (định dạng: YYYY-MM-DD)
const RELATIONSHIP_START_DATE = "2024-05-23"; // Thay đổi ngày này

// Tọa độ trung tâm bản đồ
const MAP_CENTER = {
  lat: 16.0544, // Vĩ độ của địa điểm bạn muốn
  lng: 108.2022, // Kinh độ của địa điểm bạn muốn
};
```

#### 3.3. Thêm Các Địa Điểm Kỷ Niệm

Trong file `js/config.js`, chỉnh sửa mảng `MEMORY_LOCATIONS`:

```javascript
const MEMORY_LOCATIONS = [
  {
    id: 1,
    title: "Nơi Chúng Ta Gặp Nhau Lần Đầu",
    date: "23/05/2024",
    lat: 16.0544, // Tọa độ thực tế của địa điểm
    lng: 108.2022,
    images: [
      "images/memory1-1.jpg", // Đường dẫn đến hình ảnh
      "images/memory1-2.jpg",
      "images/memory1-3.jpg",
    ],
    story: "Câu chuyện của bạn ở đây...",
    isSpecial: false,
  },
  // Thêm các địa điểm khác...
];
```

**Cách lấy tọa độ địa điểm:**

1. Vào [Google Maps](https://maps.google.com)
2. Nhấp chuột phải vào địa điểm
3. Chọn tọa độ đầu tiên (VD: 16.0544, 108.2022)
4. Copy và paste vào config

### Bước 4: Thêm Hình Ảnh

1. Chuẩn bị các hình ảnh kỷ niệm của bạn
2. Đặt vào thư mục `images/` với tên như trong config:
   - `memory1-1.jpg`
   - `memory1-2.jpg`
   - etc.

### Bước 5: Thêm Nhạc Nền

1. Chọn bài hát yêu thích của hai bạn
2. Đổi tên file thành `love-song.mp3`
3. Đặt vào thư mục `audio/`

**Hoặc** thay đổi tên file trong `index.html`:

```html
<audio id="background-music" loop>
  <source src="audio/ten-bai-hat-cua-ban.mp3" type="audio/mpeg" />
</audio>
```

### Bước 6: Chạy Website

#### Option 1: Chạy Local (Máy Tính)

1. Mở file `index.html` bằng trình duyệt web
2. Nếu gặp lỗi CORS với Google Maps, dùng local server:

**Với Python:**

```bash
# Python 3
python -m http.server 8000

# Mở trình duyệt và truy cập: http://localhost:8000
```

**Với Node.js (http-server):**

```bash
npm install -g http-server
http-server

# Mở trình duyệt và truy cập: http://localhost:8080
```

#### Option 2: Deploy Lên Hosting

**Netlify (Miễn Phí):**

1. Vào [Netlify](https://www.netlify.com/)
2. Kéo thả thư mục project vào
3. Website sẽ được deploy tự động

**GitHub Pages (Miễn Phí):**

1. Tạo repository trên GitHub
2. Upload toàn bộ files
3. Vào Settings → Pages → Chọn branch main
4. Website sẽ có URL: `https://username.github.io/repository-name`

**Vercel (Miễn Phí):**

1. Vào [Vercel](https://vercel.com/)
2. Import project từ GitHub hoặc upload trực tiếp
3. Deploy tự động

## 📁 Cấu Trúc Thư Mục

```
TH CORE/
│
├── index.html              # Trang chính
├── README.md               # File hướng dẫn này
│
├── css/
│   └── style.css          # Stylesheet chính
│
├── js/
│   ├── config.js          # Cấu hình (ngày, địa điểm, etc.)
│   ├── auth.js            # Xử lý đăng nhập
│   ├── map.js             # Xử lý Google Maps
│   ├── counter.js         # Đếm thời gian yêu nhau
│   ├── guestbook.js       # Sổ lưu bút
│   └── main.js            # JavaScript chính
│
├── images/                # Thư mục chứa hình ảnh
│   ├── memory1-1.jpg
│   ├── memory1-2.jpg
│   └── ...
│
└── audio/                 # Thư mục chứa nhạc
    └── love-song.mp3
```

## 🎨 Tùy Chỉnh Màu Sắc

Mở file `css/style.css` và chỉnh sửa biến CSS:

```css
:root {
  --primary-pink: #ffb6c1; /* Hồng chính */
  --light-pink: #ffd1dc; /* Hồng nhạt */
  --deep-pink: #ff91a4; /* Hồng đậm */
  --soft-pink: #ffc0cb; /* Hồng mềm */
  --pale-pink: #fff0f3; /* Hồng nhạt nhất */
}
```

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi: Bản đồ không hiển thị

**Nguyên nhân:** API Key chưa đúng hoặc chưa bật Google Maps API

**Giải pháp:**

1. Kiểm tra lại API Key trong `index.html`
2. Vào Google Cloud Console
3. Đảm bảo **Google Maps JavaScript API** đã được bật
4. Kiểm tra billing account (Google yêu cầu thông tin thanh toán nhưng vẫn miễn phí trong hạn mức)

### Lỗi: Nhạc không tự động phát

**Nguyên nhân:** Trình duyệt chặn autoplay

**Giải pháp:**

- Đây là chính sách của trình duyệt
- User cần click vào nút 🎵 để phát nhạc
- Không thể bypass được (bảo mật)

### Lỗi: Hình ảnh không hiển thị

**Nguyên nhân:** Đường dẫn file không đúng

**Giải pháp:**

1. Kiểm tra tên file trong `js/config.js` khớp với tên file thực tế
2. Đảm bảo hình ảnh nằm trong thư mục `images/`
3. Kiểm tra phân biệt chữ hoa/thường

### Lỗi: Không đăng nhập được

**Nguyên nhân:** Email hoặc mật khẩu sai

**Giải pháp:**

1. Kiểm tra lại thông tin đăng nhập trong `js/auth.js`
2. Email: `hiepdayne23@gmail.com`
3. Mật khẩu: `thyhiepdangiu`
4. Đảm bảo không có khoảng trắng thừa
5. Kiểm tra console (F12) để xem lỗi chi tiết

## 💡 Tips & Tricks

### 1. Tối Ưu Hình Ảnh

- Nén hình ảnh trước khi upload (dùng [TinyPNG](https://tinypng.com/))
- Kích thước khuyến nghị: 1200x800px
- Format: JPG cho ảnh, PNG cho logo

### 2. Viết Câu Chuyện Hay

- Ngắn gọn, xúc tích (150-200 từ)
- Tập trung vào cảm xúc
- Dùng ngôn ngữ chân thành, từ trái tim

### 3. Chọn Nhạc Nền

- Chọn bài hát có ý nghĩa với hai bạn
- Độ dài: 3-5 phút
- Format: MP3
- Kích thước: < 10MB

### 4. Bảo Mật Thông Tin Đăng Nhập

- Nếu deploy public, nên thay đổi email và mật khẩu trong `js/auth.js`
- Hoặc sử dụng backend để xác thực an toàn hơn
- Session tự động hết hạn sau 24 giờ

### 5. Easter Eggs

**Konami Code:** Nhập trên bàn phím: `↑ ↑ ↓ ↓ ← → ← → B A`

**Đăng xuất nhanh:** Nhấn `Ctrl + Shift + L`

## 🔐 Bảo Mật & Quyền Riêng Tư

- **Đăng nhập:** Thông tin lưu trong `localStorage`, session 24 giờ
- **Sổ lưu bút:** Lưu trữ local (localStorage) trên trình duyệt
- Không có backend/database
- Dữ liệu chỉ lưu trên máy người dùng
- Nếu muốn lưu trữ bền vững, cần tích hợp backend (Firebase, MongoDB, etc.)

## 📱 Responsive Design

Website tự động điều chỉnh trên:

- 💻 Desktop (1920px+)
- 💻 Laptop (1366px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 767px)

## 🎁 Tính Năng Bổ Sung (Có thể mở rộng)

- [x] ~~Thêm trang đăng nhập~~ ✅ Đã hoàn thành
- [ ] Thêm video vào marker
- [ ] Tích hợp Firebase để sync dữ liệu
- [ ] Gửi email thông báo khi có lời nhắn mới
- [ ] Export PDF kỷ niệm
- [ ] Thêm mini-games (quiz về nhau)
- [ ] Thêm chức năng đổi mật khẩu

## 📞 Hỗ Trợ

Nếu gặp vấn đề khi cài đặt, bạn có thể:

1. Kiểm tra lại từng bước trong hướng dẫn
2. Mở Console của trình duyệt (F12) để xem lỗi
3. Google lỗi cụ thể
4. Hỏi trên StackOverflow

## ❤️ Lời Kết

Chúc bạn có một món quà kỷ niệm ý nghĩa và đẹp mắt!

Hãy nhớ rằng, điều quan trọng nhất không phải là website hoàn hảo đến đâu, mà là tình cảm chân thành bạn dành cho người ấy.

**Made with ❤️ by GitHub Copilot**

---

## 📝 Changelog

### Version 1.1.0 (23/11/2024)

- ✅ Thêm hệ thống đăng nhập
- ✅ Session management (24 giờ)
- ✅ Login form với animations đẹp mắt
- ✅ Bảo vệ nội dung website

### Version 1.0.0 (23/11/2024)

- ✅ Khởi tạo project
- ✅ Tích hợp Google Maps
- ✅ Thêm counter đếm thời gian
- ✅ Tạo guestbook
- ✅ Responsive design
- ✅ Music player
- ✅ Animations & effects

---

_"Tình yêu không phải là nhìn vào mắt nhau, mà là cùng nhìn về một hướng."_
