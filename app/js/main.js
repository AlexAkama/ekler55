$(function() {

    $('.gallery__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // Плавный скролл
    $('.nav__link').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var element = $(id).offset().top;
        $('body,html').animate({
            scrollTop: element
        }, 500);
    });
});