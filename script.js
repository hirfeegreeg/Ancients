// Flicker effect for "Coming Soon" line - randomized for realism
const flickerText = document.querySelector('.coming-soon');

function flicker() {
  const flickerChance = Math.random();
  if (flickerChance > 0.9) {
    flickerText.style.opacity = '0.3';
  } else {
    flickerText.style.opacity = '1';
  }
}

setInterval(flicker, 300);

// Easter egg: Konami Code unlock (up, up, down, down, left, right, left, right, b, a)
let konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let keyPresses = [];

document.addEventListener('keydown', (e) => {
  // Prevent default action to stop scrolling with arrow keys
  e.preventDefault();

  keyPresses.push(e.key);
  if (keyPresses.length > konamiCode.length) {
    keyPresses.shift();
  }

  if (JSON.stringify(keyPresses) === JSON.stringify(konamiCode)) {
    revealSecret();
  }
});

function revealSecret() {
  const secret = document.createElement('div');
  secret.innerText = "You have unlocked the Ancient Secret!";
  secret.style.position = 'absolute';
  secret.style.top = '20px';
  secret.style.left = '50%';
  secret.style.transform = 'translateX(-50%)';
  secret.style.background = '#111';
  secret.style.color = '#f5e663';
  secret.style.padding = '1rem 2rem';
  secret.style.border = '2px solid #d4af37';
  secret.style.borderRadius = '10px';
  secret.style.fontSize = '1.2rem';
  secret.style.zIndex = '1000';
  secret.style.boxShadow = '0 0 20px #d4af37';
  document.body.appendChild(secret);

  setTimeout(() => {
    secret.remove();
  }, 5000);
}
