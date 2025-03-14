document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.querySelector("#members-container");
    const toggleButton = document.querySelector("#toggle-view");

    let isGridView = true;

    async function getMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = ""; 
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member", isGridView ? "grid-item" : "list-item");

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberElement);
        });
    }

    toggleButton.addEventListener("click", () => {
        isGridView = !isGridView;
        membersContainer.classList.toggle("grid-view", isGridView);
        membersContainer.classList.toggle("list-view", !isGridView);
        getMembers();
    });

    getMembers();
});
