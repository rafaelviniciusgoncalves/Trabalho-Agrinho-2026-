// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(5, 46, 22, 0.95)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.8)';
  }
});

// Simple animation for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.card, .action-card, .fact-item').forEach(el => {
  el.style.transition = 'all 0.6s ease';
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});
