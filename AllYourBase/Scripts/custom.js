
// filter items on button click
$('.filter-button').on('click', function () {
    var $grid = $('.grid');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});