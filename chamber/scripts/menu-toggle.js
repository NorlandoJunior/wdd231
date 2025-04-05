const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');


menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});
