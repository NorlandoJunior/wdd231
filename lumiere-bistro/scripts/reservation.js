const form = document.getElementById('reservationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const data = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    location: document.getElementById('location').value,
  };

  localStorage.setItem('reservationData', JSON.stringify(data));
  window.location.href = "thankyou.html";
});

function openModal() {
  const modal = document.getElementById('locationModal');
  modal.style.display = 'flex'; // para centralizar com CSS Flexbox
}

function closeModal() {
  const modal = document.getElementById('locationModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('locationModal');
  if (event.target === modal) {
    closeModal();
  }
};
