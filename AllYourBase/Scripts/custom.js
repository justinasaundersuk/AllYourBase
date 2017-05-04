
$(window).load(function () {
    // initial isotope load
    $('.grid').isotope({
        percentPosition: true,
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });

    // set height of flip back panel to same height as front (the image)
    $('.flip-container .back').matchHeight({
        byRow: false,
        property: 'height',
        target: $('.card-image'),
        remove: false
    });

    // initiate carousels
    if ($('.owl-carousel').length) {
        $('#owl-ipad').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
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
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
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
    e.preventDefault();

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

    // Set navigation button active state
    setActiveButton($(this));
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
    // remove all button active states
    $('.filter-button').removeClass('active');
    $('.filter-button.reset').removeClass('active');

    $(buttonObj).addClass('active');
}

// handle the flip toggle
$(".flip-container").on('mouseenter mouseleave click', function () {
    $(this).toggleClass('hover');
});

