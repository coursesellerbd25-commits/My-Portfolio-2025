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
/*const EduTrack = document.querySelector('#edu .edu-track');
const EduSlides = document.querySelectorAll('.edu-slide');
const EduNext = document.querySelector('.edu-next');
const EduPrev = document.querySelector('.edu-prev');

let EduIndex = 0;

function updateEduCarousel() {
    EduTrack.style.transform = `translateX(-${EduIndex * 100}%)`;
}

EduNext.addEventListener('click', () => {
    if (EduIndex < EduSlides.length - 1) {
        EduIndex++;
    } else {
        EduIndex = 0;
    }
        updateEduCarousel();
});

EduPrev.addEventListener('click', () => {
    if (EduIndex > 0) {
        EduIndex--;
    } else {
        EduIndex = EduSlides.length - 1;
    }
        updateEduCarousel();
});
window.addEventListener('resize', updateEduCarousel);*/

//Certificate & Achievement
document.addEventListener('DOMContentLoaded', () => {
const CerTrack = document.querySelector('#certiAchiev .carousel-track');
const CerNext = document.querySelector('#certiAchiev .cerNext');
const CerPrev = document.querySelector('#certiAchiev .cerPrev');

const maxSlides = 3;

let CerIndex = 0;

function updateCerCarousel() {
    CerTrack.style.transform = `translateX( -${CerIndex * 100}% )`;
}

updateCerCarousel();

CerNext.addEventListener('click', () => {
    if (CerIndex < maxSlides - 1) {
        CerIndex++;
    } else {
        CerIndex = 0;
    }
    updateCerCarousel();
});

CerPrev.addEventListener('click', () => {
    if(CerIndex > 0) {
        CerIndex--;
    } else {
        CerIndex = maxSlides - 1;
    }
    updateCerCarousel();
});
window.addEventListener('resize', updateCerCarousel);
});

