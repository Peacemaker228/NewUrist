const burgerBtn = document.querySelector(".burger");
const headerCont = document.querySelector(".header__container");

burgerBtn.addEventListener("click", () => {
    headerCont.classList.toggle("active");
    burgerBtn.classList.toggle("clicked");
});