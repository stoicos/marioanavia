// Carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
}));

//galeria
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(ref) {
    fullImgBox.style.display = "flex";
    fullImg.src = ref;
}

function closeImg() {
    fullImgBox.style.display = "none";
}

//cambiar background header
const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader)

