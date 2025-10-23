// Cuộn mượt khi click liên kết
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Giả lập gửi form
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Cảm ơn bạn! Thông tin đã được gửi thành công.');
  form.reset();
});

// === SLIDE ẢNH BANNER TỰ ĐỘNG ===
let slides = document.querySelectorAll('.hero-slider img');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // đổi ảnh mỗi 4 giây

// === HIỆU ỨNG HIỆN DẦN KHI CUỘN ===
window.addEventListener("scroll", revealElements);

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
// === CUỘN NGANG CHO PHẦN TESTIMONIALS ===
const testimonialGrid = document.querySelector('.testimonials-grid');

// Cho phép cuộn tự động
if (testimonialGrid) {
  let scrollAmount = 0;
  const scrollStep = 1; // tốc độ cuộn
  const delay = 15; // khoảng cách giữa các frame (ms)

  function autoScrollTestimonials() {
    testimonialGrid.scrollLeft += scrollStep;
    scrollAmount += scrollStep;

    // Nếu cuộn đến hết thì quay lại đầu
    if (testimonialGrid.scrollLeft + testimonialGrid.clientWidth >= testimonialGrid.scrollWidth) {
      testimonialGrid.scrollLeft = 0;
    }
  }

  setInterval(autoScrollTestimonials, delay);
}
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}
