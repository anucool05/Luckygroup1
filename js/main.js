/*price range*/

if ($.fn.slider) {
    $('#sl2').slider();
}

var RGBChange = function () {
    $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
};


$('.new-sub-menu').width(window.innerWidth - 100);
/*scroll to top*/

$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });

});

$(window).scroll(function(){
    if(document.documentElement.scrollTop > 150){
        $('header').addClass("headerPropChange");
        $('.new-sub-menu').addClass("headerPropChange");
        $('.contactinfo').addClass("headerPropChange");
        $('.header-middle').addClass("headerPropChange");
        $('.mainmenu').addClass("headerPropChange");
    }else{
        $('header').removeClass("headerPropChange");
        $('.new-sub-menu').removeClass("headerPropChange");
        $('.contactinfo').removeClass("headerPropChange");
        $('.header-middle').removeClass("headerPropChange");
        $('.mainmenu').removeClass("headerPropChange");
    }
});

function searchBlockClick(){
    console.log(1)
    // document.documentElement.scrollTop
}