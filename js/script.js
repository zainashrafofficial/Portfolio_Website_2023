$(document).ready(function () {
    // PreLoader
    // $(window).on('load', function () {
    //     $('.preloader').addClass('complete');
    // });

    // Scrolling 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        }
        else {
            $(".sticky").removeClass("stickyadd");
        }
    });


    // Typing Efffect in Home Page
    var typed = new Typed(".element", {
        strings: ["Zain Ashraf", "a Developer", "a Designer", "a Digital Marketer"],
        smartBackspace: true,
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // Progress bars using Librarye Waypoints

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:96%;transition:1s all");
            p[1].setAttribute("style", "width:97%;transition:1s all");
            p[2].setAttribute("style", "width:90%;transition:1s all");
            p[3].setAttribute("style", "width:88%;transition:1s all");
            p[4].setAttribute("style", "width:88%;transition:1s all");
            p[5].setAttribute("style", "width:90%;transition:1s all");
            p[6].setAttribute("style", "width:88%;transition:1s all");
            p[7].setAttribute("style", "width:78%;transition:1s all");
        }, offset: '70%'
    });

    // Filterized Class (Library) for Pics Filerizing

    var filterizd = $('.filter-container').filterizr({
        animationDuration: 0.5
    });

    // Owl Carousel using Library
    $(".owl-carousel").owlCarousel({
        lopp: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1
    });


});