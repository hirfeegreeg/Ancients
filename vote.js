// vote.js

// Reveal on scroll
const revealOnScroll = () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    // Add or remove the 'active' class based on scroll position
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Optional: Discord button animation
window.addEventListener('DOMContentLoaded', () => {
  const discordBtn = document.querySelector('.discord-btn');
  if (discordBtn) {
    discordBtn.addEventListener('mouseenter', () => {
      discordBtn.textContent = '✨ Join the Ancients ✨';
    });

    discordBtn.addEventListener('mouseleave', () => {
      discordBtn.textContent = '💬 Join Our Discord';
    });
  }
});

// Optional: Back to top button feature (if needed)
// Uncomment to activate a "Back to Top" button (CSS required)
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  window.onscroll = () => {
    // Show button if scrolled more than 500px
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  };

  // Smooth scroll back to top when clicked
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
