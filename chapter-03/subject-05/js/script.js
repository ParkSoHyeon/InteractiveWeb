$(window).on('scroll', scrollHandler);

$('.to-top-btn').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

function scrollHandler() {
    let windowBottom = $(window).scrollTop() + $(window).height();

    $('.playlist').each(function (index, item) {
        let itemHalf = $(item)[0].offsetTop + ($(item)[0].offsetHeight / 2);

        if (windowBottom > itemHalf) {
            $(item).animate({ opacity: 1 }, 1500);
        }
    });

    if (windowBottom >= $(document).height()) {
        $('.to-top-btn').fadeIn(1000);
        // $('.to-top-btn').animate({ display: 'block' }, 1500);
    }
    else {
        $('.to-top-btn').fadeOut(1000);
    }
}

scrollHandler();