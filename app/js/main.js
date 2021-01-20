$(function() {
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