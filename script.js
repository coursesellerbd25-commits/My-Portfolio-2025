const projectTrack = document.querySelector('#projects .carousel-track');
const slides = document.querySelectorAll('.project');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const aboutTrack = document.querySelector('#about-carousel .carousel-track');
const aboutSlides = document.querySelectorAll('#about-carousel section');
const aboutNext = document.getElementById('about-next');
const aboutPrev = document.getElementById('about-prev');

let index = 0;
let aboutIndex = 0;

//Projects
function updateCarousel() {
    projectTrack.style.transform = `translateX(-${index * 100}%)`;
}
nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1){
        index++;
        updateCarousel();
    }
});
prevBtn.addEventListener('click', () => {
    if(index > 0) {
        index--;
        updateCarousel();
    }
});

//About
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
