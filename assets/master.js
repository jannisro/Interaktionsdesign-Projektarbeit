$('.accordion__header').on('click', function () {
    $(this).siblings('.accordion__body').toggle();
    $(this).parent().toggleClass('open');
});