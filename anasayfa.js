// HEADER--HAMBURGER-MENU

function openMenu() {
    document.getElementById("hamburger").style.width = "100%";
    document.getElementById("hamburger").style.transition = "width 1.3s ease"
}
function closeMenu() {
    event.preventDefault();
    document.getElementById("hamburger").style.width = "0%";
    document.getElementById("hamburger").style.transition = "width .6s ease"
}

// SECTİON-1 -- SLİDER

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});