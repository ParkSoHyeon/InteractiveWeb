$(window).on('scroll', scrollHandler);

$('.menu-right').on('click', navHandler);

function scrollHandler() {
    let scrollTop = $(window).scrollTop();
    let headerSection = $('.header');
    let aboutSection = $('.about');
    let contactSection = $('.contact');
    let navbarButtons = $('.navbar .menu-right li button');

    if (scrollTop >= headerSection[0].offsetTop) {
        navbarButtons.css('color', '#FFFFFF');
        headerSection.find('.vertical-center').animate({ opacity: 1, top: 0 }, 1000);
    }

    if (scrollTop >= aboutSection[0].offsetTop) {
        navbarButtons.css('color', '#4A4A4A');
        aboutSection.find('.vertical-center').animate({ opacity: 1, top: 0 }, 1000);
        aboutSection.find('.bar').each(function (index, item) {
            $(item).find('.inner-bar').animate({ width: $(item).find('.percentage').text() }, 1000)
        })
    }

    if (scrollTop >= contactSection[0].offsetTop) {
        navbarButtons.css('color', '#4A4A4A');
        contactSection.find('.vertical-center').animate({ opacity: 1, top: 0 }, 1000);
    }
}

function navHandler(e) {
    let button = $(e.target);
    let sectionClassName = button[0].id.split('-')[0]
    let selectedSection = $(`.${ sectionClassName }`);

    $('html, body').animate({ scrollTop: selectedSection[0].offsetTop }, 1000);
}

scrollHandler();