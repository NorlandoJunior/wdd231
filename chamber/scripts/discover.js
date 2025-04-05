// Fetch cards
fetch('data/places.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector('.card-grid');
    data.forEach((place, index) => {
      const card = document.createElement('article');
      card.classList.add('card', `card${index + 1}`);
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure><img src="${place.image}" alt="${place.name}"></figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <a href="${place.link}" target="_blank" class="learn-more-btn">Learn More</a>
      `;
      grid.appendChild(card);
    });
  });

// Last visit message
const visitMsg = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMsg.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitMsg.textContent = "You last visited 1 day ago.";
  } else {
    visitMsg.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);
