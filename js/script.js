// ===========================================
// HOPE Kilimanjaro Adventure
// Main JavaScript
// ===========================================

// Sticky header background
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(11,93,59,0.95)";
        header.style.transition = "0.3s";
    } else {
        header.style.background = "rgba(0,0,0,0.55)";
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Highlight active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
/* ==========================================
   HERO SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {

    let next = currentSlide + 1;

    if(next >= slides.length){
        next = 0;
    }

    showSlide(next);
}

function prevSlide() {

    let prev = currentSlide - 1;

    if(prev < 0){
        prev = slides.length - 1;
    }

    showSlide(prev);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    restartSlider();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    restartSlider();
});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

        restartSlider();

    });

});

function startSlider(){

    sliderInterval = setInterval(nextSlide,5000);

}

function restartSlider(){

    clearInterval(sliderInterval);

    startSlider();

}

startSlider();
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
<script>
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
    });
});
</script>
