$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").css('background-color', '#3B3D3C');
      }
    else {
        $(".navbar").css('background-color', '');
    }

});