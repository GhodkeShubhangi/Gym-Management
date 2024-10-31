// JavaScript for Image Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide img'); // Select all the images
    const prevButton = document.getElementById('prev'); // Select the "Prev" button
    const nextButton = document.getElementById('next'); // Select the "Next" button
    let currentIndex = 0; // Initialize the current index to 0

    // Function to update the displayed slide
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none'; // Show only the current slide
        });
    }

    // Function to show the next slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Increment the index and wrap around if needed
        updateSlides(); // Update the slides
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement the index and wrap around if needed
        updateSlides(); // Update the slides
    }

    // Event listeners for the buttons
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Initialize the slider by showing the first slide
    updateSlides();
});
