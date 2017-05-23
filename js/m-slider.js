$(document).ready(function(){

  $('.banner-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });


  $('.goods--slider-active').slick({
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    // infinite: true
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.m-news--slider-active').slick({
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    // infinite: true
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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
