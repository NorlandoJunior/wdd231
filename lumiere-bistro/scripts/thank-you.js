const summary = document.getElementById('summary');
    const data = JSON.parse(localStorage.getItem('reservationData'));

    if (data) {
      summary.innerHTML = `
        <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
        <strong>Phone:</strong> ${data.phone}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Chosen Location:</strong> ${data.location}<br><br>
        We look forward to seeing you at <strong>${data.location}</strong>!
      `;
    } else {
      summary.textContent = "No reservation data found.";
    }