// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
