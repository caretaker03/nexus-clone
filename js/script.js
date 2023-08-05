let nav_mobile = document.querySelector(".nav-mobile");

function toggleBtn() {
    if (nav_mobile.style.display == "none") {
        nav_mobile.style.display = "block";
    } else {
        nav_mobile.style.display = "none";
    }
}