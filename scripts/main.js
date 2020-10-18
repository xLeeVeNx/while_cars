$(document).ready(function() {

    $(".about__btn").click(function() {
        this.className = this.className == 'down' ? 'up' : 'down';
    });

    $(".rotate1").click(function() {
        $(".list__show1").slideToggle(500);
    });
    $(".rotate2").click(function() {
        $(".list__show2").slideToggle(500);
    });
    $(".rotate3").click(function() {
        $(".list__show3").slideToggle(500);
    });
    $(".rotate4").click(function() {
        $(".list__show4").slideToggle(500);
    });
    $(".rotate5").click(function() {
        $(".list__show5").slideToggle(500);
    });
    $(".rotate6").click(function() {
        $(".list__show6").slideToggle(500);
    });
});

$(".images__inner a").fancybox({
    animationEffect : 'fade'
}).attr('data-fancybox', 'gallery');

$("[data-fancybox]").fancybox({
    thumbs : false,
    hash : false,
    loop : true,
    keyboard : true,
    toolbar : true,
    buttons: [
        "close"
      ],
    animationEffect : false,
    arrows : true,
    openEffect : true,
    closeClick : true
});

