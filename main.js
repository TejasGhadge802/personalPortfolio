console.log('Hello World!');

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

