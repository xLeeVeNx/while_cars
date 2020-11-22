const burger = document.querySelector('.header__burger');

const menuHeader = document.querySelector('.header__menu');

const body = document.querySelector('.page');
function classActiveAdd() {
    burger.classList.toggle('active');
    menuHeader.classList.toggle('active');
    body.classList.toggle('lock');
}

burger.addEventListener('click', classActiveAdd);


const descriptionContainer = document.querySelector('.description__container');
const descriptionAdress = Array.from(descriptionContainer.querySelectorAll('.description__adress'));
const descriptionContacts = descriptionContainer.querySelector('.description__contacts');
const descriptionSocialLink = descriptionContainer.querySelector('.description__social-link');
function changeDescriptionColor() {
    descriptionAdress.forEach(function(event) {
        event.style.color = 'black';
    })
    descriptionContacts.style.color = 'black';
    descriptionSocialLink.style.color = 'black';
    
}

function callBackDescriptionColor() {
    descriptionAdress.forEach(function(event) {
        event.style.color = 'white';
    })
    descriptionContacts.style.color = 'white';
    descriptionSocialLink.style.color = 'white';
}

descriptionContainer.addEventListener('mouseover', changeDescriptionColor);
descriptionContainer.addEventListener('mouseout', callBackDescriptionColor);

if (document.documentElement.clientWidth < 1080) {
    descriptionAdress.forEach(function(event) {
        event.style.color = 'white';
    })
    descriptionContacts.style.color = 'white';
    descriptionSocialLink.style.color = 'white';
    descriptionContainer.style.transition = 'none';
}


$(document).ready(function() {
    $('.slider').slick( {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: true,
        fade: true,
        centerMode: true,
    });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



