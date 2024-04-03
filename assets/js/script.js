const navList = document.querySelector(".nav-list");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const cartButton = document.querySelector("#shopping-cart-button");
const cart = document.querySelector(".shopping-cart");

hamburgerMenu.addEventListener("click", (e) => {
  navList.classList.toggle("active");
  e.preventDefault();
});

search.addEventListener("click", (e) => {
  searchInput.classList.toggle("active");
  searchInput.focus();
  e.preventDefault();
});

cartButton.addEventListener("click", (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
});

document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }

  if (!search.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
  }

  if (!cart.contains(e.target) && !cartButton.contains(e.target)) {
    cart.classList.remove("active");
  }
});
