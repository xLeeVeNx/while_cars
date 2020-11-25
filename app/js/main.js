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
  descriptionAdress.forEach(function (event) {
    event.style.color = 'black';
  })
  descriptionContacts.style.color = 'black';
  descriptionSocialLink.style.color = 'black';

}

function callBackDescriptionColor() {
  descriptionAdress.forEach(function (event) {
    event.style.color = 'white';
  })
  descriptionContacts.style.color = 'white';
  descriptionSocialLink.style.color = 'white';
}

descriptionContainer.addEventListener('mouseover', changeDescriptionColor);
descriptionContainer.addEventListener('mouseout', callBackDescriptionColor);

if (document.documentElement.clientWidth < 1080) {
  descriptionAdress.forEach(function (event) {
    event.style.color = 'white';
  })
  descriptionContacts.style.color = 'white';
  descriptionSocialLink.style.color = 'white';
  descriptionContainer.style.transition = 'none';
}

$(function () {
  $('.slider').slick({
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

  $(".about__btn").click(function () {
    this.className = this.className == "down" ? "up" : "down";
  });

  $(".rotate1").click(function () {
    $(".list__show1").slideToggle(500);
  });
  $(".rotate2").click(function () {
    $(".list__show2").slideToggle(500);
  });
  $(".rotate3").click(function () {
    $(".list__show3").slideToggle(500);
  });
  $(".rotate4").click(function () {
    $(".list__show4").slideToggle(500);
  });
  $(".rotate5").click(function () {
    $(".list__show5").slideToggle(500);
  });
  $(".rotate6").click(function () {
    $(".list__show6").slideToggle(500);
  });

  $('.assortment__button').on('click', function() {
    $(this).addClass('selected');
  });
});

$("[data-fancybox='gallery']").fancybox({
  thumbs: false,
  hash: false,
  loop: true,
  keyboard: true,
  toolbar: true,
  buttons: ["close"],
  animationEffect: "zoom",
  transitionEffect: "slide",
  arrows: true,
  openEffect: true,
  closeClick: true,
});

$('.header a, .up-sign').on('click', function () {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body, html").animate({
    scrollTop: top
  }, 1500);
});

var mixer = mixitup('.assortment__grid');
