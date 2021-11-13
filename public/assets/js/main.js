/* ======= Fixed header when scrolled ======= */

$(window).bind('load', function () {
    if ($(window).scrollTop() > 0) {
        $('#header').addClass('header-scrolled');
    }
    else {
        $('#header').removeClass('header-scrolled');
    }
});
$(document).ready(function () {
    $('.tours-home ul li').mouseenter(function () {
        $(this).find('.txt p').show('slow');
        $(this).find('.typ-proce').show('slow');
        $(this).find('.viewdetail').animate({
            'padding-top': '31px',
            'padding-bottom': '32px'
        }, 'slow');
    });
    $('.tours-home ul li').mouseleave(function () {
        $(this).find('.txt p').hide('slow');
        $(this).find('.typ-proce').hide('slow');
        $(this).find('.viewdetail').animate({
            'padding-top': '10px',
            'padding-bottom': '10px'
        }, 'slow');
    });
});
$(document).ready(function () {


    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll resize', function () {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('header-scrolled');
        }
        else {
            $('#header').removeClass('header-scrolled');
        }
    });

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100 });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -50, 'axis': 'y' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });


});