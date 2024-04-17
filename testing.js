document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.image-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.image-slide');
        const nextButton = slider.querySelector('.next');
        const prevButton = slider.querySelector('.prev');
        let slideIndex = 0;

        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slides.length; // Loop within the bounds of the slides
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Circular movement
            updateSlidePosition();
        });

        function updateSlidePosition() {
            const slideWidth = slides[0].clientWidth; // Get the width of a single slide
            slider.querySelector('.image-slide-container').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        }
    });
});
