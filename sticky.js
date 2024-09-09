window.addEventListener("scroll", function () {
    let nav = document.getElementById("menu_bar");
    if (window.pageYOffset >= 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});