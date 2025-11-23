// ============================================
// MAP FUNCTIONALITY
// Xử lý Google Maps và các marker
// ============================================

let map;
let markers = [];
let infoWindows = [];

// Khởi tạo bản đồ
function initMap() {
  // Tạo bản đồ với cấu hình từ config.js
  map = new google.maps.Map(document.getElementById("map"), {
    center: MAP_CENTER,
    zoom: MAP_ZOOM,
    styles: MAP_STYLES,
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });

  // Tạo đường nối giữa các marker
  createPolyline();

  // Tạo markers cho mỗi địa điểm
  createMarkers();

  // Tự động fit bounds để hiển thị tất cả markers
  fitMapBounds();
}

// Tạo đường nối giữa các địa điểm
function createPolyline() {
  const path = MEMORY_LOCATIONS.map((location) => ({
    lat: location.lat,
    lng: location.lng,
  }));

  const polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#FFB6C1",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    icons: [
      {
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 2,
          strokeColor: "#FF91A4",
        },
        offset: "100%",
        repeat: "100px",
      },
    ],
  });

  polyline.setMap(map);

  // Animate polyline
  animatePolyline(polyline);
}

// Animation cho đường nối
function animatePolyline(line) {
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 200;
    const icons = line.get("icons");
    icons[0].offset = count / 2 + "%";
    line.set("icons", icons);
  }, 50);
}

// Tạo marker tùy chỉnh với biểu tượng trái tim
function createCustomIcon(isSpecial) {
  return {
    path: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
    fillColor: isSpecial ? "#FF1493" : "#FFB6C1",
    fillOpacity: 1,
    strokeWeight: 2,
    strokeColor: "#FFFFFF",
    rotation: 0,
    scale: isSpecial ? 2 : 1.5,
    anchor: new google.maps.Point(12, 22),
  };
}

// Tạo markers cho các địa điểm
function createMarkers() {
  MEMORY_LOCATIONS.forEach((location, index) => {
    // Tạo marker
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      icon: createCustomIcon(location.isSpecial),
      title: location.title,
      animation: google.maps.Animation.DROP,
      zIndex: location.isSpecial ? 1000 : index,
    });

    // Tạo nội dung info window
    const contentString = createInfoWindowContent(location);

    // Tạo info window
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 350,
    });

    // Lưu vào mảng
    markers.push(marker);
    infoWindows.push(infoWindow);

    // Thêm sự kiện click vào marker
    marker.addListener("click", () => {
      // Đóng tất cả info windows khác
      infoWindows.forEach((iw) => iw.close());

      // Mở info window hiện tại
      infoWindow.open(map, marker);

      // Zoom vào marker
      map.setZoom(15);
      map.setCenter(marker.getPosition());

      // Thêm animation bounce
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => marker.setAnimation(null), 2000);
    });

    // Marker hover effect
    marker.addListener("mouseover", () => {
      marker.setIcon(createCustomIcon(location.isSpecial));
    });
  });

  // Mở info window đầu tiên sau khi load
  setTimeout(() => {
    if (infoWindows[0]) {
      infoWindows[0].open(map, markers[0]);
    }
  }, 1000);
}

// Tạo nội dung cho info window
function createInfoWindowContent(location) {
  let content = `
        <div class="info-window">
            <h3>${location.title}</h3>
            <p class="info-window-date">📅 ${location.date}</p>
    `;

  // Thêm hình ảnh nếu có
  if (location.images && location.images.length > 0) {
    content += '<div class="info-window-images">';
    location.images.forEach((img, index) => {
      content += `<img src="${img}" alt="Memory ${
        index + 1
      }" onclick="openImageModal('${img}')">`;
    });
    content += "</div>";
  }

  // Thêm câu chuyện hoặc thư tình
  if (location.isSpecial && location.letter) {
    content += `
            <p>${location.story || "Một kỷ niệm đặc biệt..."}</p>
            <button class="read-more-btn" onclick="openLetterModal(${
              location.id
            })">
                💌 Đọc Thư Tình
            </button>
        `;
  } else {
    content += `<p>${location.story}</p>`;
  }

  content += "</div>";
  return content;
}

// Fit bản đồ để hiển thị tất cả markers
function fitMapBounds() {
  const bounds = new google.maps.LatLngBounds();
  MEMORY_LOCATIONS.forEach((location) => {
    bounds.extend({ lat: location.lat, lng: location.lng });
  });
  map.fitBounds(bounds);

  // Thêm padding
  setTimeout(() => {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom - 1);
  }, 500);
}

// Mở modal hiển thị hình ảnh lớn
function openImageModal(imageSrc) {
  const modal = document.getElementById("memory-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <img src="${imageSrc}" style="width: 100%; border-radius: 15px;">
    `;

  modal.style.display = "block";
}

// Mở modal hiển thị thư tình
function openLetterModal(locationId) {
  const location = MEMORY_LOCATIONS.find((loc) => loc.id === locationId);
  if (!location || !location.letter) return;

  const modal = document.getElementById("memory-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <div class="letter-content">
            <h2>💌 Thư Tình Dành Cho Em</h2>
            <p>${location.letter}</p>
        </div>
    `;

  modal.style.display = "block";
}

// Đóng modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("memory-modal");
  const closeBtn = document.querySelector(".close-modal");

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Tạo timeline từ dữ liệu địa điểm
function createTimeline() {
  const timelineContainer = document.getElementById("timeline");

  MEMORY_LOCATIONS.forEach((location, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item fade-in";
    timelineItem.style.animationDelay = `${index * 0.2}s`;

    timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3>${location.title}</h3>
                <p class="date">${location.date}</p>
                <p>${
                  location.isSpecial && location.letter
                    ? "Một kỷ niệm đặc biệt với bức thư tình đầy yêu thương..."
                    : location.story.substring(0, 150) + "..."
                }</p>
            </div>
        `;

    // Thêm sự kiện click để zoom vào marker tương ứng
    timelineItem.addEventListener("click", () => {
      if (markers[index]) {
        map.setZoom(15);
        map.setCenter(markers[index].getPosition());
        infoWindows.forEach((iw) => iw.close());
        infoWindows[index].open(map, markers[index]);
        markers[index].setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => markers[index].setAnimation(null), 2000);

        // Scroll to map
        document.querySelector(".map-section").scrollIntoView({
          behavior: "smooth",
        });
      }
    });

    timelineContainer.appendChild(timelineItem);
  });
}

// Export functions để sử dụng ở file khác
window.initMap = initMap;
window.openImageModal = openImageModal;
window.openLetterModal = openLetterModal;
window.createTimeline = createTimeline;
