window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Verifica se o clique é detectado
  menuToggle.addEventListener('click', () => {
    console.log('Menu button clicked');  // Verifica se o botão está sendo clicado
    navLinks.classList.toggle('active'); // Alterna a classe 'active' no menu
    console.log(navLinks.classList); // Verifica as classes aplicadas no menu
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
