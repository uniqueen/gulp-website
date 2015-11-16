// slider
// $(function() {
//     $('.banner').unslider();
// });

//product tabs
$(document).ready(function() {
    $('.tabs li').click(function() {
        var contentUrl = $(this).attr('href');
        $('.tabs li').removeClass('active-product');
        $(this).addClass('active-product');
        $('.product-all').css('display', 'none');
        $(contentUrl).css('display', 'block');
    });
});

//productsummy tabs
$(document).ready(function() {
    $('.Product-tabs a').click(function() {
        var contentUrl = $(this).attr('href');
        $('.Product-tabs a').removeClass('Pro-active');
        $(this).addClass('Pro-active');
        $('.Product').css('display', 'none');
        $(contentUrl).css('display', 'block');
    });
});


//problem
$(document).ready(function() {
    $('.p-click').click(function() {
        if ($(this).children('p').css("display") == "none") {
            $(this).children('p').css('display', 'block');
        } else {
            $(this).children('p').css('display', 'none');
        }
    });
});



//hire
$(function() {
    $('.job-case').click(function() {
        $(this).children().find('.pop-case').show(0, function() {
            $('.close-pop-case').click(function() {
                $('.pop-case').hide(0);
                return false;
            });
        });
    });
});



// go to top
$(function() {
    $('.to-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
});


//product-all nav->tab jump
jQuery(document).ready(function($) {

    var url = window.location.href;
    var startUrl = window.location.href.search('html#');
    if (startUrl > 1) {
        var lastUrl = url.length;
        testId = '.' + url.substr(startUrl + 5, lastUrl).toLowerCase();
        $('.tabs').children(testId).click();
    }

    var chooseTab = $('.choose-tab,.tabs');
    chooseTab.children('li').click(function() {
        var id = $(this).attr('href');
        var index = $(this).index();
        chooseTab.children('li').removeClass('active-product');
        $('.choose-tab li').eq(index).removeClass('active');
        $('.tabs li').eq(index).addClass('active-product');
        $('.product-tabs-body .product-all').css('display', 'none');
        $('.hire-tabs-body .product-all').css('display', 'none');
        $(id).css('display', 'block');
    });

});
