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

//Projects
const projectTrack = document.querySelector('#projects .carousel-track');
const slides = document.querySelectorAll('#projects .project');
const nextBtn = document.querySelector('#projects .next-btn');
const prevBtn = document.querySelector('#projects .prev-btn');

let index = 0;

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
window.addEventListener('resize', updateCarousel);

//Education
const eduTrack = document.querySelector('.edu-track');
const eduSlides = document.querySelectorAll('.edu-slide');
const eduNext = document.querySelector('.edu-next');
const eduPrev = document.querySelector('.edu-prev');

let eduIndex = 0;

function updateEduCarousel() {
    const slideWidth = eduSlides[0].offsetWidth;
    eduTrack.style.transform = `translateX(-${eduIndex * 100}%)`;
}

if (eduNext && eduPrev && eduTrack) {
    eduNext.addEventListener('click', () => {
        if (eduIndex < eduSlides.length - 1) {
            eduIndex++;
        } else {
            eduIndex = 0;
        }
        updateEduCarousel();
    });

    eduPrev.addEventListener('click', () => {
        if (eduIndex > 0) {
            eduIndex--;
        } else {
            eduIndex = eduSlides.length - 1;
        }
        updateEduCarousel();
    });

    window.addEventListener('resize', updateEduCarousel);
}
//Certificate & Achievement
document.addEventListener('DOMContentLoaded', () => {
    const CerTrack = document.querySelector('#certiAchiev .carousel-track');
    const CerSlides = document.querySelectorAll('#certiAchiev .cerSlide');
    const CerNext = document.querySelector('#certiAchiev .cerNext');
    const CerPrev = document.querySelector('#certiAchiev .cerPrev');

    const maxSlides = CerSlides.length; // Use actual number of slides

    let CerIndex = 0;

    function updateCerCarousel() {
        if (CerTrack) {
            CerTrack.style.transform = `translateX(-${CerIndex * 100}%)`;
        }
    }

// Initialize
    updateCerCarousel();

if (CerNext && CerPrev && CerTrack) {
        CerNext.addEventListener('click', () => {
            if (CerIndex < maxSlides - 1) {
                CerIndex++;
            } else {
                CerIndex = 0;
            }
            updateCerCarousel();
        });

        CerPrev.addEventListener('click', () => {
            if (CerIndex > 0) {
                CerIndex--;
            } else {
                CerIndex = maxSlides - 1;
            }
            updateCerCarousel();
        });
    }

    window.addEventListener('resize', updateCerCarousel);
});
