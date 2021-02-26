// Select
var hamburger = document.querySelector(".mobileIcon");
var menu = document.querySelector(".mobileMenu");
var menuClose = document.querySelector(".mobileIconClose");

// Manipulate
hamburger.addEventListener("click", function() {
    menu.classList.toggle("mobileMenuToggle");
})

menuClose.addEventListener("click", function() {
    menu.classList.toggle("mobileMenuToggle");
}) 