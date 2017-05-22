$(document).ready(function(){
  $('.content__right--slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });


  $('.goods--slider-active').slick({
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  (function($) {
      $(function() {

        $('#up').click(function() {
          $('html, body').animate({scrollTop: 0},500);
          return false;
        })

      })
  })(jQuery)


});
