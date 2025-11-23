# 📝 QUICK START - Thêm Địa Điểm Nhanh

## Cách 1: Dùng Template (Khuyến nghị)

1. Mở file `MEMORY_TEMPLATE.txt`
2. Copy template và điền thông tin
3. Gửi lại cho tôi → Tôi sẽ tự động convert sang code

## Cách 2: Dạng Excel/Bảng

Chuẩn bị bảng với các cột:

| ID  | Tiêu đề          | Ngày (DD/MM/YYYY) | Latitude | Longitude | Ảnh (cách nhau bởi ;)       | Đặc biệt | Câu chuyện   |
| --- | ---------------- | ----------------- | -------- | --------- | --------------------------- | -------- | ------------ |
| 1   | Gặp nhau lần đầu | 23/05/2024        | 16.0544  | 108.2022  | memory1-1.jpg;memory1-2.jpg | Không    | Ngày đó...   |
| 2   | Hẹn hò đầu tiên  | 30/05/2024        | 16.0744  | 108.2222  | memory2-1.jpg               | Không    | Chuyến đi... |

Paste bảng → Tôi convert

## Cách 3: Định dạng JSON đơn giản

```json
{
  "id": 1,
  "title": "Nơi Chúng Ta Gặp Nhau",
  "date": "23/05/2024",
  "lat": 16.0544,
  "lng": 108.2022,
  "images": ["images/memory1-1.jpg", "images/memory1-2.jpg"],
  "story": "Ngày đó, anh nhớ như in...",
  "isSpecial": false
}
```

## Cách 4: Nói trực tiếp

Ví dụ:

> "Thêm địa điểm: Hẹn hò đầu tiên, ngày 30/05/2024, tọa độ 16.0744, 108.2222, có 2 ảnh memory2-1 và memory2-2, câu chuyện: Chuyến đi đầu tiên..."

Tôi sẽ hiểu và tạo code

---

## 🎯 Lấy Tọa Độ Nhanh

### Google Maps (Desktop):

1. Mở https://maps.google.com
2. Tìm địa điểm
3. **Click chuột phải** lên chính xác vị trí
4. Click dòng số đầu tiên (VD: `16.0544, 108.2022`)
5. Đã copy vào clipboard!

### Google Maps (Mobile):

1. Mở app Google Maps
2. Giữ ngón tay lên vị trí
3. Kéo lên panel dưới
4. Tab vào tọa độ để copy

### Tip: Lưu địa điểm trước

- Đánh dấu sao ⭐ các địa điểm quan trọng trong Google Maps
- Tạo list riêng "Kỷ niệm với em"
- Dễ tìm lại sau này

---

## 📸 Chuẩn Bị Ảnh

### Đặt tên file:

```
✅ memory1-1.jpg
✅ memory1-2.jpg
✅ dalat-2024-1.jpg
✅ first-date-1.jpg

❌ Ảnh của em.jpg (có dấu, khoảng trắng)
❌ IMG_1234.jpg (không rõ nghĩa)
```

### Nén ảnh online:

- https://tinypng.com (miễn phí, nhanh)
- https://compressor.io
- Mục tiêu: < 500KB/ảnh

### Kích thước đề xuất:

- 1200 x 800 px (tỉ lệ 3:2)
- Hoặc 1920 x 1080 px (16:9)
- JPG cho ảnh thường
- PNG nếu cần trong suốt

---

## ✍️ Mẫu Câu Chuyện

### Dạng ngắn (100-150 từ):

```
Ngày đó, trời Đà Lạt se lạnh, sương mù phủ trắng xóa.
Em khoác chiếc áo len hồng, tay cầm cốc cà phê nóng.
Anh ngồi bên em, lòng thấy bình yên lạ thường.
Đó là lần đầu tiên anh cảm thấy, có một người khiến
mọi thứ đều trở nên đẹp đẽ hơn. Cảm ơn em đã đến
bên anh. ❤️
```

### Dạng trung bình (150-250 từ):

