// preloader
$('body').addClass('no-scroll');

setTimeout(function () {
    $('body').removeClass('no-scroll');
}, 4500);

// mobile submenu
$('.menu_submenu').click(function (e) {
    e.preventDefault();
    $('.sub-menu_mobile').addClass('active');
})

$('.sub-menu_mobile-close').click(function (e) {
    e.preventDefault();
    $('.sub-menu_mobile').removeClass('active');
})

// team slick slider
$('.team-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    speed: 1300,
    dots: true,
    prevArrow: '<button class="team-slider__arrow team-slider__arrow_1"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2" stroke="white" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="team-slider__arrow team-slider__arrow_2"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2" stroke="white" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
});

// sticky header
window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    console.log(scroll);
     if (scroll > 80) {
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }

});


  