const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const openModalBtn = document.getElementById("openModalBtn");

// Open Modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");  // Add show class to trigger animation
    }, 10);
};

// Close Modal
closeBtn.onclick = function() {
    modal.classList.remove("show");  // Remove the show class to hide with animation
    setTimeout(function() {
        modal.style.display = "none";  // Hide the modal after animation completes
    }, 300);  // Adjust timing to match animation duration
};

// Close Modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show"); // Remove the show class to trigger animation
        setTimeout(function() {
            modal.style.display = "none";  // Hide the modal after animation completes
        }, 300);
    }
};
