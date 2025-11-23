// ============================================
// AUTHENTICATION SYSTEM
// Xử lý đăng nhập
// ============================================

// Thông tin đăng nhập
const VALID_CREDENTIALS = {
  email: "hiepdayne23@gmail.com",
  password: "thyhiepdangiu",
};

// Key lưu trữ trạng thái đăng nhập
const AUTH_KEY = "love_website_authenticated";
const AUTH_TIMESTAMP_KEY = "love_website_auth_time";

// Kiểm tra đã đăng nhập chưa
function isAuthenticated() {
  const authenticated = localStorage.getItem(AUTH_KEY);
  const timestamp = localStorage.getItem(AUTH_TIMESTAMP_KEY);

  // Kiểm tra session (24 giờ)
  if (authenticated === "true" && timestamp) {
    const authTime = parseInt(timestamp);
    const currentTime = Date.now();
    const hoursPassed = (currentTime - authTime) / (1000 * 60 * 60);

    // Session hết hạn sau 24 giờ
    if (hoursPassed < 24) {
      return true;
    } else {
      // Xóa session hết hạn
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(AUTH_TIMESTAMP_KEY);
      return false;
    }
  }

  return false;
}

// Đăng nhập
function login(email, password) {
  if (
    email === VALID_CREDENTIALS.email &&
    password === VALID_CREDENTIALS.password
  ) {
    // Lưu trạng thái đăng nhập
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(AUTH_TIMESTAMP_KEY, Date.now().toString());
    return true;
  }
  return false;
}

// Đăng xuất
function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_TIMESTAMP_KEY);
  window.location.reload();
}

// Xử lý form đăng nhập
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("login-error");
  const loginBtn = event.target.querySelector(".login-btn");

  // Disable button để tránh spam
  loginBtn.disabled = true;
  loginBtn.textContent = "Đang xác thực...";

  // Giả lập delay để có cảm giác xác thực
  setTimeout(() => {
    if (login(email, password)) {
      // Đăng nhập thành công
      errorElement.style.display = "none";
      loginBtn.textContent = "Thành công! ❤️";
      loginBtn.style.background = "linear-gradient(135deg, #4ade80, #22c55e)";

      // Tạo hiệu ứng trái tim
      createSuccessHearts();

      // Chuyển sang loading screen
      setTimeout(() => {
        hideLoginScreen();
        showLoadingScreen();
      }, 1000);
    } else {
      // Đăng nhập thất bại
      errorElement.textContent = "❌ Email hoặc mật khẩu không đúng!";
      errorElement.style.display = "block";
      loginBtn.disabled = false;
      loginBtn.textContent = "Đăng Nhập 💕";

      // Shake animation
      const loginContainer = document.querySelector(".login-container");
      loginContainer.style.animation = "shake 0.5s";
      setTimeout(() => {
        loginContainer.style.animation = "";
      }, 500);
    }
  }, 800);
}

// Ẩn login screen
function hideLoginScreen() {
  const loginScreen = document.getElementById("login-screen");
  loginScreen.classList.add("hidden");
}

// Hiển thị loading screen sau khi đăng nhập
function showLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex";

  // Hide loading screen sau 2s
  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    // Bắt đầu các animation khác
    if (typeof animateOnScroll === "function") {
      animateOnScroll();
    }
  }, 2000);
}

// Tạo hiệu ứng trái tim khi đăng nhập thành công
function createSuccessHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.textContent = ["❤️", "💕", "💖", "💗", "💝"][
        Math.floor(Math.random() * 5)
      ];
      heart.style.cssText = `
                position: fixed;
                bottom: -50px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 30 + 20}px;
                animation: floatUp ${Math.random() * 2 + 2}s ease-out forwards;
                pointer-events: none;
                z-index: 10001;
            `;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, i * 50);
  }
}

// CSS cho shake animation
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    
    @keyframes floatUp {
        0% {
            bottom: -50px;
            opacity: 1;
        }
        100% {
            bottom: 120vh;
            opacity: 0;
        }
    }
`;
document.head.appendChild(shakeStyle);

// Khởi tạo authentication
function initAuth() {
  const loginForm = document.getElementById("login-form");
  const loginScreen = document.getElementById("login-screen");

  if (isAuthenticated()) {
    // Đã đăng nhập, ẩn login screen
    loginScreen.style.display = "none";

    // Hiển thị loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex";

    // Tự động hide loading sau 2s
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 2000);
  } else {
    // Chưa đăng nhập, hiển thị login screen
    loginScreen.style.display = "flex";

    // Thêm event listener cho form
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }
  }
}

// Thêm nút logout (ẩn, có thể dùng bằng console hoặc phím tắt)
document.addEventListener("keydown", (e) => {
  // Nhấn Ctrl + Shift + L để logout
  if (e.ctrlKey && e.shiftKey && e.key === "L") {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
      logout();
    }
  }
});

// Khởi tạo khi DOM ready
document.addEventListener("DOMContentLoaded", initAuth);

// Export functions
window.isAuthenticated = isAuthenticated;
window.logout = logout;
