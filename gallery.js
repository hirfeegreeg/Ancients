const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.9;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger && !el.classList.contains('revealed')) {
      el.classList.add('revealed');
    }
  });
}

// Attach event listener for scroll
window.addEventListener('scroll', revealOnScroll);

// Trigger the reveal on page load
document.addEventListener('DOMContentLoaded', revealOnScroll);
