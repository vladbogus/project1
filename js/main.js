$(document).ready(function() {
    // click on hashtags in tags area
    $('label.hashtag').on('change', function() {
        $(this).toggleClass('active');
    });

    // show filters on mobile
    $('.btn-filters').on('click', function() {
        $('.filters').addClass('active');
    });

    // close filters on mobile
    $('.filters .close-btn').on('click', function() {
        $('.filters').removeClass('active');
    });

    // accordion filters group
    $('.filters__group-name').on('click', function() {
        $(this).parent().toggleClass('active');
    });

    // popups
    $('.sign-in__link--reg').magnificPopup({
        items: {
            type: 'inline',
            src: '#popup-reg'
        }
    });

    $('.sign-in__link--login').magnificPopup({
        items: {
            type: 'inline',
            src: '#popup-login'
        }
    });

    // change input value
    $('.lk-change').on('click', function() {
        $(this).prev().attr('disabled', false);
        $(this).prev().focus();
    });

    // burger
    $('.burger').on('click', function() {
        $('.header').toggleClass('is-open');
        $(this).toggleClass('animate');
    });
});
