const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
function audio(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    
    // or with an ID
    
    var audio = document.getElementById("mySoundClip");
    audio.play();
}
function alarm(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
}

