$('.accordion__header').on('click', function () {
    $(this).siblings('.accordion__body').toggle();
    $(this).parent().toggleClass('open');
});

function loadProfile(name) {
    const content = JSON.parse($('#' + name).html());
    $('#popup-name').html(content.name);
    $('#popup-location').html(content.location);
    $('#popup-age').html(content.age);
    $('#popup-image').css('background-image', 'url(' + content.image + ')');
    $('#popup-text').html(content.text);
    let sportsList = '';
    content.sports.forEach(function (item) {
        let time = ambition = '';
        if (item.time) {
            time = '<p>Lieblingszeit: '+item.time+'</p>';
        }
        if (item.ambition && item.ambition.length > 0) {
            ambition = '<p>Ziele: ';
            ambition += item.ambition.join(', ');
            ambition += '</p>';
        }
        sportsList += '<li class="list-group-item"><p><b>' + item.name + '</b> (' + item.skill + ')</p>' + time + ambition + '</li>';
    });
    $('#popup-sports').html(sportsList);
}

function setPopupSize() {
    $('.popup').css('width', $('.container').innerWidth() + 'px');
    $('.popup').css('height', $(window).innerHeight() - $('.menu').innerHeight());
    $('.popup').css('margin-left', ($(window).innerWidth() - $('.container').innerWidth()) / 2 + 'px');
    if ($(window).innerWidth() >= 800) {
        $('.popup').css('margin-top', $('.menu').innerHeight());
    }
}

$('.feed-item').on('click', function () {
    console.log($(this).attr('data-src'))
    setPopupSize();
    loadProfile($(this).attr('data-src'));
    $('.popup').fadeIn(400);
    $('.blur').fadeIn(400);
});

$('.popup__close, .blur').on('click', function () {
    $('.popup').fadeOut(400);
    $('.blur').fadeOut(400);
});