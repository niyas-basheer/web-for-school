$(document).ready(function () {
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        $('.box').each(function () {
            let boxPos = $(this).offset().top;
            if (scrollPos + $(window).height() > boxPos) {
                $(this).addClass('animate');
            }
        });
    });
});
