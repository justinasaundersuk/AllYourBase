function publicationCategoryClear() {
    $(".publications-detail-links .publication-visible").each(function (i) {
        if (i % 2 === 0 && i !== 0) {
            $(this).css("clear", "both");
            $(this).css("border", "4px solid blue");
        }
    });
}

publicationCategoryClear();

$('.toggle-content').bind('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('toggle-active');
    $('.inner').toggleClass('open');
});