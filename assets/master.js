$('.accordion .card-header').on('click', function () {
    $(this).siblings('.card-body').toggle();
    $(this).parent().toggleClass('open');
});