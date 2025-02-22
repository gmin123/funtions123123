document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let slideInterval;

    function updateSlider(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateSlider(currentIndex);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = parseInt(dot.dataset.index);
            updateSlider(currentIndex);
            startAutoSlide();
        });
    });

    updateSlider(currentIndex);
    startAutoSlide();
});
