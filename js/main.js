// ============================================
// MAIN JAVASCRIPT FILE
// Điều khiển chính của website
// ============================================

// Khởi tạo khi trang load
document.addEventListener("DOMContentLoaded", function () {
  // Chỉ khởi tạo các thành phần nếu đã đăng nhập
  // Auth sẽ tự động xử lý login screen và loading screen

  // Khởi tạo các thành phần
  initMusicPlayer();
  initScrollAnimations();
  initSmoothScroll();

  // Tạo timeline khi DOM ready
  if (typeof createTimeline === "function") {
    createTimeline();
  }
});

// Hiển thị loading screen (được gọi từ auth.js)
function showLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");

  if (!loadingScreen) return;

  // Giả lập loading (có thể thay bằng loading thực tế)
  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    // Start entrance animations
    animateOnScroll();

    // Tự động phát nhạc sau khi load (nếu user cho phép)
    // Note: Nhiều trình duyệt chặn autoplay, cần user interaction
  }, 2000);
}

// ============================================
// MUSIC PLAYER
// ============================================
function initMusicPlayer() {
  const music = document.getElementById("background-music");
  const musicBtn = document.getElementById("music-toggle");
  let isPlaying = false;

  if (!music || !musicBtn) return;

  // Thử autoplay (có thể bị chặn bởi trình duyệt)
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        musicBtn.classList.add("playing");
      })
      .catch(() => {
        isPlaying = false;
        musicBtn.classList.remove("playing");
      });
  }

  // Toggle music khi click
  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicBtn.classList.remove("playing");
      musicBtn.innerHTML = '<span class="music-icon">🔇</span>';
      isPlaying = false;
    } else {
      music.play();
      musicBtn.classList.add("playing");
      musicBtn.innerHTML = '<span class="music-icon">🎵</span>';
      isPlaying = true;
    }
  });

  // Thêm fade in/out khi start/end
  music.addEventListener("play", () => {
    fadeIn(music);
  });

  music.addEventListener("pause", () => {
    fadeOut(music);
  });
}

// Fade in audio
function fadeIn(audio, duration = 1000) {
  audio.volume = 0;
  const step = 0.05;
  const interval = duration / (1 / step);

  const fade = setInterval(() => {
    if (audio.volume < 0.95) {
      audio.volume = Math.min(audio.volume + step, 1);
    } else {
      clearInterval(fade);
    }
  }, interval);
}

// Fade out audio
function fadeOut(audio, duration = 1000) {
  const step = 0.05;
  const interval = duration / (audio.volume / step);

  const fade = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume = Math.max(audio.volume - step, 0);
    } else {
      audio.volume = 0;
      clearInterval(fade);
    }
  }, interval);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe các phần tử cần animation
  const animatedElements = document.querySelectorAll(
    ".section-header, .timeline-item, .guestbook-form, .message-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });
}

function animateOnScroll() {
  // Animate các phần tử khi scroll vào viewport
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el) => {
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  // Smooth scroll cho các link anchor
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector(".header");

  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ============================================
// FLOATING HEARTS BACKGROUND
// ============================================
function createFloatingHearts() {
  const heartsContainer = document.createElement("div");
  heartsContainer.id = "floating-hearts";
  heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
  document.body.appendChild(heartsContainer);

  setInterval(() => {
    if (document.querySelectorAll("#floating-hearts > div").length < 10) {
      createSingleHeart(heartsContainer);
    }
  }, 3000);
}

function createSingleHeart(container) {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.cssText = `
        position: absolute;
        bottom: -50px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 30 + 20}px;
        opacity: ${Math.random() * 0.3 + 0.1};
        animation: floatUp ${Math.random() * 10 + 15}s linear forwards;
    `;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 25000);
}

// Add CSS for floating hearts
const floatingStyle = document.createElement("style");
floatingStyle.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            transform: translateX(0) rotate(0deg);
        }
        100% {
            bottom: 110vh;
            transform: translateX(${
              Math.random() * 200 - 100
            }px) rotate(360deg);
        }
    }
`;
document.head.appendChild(floatingStyle);

// Khởi tạo floating hearts
createFloatingHearts();

// ============================================
// EASTER EGG - KONAMI CODE
// ============================================
let konamiCode = [];
const konamiPattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(",") === konamiPattern.join(",")) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Tạo hiệu ứng đặc biệt khi nhập đúng Konami Code
  const message = document.createElement("div");
  message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FFB6C1, #FF91A4);
        color: white;
        padding: 40px 60px;
        border-radius: 20px;
        font-size: 2rem;
        font-family: 'Dancing Script', cursive;
        text-align: center;
        z-index: 10001;
        box-shadow: 0 10px 50px rgba(255, 182, 193, 0.5);
        animation: scaleIn 0.5s ease;
    `;
  message.innerHTML = "💖 Anh yêu em nhất trên đời! 💖";

  document.body.appendChild(message);

  // Tạo mưa trái tim
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createHeartRain();
    }, i * 50);
  }

  setTimeout(() => {
    message.style.animation = "fadeOut 0.5s ease";
    setTimeout(() => message.remove(), 500);
  }, 3000);
}

function createHeartRain() {
  const heart = document.createElement("div");
  heart.textContent = ["❤️", "💕", "💖", "💗", "💝"][
    Math.floor(Math.random() * 5)
  ];
  heart.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 30 + 20}px;
        animation: fallDown ${Math.random() * 2 + 3}s linear forwards;
        pointer-events: none;
        z-index: 10000;
    `;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Add CSS for heart rain
const rainStyle = document.createElement("style");
rainStyle.textContent = `
    @keyframes fallDown {
        0% {
            top: -50px;
            transform: rotate(0deg);
        }
        100% {
            top: 110vh;
            transform: rotate(360deg);
        }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(rainStyle);

// ============================================
// PERFORMANCE MONITORING
// ============================================
window.addEventListener("load", () => {
  console.log(
    "%c💖 Website Kỷ Niệm 6 Tháng 💖",
    "color: #FFB6C1; font-size: 24px; font-weight: bold;"
  );
  console.log("%cMade with ❤️ for you", "color: #FF91A4; font-size: 16px;");

  // Log performance metrics
  if (performance && performance.timing) {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
  }
});

// ============================================
// PREVENT CONTEXT MENU (Optional - bảo vệ hình ảnh)
// ============================================
// Uncomment nếu muốn vô hiệu hóa chuột phải
/*
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showNotification('Xin lỗi, chức năng này đã bị vô hiệu hóa! 😊', 'warning');
});
*/

// ============================================
// EXPORT FUNCTIONS
// ============================================
window.showNotification = function (message, type) {
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
};
