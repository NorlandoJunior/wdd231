document.addEventListener('DOMContentLoaded', () => {
    const detailsList = document.getElementById('reservationDetails');
    const locationImage = document.getElementById('locationImage');
    const data = JSON.parse(localStorage.getItem('reservationData'));
  
    if (data) {
      detailsList.innerHTML = `
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Location:</strong> ${data.location}</li>
        <li><strong>Date:</strong> ${data.reservationDate}</li>
        <li><strong>Time:</strong> ${data.reservationTime}</li>
      `;
  
      
      let imagePath = "";
      switch (data.location) {
        case "Patio Garden":
          imagePath = "images/garden-roof-top.webp";
          break;
        case "Wine Cellar":
          imagePath = "images/wine-cellar.webp";
          break;
        case "Rooftop Lounge":
          imagePath = "images/roof-top-lounge.webp";
          break;
        default:
          imagePath = "images/default.jpg";
      }
  
      locationImage.src = imagePath;
      locationImage.alt = data.location;
    } else {
      detailsList.innerHTML = `<li>No reservation data found.</li>`;
    }
  });
  