```
Buổi chiều hôm ấy, anh đến đón em sau giờ làm.
Nắng Sài Gòn vẫn nóng oi ả, nhưng khi nhìn thấy em,
anh chỉ thấy trái tim mình đập nhanh hơn.

Em mặc chiếc váy trắng nhẹ nhàng, tóc để xõa tự nhiên.
Chúng ta đi dọc bờ sông, nói về những điều nhỏ nhặt:
công việc, gia đình, ước mơ. Anh phát hiện mình có thể
nói chuyện với em mãi không chán.

Khi mặt trời lặn, em nói: "Anh ơi, em cảm thấy rất
thoải mái khi ở bên anh." Câu nói đó, dù giản dơn,
nhưng đã chạm đến trái tim anh sâu sắc.

Đó là ngày anh biết, em là người anh muốn bên cạnh. 💕
```

---

## 💌 Mẫu Thư Tình (Cho địa điểm đặc biệt)

```
Em yêu dấu của anh,

Hôm nay là kỷ niệm 6 tháng chúng ta bên nhau. Có lẽ 6 tháng
không phải là con số quá lớn, nhưng với anh, đó là 180 ngày
hạnh phúc nhất đời anh.

Anh vẫn nhớ ngày đầu tiên gặp em, lúc ấy anh còn ngại ngùng,
không biết nói gì. Nhưng em đã chủ động nói chuyện, nụ cười
em khiến anh cảm thấy thoải mái ngay lập tức.

6 tháng qua, chúng ta đã cùng nhau trải qua nhiều điều:
những buổi hẹn hò ngọt ngào, những lần cãi nhau nhỏ nhặt
rồi lại làm hòa, những kế hoạch tương lai chúng ta vẽ ra.
Mỗi kỷ niệm đều là một mảnh ghép trong bức tranh tình yêu
của chúng ta.

Em à, anh muốn nói với em rằng: Cảm ơn em vì đã tin tưởng
và yêu anh. Cảm ơn em vì đã kiên nhẫn với những lúc anh
không hoàn hảo. Cảm ơn em vì đã ở bên anh.

Anh hứa sẽ yêu em hơn mỗi ngày, sẽ chăm sóc em, bảo vệ em,
và làm em hạnh phúc. 6 tháng chỉ là khởi đầu, anh mong
chúng ta còn rất nhiều những mốc kỷ niệm khác.

Anh yêu em vô cùng! ❤️

Mãi mãi của em,
[Tên của bạn]

23/11/2024
```

---

## 🚀 Quy Trình Hoàn Chỉnh

1. ✅ Liệt kê các địa điểm quan trọng (5-10 địa điểm)
2. ✅ Lấy tọa độ từng địa điểm (Google Maps)
3. ✅ Chọn ảnh đẹp, nén và đặt tên
4. ✅ Viết câu chuyện cho mỗi địa điểm
5. ✅ Điền vào template
6. ✅ Gửi cho tôi
7. ✅ Tôi convert và test
8. ✅ Bạn kiểm tra trên trình duyệt

---

## ⚡ Thêm Nhanh Một Địa Điểm

Chỉ cần nói:

> ID 5, "Chuyến đi Đà Lạt", ngày 15/08/2024, tọa độ 11.9404, 108.4583,
> ảnh dalat-1.jpg và dalat-2.jpg, không đặc biệt,
> câu chuyện: "Sáng sớm Đà Lạt, sương mù và hơi lạnh..."

Tôi sẽ tự động tạo:

```javascript
{
  id: 5,
  title: 'Chuyến Đi Đà Lạt',
  date: '15/08/2024',
  lat: 11.9404,
  lng: 108.4583,
  images: ['images/dalat-1.jpg', 'images/dalat-2.jpg'],
  story: 'Sáng sớm Đà Lạt, sương mù và hơi lạnh...',
  isSpecial: false
}
```

---

## 📌 Lưu Ý Quan Trọng

1. **ID phải tăng dần:** 1, 2, 3, 4... (không nhảy số)
2. **Tọa độ là số:** 16.0544 (không phải "16.0544")
3. **Ảnh phải tồn tại:** Đặt trong `images/` trước
4. **Ngày thống nhất:** Dùng DD/MM/YYYY
5. **Đặc biệt ít thôi:** Chỉ 1-2 địa điểm quan trọng nhất
6. **Story ngắn gọn:** 100-250 từ cho dễ đọc
7. **Thư dài chỉ dùng khi isSpecial = true**

---

**Sẵn sàng rồi? Hãy điền template và gửi lại cho tôi! 🚀**
