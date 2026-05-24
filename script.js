//About
const aboutTrack = document.querySelector('#about-carousel .carousel-track');
const aboutSlides = document.querySelectorAll('#about-carousel section');
const aboutNext = document.getElementById('about-next');
const aboutPrev = document.getElementById('about-prev');


let aboutIndex = 0;

function updateAboutCarousel() {
    const width = aboutSlides[0].offsetWidth;
    aboutTrack.style.transform = `translateX(-${aboutIndex * width}px)`;
}

aboutNext.addEventListener('click', () => {
    if (aboutIndex < aboutSlides.length - 1) {
        aboutIndex++;
    } else {
        aboutIndex = 0;
    }
    updateAboutCarousel();
});
aboutPrev.addEventListener('click', () => {
    if(aboutIndex > 0) {
        aboutIndex--;
    } else {
        aboutIndex = aboutSlides.length - 1;
    }
    updateAboutCarousel();
});
window.addEventListener('resize', updateAboutCarousel);

// Initialize carousel position
updateAboutCarousel();

