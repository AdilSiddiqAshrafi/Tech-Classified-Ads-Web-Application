// when page load dispaly modal
window.onload = function () {
    let locationModal = new bootstrap.Modal(document.getElementById("locationmodal"));
    locationModal.show();
}
// change color of btn on  click
document.querySelectorAll(".btn").forEach(e => {
    e.addEventListener("click", () => {
        e.removeAttribute("style")
        setTimeout(() => {
            e.style.backgroundColor = "#ff0095";
            e.style.borderColor = "#ff0095";
        }, 100);
    });
});

// sidebar of page disappear when become small and show ham-icon
let hamburger = document.getElementById("hamburger")
let sidebar = document.getElementById("side")
let mainContent = document.getElementById("maincontent")

function side() {
    if (window.innerWidth < 650) {
        sidebar.classList.add("d-none")
        hamburger.classList.remove("d-none")
        mainContent.classList.remove("w-75")
        mainContent.classList.add("w-100")
    } else {
        sidebar.classList.remove("d-none")
        hamburger.classList.add("d-none")
        mainContent.classList.remove("w-100")
        mainContent.classList.add("w-75")
    }
}
// Eventlistner for when windows accurate resize 
side();
window.addEventListener("resize", side)
