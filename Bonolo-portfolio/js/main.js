$(document).ready(function() {
    'use strict';

    // Fake loader initialization
    $('.fakeLoader').fakeLoader({
        timeToHide: 1200,
        zIndex: 999, // Removed quotes, as it's a number
        spinner: "spinner3",
        bgColor: "#212121"
    });

    // Smooth scroll for anchor links
    $("a[href^='#']").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 50
            }, 850);
        }
    });

    // Hide navbar on mobile after clicking a link
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Initialize carousel for resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // Collapse show on resume section
    $('.collapse-show').collapse();

    // Wait for window load to ensure all elements are loaded
    $(window).on('load', function() {
        // Initialize portfolio filterizr with imagesLoaded
        $('.filtr-container').imagesLoaded(function() {
            if ($('.filtr-container').length > 0) {
                try {
                    $('.filtr-container').filterizr();
                    console.log("Filterizr initialized successfully.");
                } catch (error) {
                    console.error("Error initializing Filterizr:", error);
                }
            } else {
                console.error("Portfolio container '.filtr-container' not found.");
            }
        });
    });

    // Portfolio filter menu item click handler
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // Initialize magnific popup for portfolio items
    $('.portfolio').magnificPopup({
        delegate: '.portfolio-popup',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Navbar fixed position on scroll
    $(window).on("scroll", function() {
        var vScroll = $(this).scrollTop();
        $(".navbar").toggleClass("fix", vScroll > 100);
    });
});