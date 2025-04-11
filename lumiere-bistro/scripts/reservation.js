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
  document.getElementById('locationModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('locationModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('locationModal')) {
    closeModal();
  }
}