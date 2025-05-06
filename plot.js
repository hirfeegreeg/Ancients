// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial trigger

// Rune hover effect for teaser (glow toggle)
const teaser = document.querySelector('.teaser');
if (teaser) {
  teaser.addEventListener('mouseenter', () => {
    teaser.style.color = '#f5e663';
    teaser.style.textShadow = '0 0 8px #f5e663';
  });
  teaser.addEventListener('mouseleave', () => {
    teaser.style.color = '#888';
    teaser.style.textShadow = 'none';
  });
}
