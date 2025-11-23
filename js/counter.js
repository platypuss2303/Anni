// ============================================
// LOVE COUNTER
// Đếm số ngày, giờ, phút, giây yêu nhau
// ============================================

function updateCounter() {
  // Lấy ngày bắt đầu từ config
  const startDate = new Date(RELATIONSHIP_START_DATE);
  const now = new Date();

  // Tính toán chênh lệch
  const difference = now - startDate;

  // Chuyển đổi sang ngày, giờ, phút, giây
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Cập nhật DOM
  updateCounterElement("days", days);
  updateCounterElement("hours", hours);
  updateCounterElement("minutes", minutes);
  updateCounterElement("seconds", seconds);
}

// Cập nhật từng phần tử với hiệu ứng
function updateCounterElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    const currentValue = parseInt(element.textContent) || 0;

    // Chỉ thêm animation khi giá trị thay đổi
    if (currentValue !== value) {
      element.classList.add("scale-in");
      element.textContent = value.toString().padStart(2, "0");

      setTimeout(() => {
        element.classList.remove("scale-in");
      }, 500);
    } else {
      element.textContent = value.toString().padStart(2, "0");
    }
  }
}

// Khởi tạo counter
function initCounter() {
  // Cập nhật lần đầu
  updateCounter();

  // Cập nhật mỗi giây
  setInterval(updateCounter, 1000);
}

// Animation cho số đếm khi trang load
function animateCounterOnLoad() {
  const counterItems = document.querySelectorAll(".counter-item");
  counterItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });
}

// Khởi động khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  initCounter();
  animateCounterOnLoad();
});

// Export function
window.initCounter = initCounter;
