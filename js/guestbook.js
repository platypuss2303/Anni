// ============================================
// GUESTBOOK FUNCTIONALITY
// Xử lý sổ lưu bút
// ============================================

// Lưu trữ tin nhắn trong localStorage
const STORAGE_KEY = "guestbook_messages";

// Lấy tất cả tin nhắn từ localStorage
function getMessages() {
  const messages = localStorage.getItem(STORAGE_KEY);
  return messages ? JSON.parse(messages) : [];
}

// Lưu tin nhắn vào localStorage
function saveMessage(message) {
  const messages = getMessages();
  const newMessage = {
    id: Date.now(),
    text: message,
    date: new Date().toLocaleString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  messages.unshift(newMessage); // Thêm vào đầu mảng
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  return newMessage;
}

// Hiển thị tất cả tin nhắn
function displayMessages() {
  const messagesContainer = document.getElementById("messages-container");
  const messages = getMessages();

  if (messages.length === 0) {
    messagesContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-light);">
                <p>Chưa có lời nhắn nào. Hãy là người đầu tiên viết lời nhắn nhé! 💌</p>
            </div>
        `;
    return;
  }

  messagesContainer.innerHTML = "";

  messages.forEach((message, index) => {
    const messageElement = document.createElement("div");
    messageElement.className = "message-item";
    messageElement.style.animationDelay = `${index * 0.1}s`;

    messageElement.innerHTML = `
            <div class="message-text">${escapeHtml(message.text)}</div>
            <div class="message-date">💝 ${message.date}</div>
        `;

    messagesContainer.appendChild(messageElement);
  });
}

// Escape HTML để tránh XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Xử lý submit tin nhắn
function handleSubmit() {
  const textarea = document.getElementById("guestbook-message");
  const message = textarea.value.trim();

  if (message === "") {
    showNotification("Vui lòng viết lời nhắn trước khi gửi! ✍️", "warning");
    return;
  }

  // Lưu tin nhắn
  saveMessage(message);

  // Hiển thị lại danh sách tin nhắn
  displayMessages();

  // Xóa nội dung textarea
  textarea.value = "";

  // Hiển thị thông báo thành công
  showNotification("Cảm ơn em đã viết lời nhắn! ❤️", "success");

  // Scroll xuống tin nhắn vừa gửi
  setTimeout(() => {
    const firstMessage = document.querySelector(".message-item");
    if (firstMessage) {
      firstMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      firstMessage.style.backgroundColor = "#FFD1DC";
      setTimeout(() => {
        firstMessage.style.backgroundColor = "";
      }, 2000);
    }
  }, 300);

  // Tạo hiệu ứng trái tim bay
  createHeartAnimation();
}

// Hiển thị thông báo
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px 30px;
        background: ${
          type === "success"
            ? "linear-gradient(135deg, #FFB6C1, #FF91A4)"
            : "#FF91A4"
        };
        color: white;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(255, 182, 193, 0.4);
        z-index: 10000;
        font-weight: 500;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Tạo hiệu ứng trái tim bay lên
function createHeartAnimation() {
  const heartsCount = 10;
  const container = document.body;

  for (let i = 0; i < heartsCount; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.textContent = "❤️";
      heart.style.cssText = `
                position: fixed;
                bottom: -50px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 20}px;
                animation: floatHeart 3s ease-out forwards;
                pointer-events: none;
                z-index: 9998;
            `;

      container.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }, i * 100);
  }
}

// Khởi tạo guestbook
function initGuestbook() {
  // Hiển thị tin nhắn có sẵn
  displayMessages();

  // Thêm sự kiện cho nút submit
  const submitBtn = document.getElementById("submit-message");
  if (submitBtn) {
    submitBtn.addEventListener("click", handleSubmit);
  }

  // Thêm sự kiện Enter + Ctrl để submit
  const textarea = document.getElementById("guestbook-message");
  if (textarea) {
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        e.preventDefault();
        handleSubmit();
      }
    });

    // Auto-resize textarea
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }
}

// Thêm CSS cho animation
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes floatHeart {
        0% {
            bottom: -50px;
            opacity: 1;
            transform: translateX(0) rotate(0deg);
        }
        100% {
            bottom: 100vh;
            opacity: 0;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${
  Math.random() * 360
}deg);
        }
    }
    
    .notification {
        font-family: 'Quicksand', sans-serif;
    }
`;
document.head.appendChild(style);

// Khởi động khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", initGuestbook);

// Export functions
window.initGuestbook = initGuestbook;
window.handleSubmit = handleSubmit;
