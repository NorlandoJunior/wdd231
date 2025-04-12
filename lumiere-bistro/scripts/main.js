window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

function showLastVisitMessage() {
  const welcomeMsg = document.querySelector('#welcome-msg');
  if (!welcomeMsg) return;

  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (lastVisit) {
    const diff = now - parseInt(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    welcomeMsg.textContent = `Welcome back! It's been ${days} day(s) since your last visit.`;
  } else {
    welcomeMsg.textContent = "Welcome to Lumière Bistro! We're glad you're here.";
  }

  localStorage.setItem('lastVisit', now.toString());
}
