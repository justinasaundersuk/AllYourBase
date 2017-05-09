
$(window).load(function () {
    var theHash = window.location.hash;

    if (theHash != '') {
        // prepare the filter value for isotope
        theFilter = theHash.replace("#", ".");
    }

    if (theHash != "") {
        // Initial load
        $('.grid').isotope({
            percentPosition: true,
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });

        // filter with transition
        $('.grid').isotope({
            percentPosition: true,
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            filter: theFilter,
            transitionDuration: '1s',
            stagger: 80
        });

        // Set correct nav button active
        setActiveButtonHash(theFilter);
    }
    else {
        // default load for home
        $('.grid').isotope({
            percentPosition: true,
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });

        // set home active
        var homeLink = document.getElementById("home");
        $(homeLink).addClass("active");
    }

    // set height of flip back panel to same height as front (the image)
    $('.flip-container .back').matchHeight({
        byRow: false,
        property: 'height',
        target: $('.card-image'),
        remove: false
    });

    // mobile back to top scroll
    var amountScrolled = 300;

    $('a.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        }
        else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    // initiate carousels
    if ($('.owl-carousel').length) {
        $('#owl-ipad').owlCarousel({
            loop: true,
            margin: 10,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ["<span class='dam_font_angle-left-normal-nospace'></span>","<span class='dam_font_angle-right-normal-nospace'></span>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }
        });

        $('#owl-iphone').owlCarousel({
            loop: true,
            margin: 40,
            navText: ["<span class='dam_font_angle-left-normal-nospace'></span>", "<span class='dam_font_angle-right-normal-nospace'></span>"],
            responsiveClass: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });

        $('#owl-casestudies').owlCarousel({
            loop: true,
            margin: 40,
            navText: ["<span class='dam_font_angle-left-normal-nospace'></span>", "<span class='dam_font_angle-right-normal-nospace'></span>"],
            responsiveClass: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });
    }
});

// filter items on button click
$('.filter-button').on('click', function (e) {
    // if the href has a # value we need to allow the link back to home, then filter based on the hash value
    // will work in conjunction with a page load check to see if filtering needs to be applied
    var val = $(this).attr('href');
    var setButtonState = false;

    if (val.indexOf('#') == -1) {
        e.preventDefault();
        setButtonState = true;
    }

    var grid = $('.grid');
    var filterValue = $(this).attr('data-filter');
    var footer = $('.site-footer');

    // Hide the footer, fade back in after a delay
    hideFadeInFooter(footer);

    if (filterValue == 'undefined') {
        // Home will be the only button with no value
        clearFilter(grid);
    }
    else {
        // otherwise, apply the filter
        applyFilter(grid, filterValue);
    }

    if (setButtonState) {
        // Set navigation button active state
        setActiveButton($(this));
    }
    else {
        // must be the homepage
        $('.filter-button.reset').addClass('active');
    }
});

function clearFilter(grid) {
    grid.isotope({
        filter: '*'
    });
}

function applyFilter(grid, filterValue) {
    grid.isotope({
        filter: filterValue,
        transitionDuration: '1s',
        stagger: 80
    });
}

function hideFadeInFooter(element) {
    // hide the footer, otherwise will appear below the grid items
    $(element).hide();

    // fade the footer back into view with a delay
    $(element).delay(600).fadeIn(800);
}

function setActiveButton(buttonObj) {
    // sets active nav button when on homepage
    // remove all button active states
    $('.filter-button').removeClass('active');
    $('.filter-button.reset').removeClass('active');

    $(buttonObj).addClass('active');
}

function setActiveButtonHash(urlHashValue) {
    // sets active nav button when clicking from another page
    var activeButton = document.getElementById(urlHashValue);

    // remove all button active states
    $('.filter-button').removeClass('active');
    $('.filter-button.reset').removeClass('active');

    $(activeButton).addClass('active');
}

// homepage card rollover styles

// handle the overlay fadein
$(".overlay-panel").on('mouseenter mouseleave click', function () {
    $(this).find('.overlay').toggleClass('active');
});

// handle the flip toggle
$(".flip-container").on('mouseenter mouseleave click', function () {
    $(this).toggleClass('hover');
});

