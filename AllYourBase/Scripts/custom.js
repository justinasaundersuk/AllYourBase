
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
});

// filter items on button click
$('.filter-button').on('click', function (e) {
    e.preventDefault();
    var $grid = $('.grid');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue,
        transitionDuration: '1s',
        stagger: 30
    });
    // set button active state
    $('.filter-button').removeClass('active');
    $(this).addClass('active');
});

// handle the flip toggle
$(".flip-container").on('mouseenter mouseleave click', function () {
    $(this).toggleClass('hover');
});

