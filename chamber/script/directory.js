document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.querySelector("#members-container");
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    async function getMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Failed to load JSON");
            const members = await response.json();
            console.log("JSON Loaded:", members);
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member");

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberElement);
        });

        console.log("Members displayed:", membersContainer.innerHTML); 
    }

 
    gridButton?.addEventListener("click", () => {
        membersContainer.classList.add("grid-view");
        membersContainer.classList.remove("list-view");
    });

    listButton?.addEventListener("click", () => {
        membersContainer.classList.add("list-view");
        membersContainer.classList.remove("grid-view");
    });

    await getMembers();
});
