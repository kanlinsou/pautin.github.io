//Script pour le menu 
// Fonction pour afficher ou masquer le menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";}
}
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-image");
let intervalTime = 3000;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); }
slides[index].classList.add("active");}

function changeImage(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);}

function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);}

setInterval(autoSlide, intervalTime); 
showSlide(slideIndex);