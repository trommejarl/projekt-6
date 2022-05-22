const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/* animering af x i menu + udfold af menu punkter */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/* ved klik på menu punkt - folde burger og menu sammen */
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } ))
