const mobileMenu = document.querySelector(".navigation-mobile");
const closeIcon = document.querySelector(".navigation-mobile__close-icon");
const menuBtn = document.querySelector(".burger-btn");

closeIcon.addEventListener("click", () => {
  if (mobileMenu.classList.contains("show")) {
    document.querySelector("header").style.height = "";
    mobileMenu.classList.remove("show");
  }
});
menuBtn.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("show")) {
    document.querySelector("header").style.height = "100vh";
    mobileMenu.classList.add("show");
  }
});

