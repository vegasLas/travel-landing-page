$(document).ready(function () {
    $('.burger-navbar').click(function () {
        $('.burger-navbar,.header__navbar,.header').toggleClass('active')
        $('body').toggleClass('lock')
    });
});