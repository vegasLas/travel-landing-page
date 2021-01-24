$(document).ready(function () {
    $('.burger-navbar').click(function () {
        $('.burger-navbar,.header_navbar,.header').toggleClass('active')
        $('body').toggleClass('lock')
    });
});