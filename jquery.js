$(function() {
    $(window).on('scroll', function() {
        $('.parallax').css('margin-top', $(window).scrollTop() * -.3);
    });
});

$(function() {
    $(window).on('scroll', function() {
        $('.parallax1').css('margin-top', $(window).scrollTop() * -.3);
    });
});