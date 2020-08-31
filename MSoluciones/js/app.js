$(window).on('load', function () {
    $(".preloader").delay(350).fadeOut('slow');
    $("body").delay(350).css({ 'overflow': "visible" });    
});

$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").css('background-color', '#3B3D3C');


      }
    else {
        $(".navbar").css('background-color', '');

    }

});