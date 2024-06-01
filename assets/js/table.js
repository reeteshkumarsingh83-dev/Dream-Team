var THEMEMASCOT = {};
(function ($) {
    "use strict";

    THEMEMASCOT.isRTL = {
        check: function () {
            if ($("html").attr("dir") === "rtl") {
                return true;
            } else {
                return false;
            }
        },
    };

    THEMEMASCOT.isLTR = {
        check: function () {
            if ($("html").attr("dir") !== "rtl") {
                return true;
            } else {
                return false;
            }
        },
    };

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($(".preloader").length) {
            $(".preloader").delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($(".main-header").length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $(".header-style-one");
            var scrollLink = $(".scroll-to-top");
            var sticky_header = $(".main-header .sticky-header");
            if (windowpos > 100) {
                sticky_header.addClass("fixed-header animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                sticky_header.removeClass("fixed-header animated slideInDown");
                scrollLink.fadeOut(300);
            }
            if (windowpos > 1) {
                siteHeader.addClass("fixed-header");
            } else {
                siteHeader.removeClass("fixed-header");
            }
        }
    }
    headerStyle();

    //Submenu Dropdown Toggle
    if ($(".main-header li.dropdown ul").length) {
        $(".main-header .navigation li.dropdown").append(
            '<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>'
        );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".main-header .main-menu .navigation").html();

        $(".mobile-menu .navigation").append(mobileMenuContent);
        $(".sticky-header .navigation").append(mobileMenuContent);
        $(".mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });

        //Dropdown Button
        $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
            $(this).toggleClass("active");
        });

        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
            $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
            "click",
            function () {
                $("body").removeClass("mobile-menu-visible");
            }
        );
    }

    //Header Search
    if ($(".search-btn").length) {
        $(".search-btn").on("click", function () {
            $(".main-header").addClass("moblie-search-active");
        });
        $(".close-search, .search-back-drop").on("click", function () {
            $(".main-header").removeClass("moblie-search-active");
        });
    }

    //Banner Carousel
    if ($(".banner-carousel").length) {
        $(".banner-carousel").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: [
                '<span class="fa fa-long-arrow-alt-left"></span>',
                '<span class="fa fa-long-arrow-alt-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
            },
        });
    }

    //Banner Carousel
    if ($(".banner-carousel-home3").length) {
        $(".banner-carousel-home3").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: [
                '<span class="fa fa-long-arrow-alt-left"></span>',
                '<span class="fa fa-long-arrow-alt-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
            },
        });
    }

    //Banner Carousel
    if ($(".banner-carousel-home5").length) {
        $(".banner-carousel-home5").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: [
                '<span class="fa fa-long-arrow-alt-left"></span>',
                '<span class="fa fa-long-arrow-alt-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
            },
        });
    }

    // Services Carousel
    if ($(".services-carousel").length) {
        $(".services-carousel").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 15,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: [
                '<span class="flaticon-left-chevron"></span>',
                '<span class="flaticon-right-chevron"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            },
        });
    }

    // Project Carousel
    if ($(".project-carousel").length) {
        $(".project-carousel").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: false,
            margin: 30,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: [
                '<span class="flaticon-left-chevron"></span>',
                '<span class="flaticon-right-chevron"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1400: {
                    items: 4,
                },
            },
        });
    }

    // Testinomials Carousel
    if ($(".testimonial-slider").length) {
        var swiper = new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            direction: "horizontal",
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    direction: "vertical",
                },
            },
            on: {
                init: function () {
                    setSlideHeight(this);
                },
                slideChangeTransitionEnd: function () {
                    setSlideHeight(this);
                },
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
        });

        function setSlideHeight(that) {
            $(".swiper-ver tical .swiper-slide").css({ height: "auto" });
            var currentSlide = that.activeIndex;
            var newHeight = $(that.slides[currentSlide]).height() * 2 + 30;
            $(
                ".swiper-vertical .swiper-wrapper, .swiper-vertical .swiper-slide"
            ).css({ height: newHeight });
            that.update();
        }
    }

    //Testimonial-carousel
    if ($(".testimonial-slider-two").length) {
        var swiper = new Swiper(".testimonial-slider-two", {
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
    }

    //Clients Carousel
    if ($(".clients-carousel").length) {
        $(".clients-carousel").owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 400,
            autoplay: true,
            navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                1023: {
                    items: 5,
                },
            },
        });
    }

    //MixItup Gallery
    if ($(".filter-list").length) {
        $(".filter-list").mixItUp({});
    }

    //Accordion Box
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");

            if ($(this).hasClass("active") !== true) {
                $(outerBox).find(".accordion .acc-btn").removeClass("active ");
            }

            if ($(this).next(".acc-content").is(":visible")) {
                return false;
            } else {
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox)
                    .find(".accordion")
                    .children(".acc-content")
                    .slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }

    //Fact Counter + Text Count
    if ($(".count-box").length) {
        $(".count-box").appear(
            function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text(),
                    }).animate(
                        {
                            countNum: n,
                        },
                        {
                            duration: r,
                            easing: "linear",
                            step: function () {
                                $t.find(".count-text").text(
                                    Math.floor(this.countNum)
                                );
                            },
                            complete: function () {
                                $t.find(".count-text").text(this.countNum);
                            },
                        }
                    );
                }
            },
            { accY: 0 }
        );
    }

    //product bxslider
    if ($(".product-details .bxslider").length) {
        $(".product-details .bxslider").bxSlider({
            nextSelector: ".product-details #slider-next",
            prevSelector: ".product-details #slider-prev",
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            mode: "fade",
            auto: "true",
            speed: "700",
            pagerCustom: ".product-details .slider-pager .thumb-box",
        });
    }

    //Tabs Box
    if ($(".tabs-box").length) {
        $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).is(":visible")) {
                return false;
            } else {
                target
                    .parents(".tabs-box")
                    .find(".tab-buttons")
                    .find(".tab-btn")
                    .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .fadeOut(0);
                target
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .removeClass("active-tab animated fadeIn");
                $(target).fadeIn(300);
                $(target).addClass("active-tab animated fadeIn");
            }
        });
    }

    //Quantity box
    $(".quantity-box .add").on("click", function () {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".quantity-box .sub").on("click", function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                    .next()
                    .val(+$(this).next().val() - 1);
        }
    });

    //Price Range Slider
    if ($(".price-range-slider").length) {
        $(".price-range-slider").slider({
            range: true,
            min: 10,
            max: 99,
            values: [10, 60],
            slide: function (event, ui) {
                $("input.property-amount").val(
                    ui.values[0] + " - " + ui.values[1]
                );
            },
        });

        $("input.property-amount").val(
            $(".price-range-slider").slider("values", 0) +
                " - $" +
                $(".price-range-slider").slider("values", 1)
        );
    }

    // count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            },
            {
                accY: -50,
            }
        );
    }

    //Progress Bar
    if ($(".progress-line").length) {
        $(".progress-line").appear(
            function () {
                var el = $(this);
                var percent = el.data("width");
                $(el).css("width", percent + "%");
            },
            { accY: 0 }
        );
    }

    //LightBox / Fancybox
    if ($(".lightbox-image").length) {
        $(".lightbox-image").fancybox({
            openEffect: "fade",
            closeEffect: "fade",
            helpers: {
                media: {},
            },
        });
    }

    // Scroll to a Specific Div
    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                scrollTop: $(target).offset().top,
            });
        });
    }

    // Elements Animation
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

    $(window).on("scroll", function () {
        headerStyle();
    });

    /* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on("load", function () {
        handlePreloader();
    });
    /* ==========================================================================
   mobile screen slider
   ========================================================================== */
    $(".mobile-screen-slider").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
    /*==================================================
    [ Contact Form Validate ]
    ==================================================*/

    $("#contact_form").on("click", function () {
        var signInSuccess = {
            icon: "success",
            title: "Thank You",
            text: "Thank you for getting in touch! Your message has been received, and our team is on it. We'll be in contact with you shortly.",
            confirmButtonText: "Ok",
        };
        // jQuery("input").css({"margin-bottom": "0"});
        $.validator.addMethod(
            "phone_regex",
            function (value, element) {
                return this.optional(element) || /[6-9][0-9]{9}$/.test(value);
            },
            "Please enter a valid phone number"
        );

        $.validator.addMethod(
            "email_regex",
            function (value, element) {
                var regex =
                    /^(?!.*\.{2})+([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+\s*$/;

                return regex.test(value);
            },
            "Please enter a valid email address"
        );
        $.validator.addMethod("name_regex", function(value, element) {
            return this.optional(element) || /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/.test(value);
        }, "Please enter alphabets only");
        $.validator.addMethod("message_regex", function (value, element) {
            return this.optional(element) || /^([a-z0-9]+[\s]*)+$/i.test(value);
        });
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $(this).validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                form_name: "required",
                _message: "required",
                email: "required",
                _phone: {
                    minlength: 10,
                    maxlength: 10,
                    phone_regex: true,
                    required: true,
                },
                form_name: {
                    required: true,
                    minlength: 3,
                    maxlength: 20,
                    name_regex: true,
                },

                email: {
                    required: true,
                    email_regex: true,
                },
                _message: {
                    required: true,
                    minlength: 20,
                    maxlength: 200,
                    // message_regex:true,
                },
            },
            messages: {
                _message: {
                    minlength:
                        "Please enter at least 20 characters",
                    maxlength: "Please enter not more than 200 characters",
                },
                _phone: {
                    minlength: "Please enter 10 digits .",
                    maxlength: "Please enter not more than 10 digits",
                },
            },

            submitHandler: function () {
                swal.fire(signInSuccess).then((result) => {
                    if (result.isConfirmed) {
                        $("#contact_form").find("input").val("");
                        $("#contact_form").find("textarea").val("");
                        // jQuery("input").css({"margin-bottom": "30"});
                    }
                });
            },
        });
    });
    /*==================================================
    [ Contact Form Validate ]
    ==================================================*/

    $('input[name="_phone"]').keypress(function (event) {
        if (event.keyCode == 46 || event.keyCode == 8) {
            //do nothing
        } else {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    });
    $('#phone__').on('input', function() {
        var inputValue = $(this).val().replace(/\D/g, ''); // Remove non-digit characters
        if (inputValue.length > 10) {
            $(this).val(inputValue.slice(0, 10)); // Truncate input to 10 digits
        }
    });
})(window.jQuery);
