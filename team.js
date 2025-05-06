const reveals = document.querySelectorAll('.reveal');

const observerOptions = {
  root: null, // Use the viewport as the root element
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'revealed' class when the element is 10% in the viewport
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); // Stop observing once the element is revealed
    }
  });
}, observerOptions);

// Start observing each reveal element
reveals.forEach(el => observer.observe(el));
