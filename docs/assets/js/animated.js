$(function () {
    $('.page-scroll a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 200
        }, {
            duration: "slow",
            easing: "easein"
        });
    });

});