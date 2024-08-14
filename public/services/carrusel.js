document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slidesContainer = document.querySelector('.carousel-slides');
    let slides = Array.from(slidesContainer.children);
    let slidesToShow = window.innerWidth < 660 ? 1 : 4; // Número de diapositivas visibles
    let totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlides() {
        const offset = -currentIndex * (100 / slidesToShow);
        slidesContainer.style.transform = `translateX(${offset}%)`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToShow;
    }

    function moveSlide(direction) {
        if (direction === 'next' && currentIndex < totalSlides - slidesToShow) {
            currentIndex += 1;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex -= 1;
        }
        updateSlides();
    }

    function filterSlides(category) {
        slides = Array.from(slidesContainer.children);
        slides.forEach(slide => {
            slide.style.display = slide.dataset.category === category || category === 'all' ? '' : 'none';
        });

        currentIndex = 0;
        totalSlides = slides.filter(slide => slide.style.display === '').length;
        updateSlides();
    }

    function handleResize() {
        slidesToShow = window.innerWidth < 660 ? 1 : 4;
        updateSlides();
    }

    window.addEventListener('resize', handleResize);

    prevButton.addEventListener('click', () => moveSlide('prev'));
    nextButton.addEventListener('click', () => moveSlide('next'));

    document.querySelector('.tradicional').addEventListener('click', () => filterSlides('tradicional'));
    document.querySelector('.cupcake').addEventListener('click', () => filterSlides('cupcake'));
    document.querySelector('.tematico').addEventListener('click', () => filterSlides('tematico'));

    // Inicializa el carrusel mostrando la primera diapositiva
    updateSlides();
});








