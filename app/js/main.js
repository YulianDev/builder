$(function(){
    let mixer = mixitup('.portfolio__content');
    $('.reasons__slider-list').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.module__slider').slick({
        draggable: false,
        autoplay: true,
    });
});