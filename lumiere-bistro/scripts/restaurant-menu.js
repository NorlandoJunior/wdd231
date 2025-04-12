document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-items");

  async function loadMenu() {
    try {
      const response = await fetch("data/menu.json");
      const data = await response.json();

      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        `;

        menuContainer.appendChild(card);
      });
    } catch (err) {
      console.error("Error to load menu:", err);
      menuContainer.innerHTML = "<p>Error to load menu.</p>";
    }
  }

  loadMenu();
});
