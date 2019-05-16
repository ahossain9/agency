(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testi-carousel').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

    });

    /*---------------------------------------------------
        accordian
    ----------------------------------------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });

    /*---------------------------------------------------
        wow js activation
    ----------------------------------------------------*/
    new WOW().init();


}(jQuery));
