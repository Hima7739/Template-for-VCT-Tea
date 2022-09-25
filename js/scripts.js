let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartContainer.classList.remove("active");
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartContainer.classList.remove("active");
}

let cartContainer = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
    cartContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}

window.onscroll = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cartContainer.classList.remove("active");
}