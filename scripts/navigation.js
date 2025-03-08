document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados!");
    }
});
