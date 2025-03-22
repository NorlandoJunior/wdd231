document.addEventListener("DOMContentLoaded", () => {
    const eventsList = [
        { name: "Networking Breakfast", date: "March 25, 2025", location: "Chamber Office" },
        { name: "Business Expo", date: "April 5, 2025", location: "Expo Center" },
        { name: "Startup Pitch Event", date: "April 12, 2025", location: "City Hall" },
    ];

    const eventsContainer = document.getElementById("events-list");

    eventsList.forEach(event => {
        const eventElement = document.createElement("li");
        eventElement.classList.add("event");
        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
});
