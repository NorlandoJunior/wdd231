// Importar módulos (futuramente)
// import { loadMenu } from './menu.js';

// MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#menu-toggle');
    const navList = document.querySelector('.navbar ul');
  
    if (toggleButton && navList) {
      toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
      });
    }
  
    showLastVisitMessage();
  });
  
  // MENSAGEM COM LOCALSTORAGE
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
  