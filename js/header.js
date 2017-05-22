var stickyOffset = $('.header').offset().top;

  $(window).scroll(function(){

    var sticky = $('.header'),
     scroll = $(window).scrollTop();
     console.log(scroll)

     if (scroll >  stickyOffset ) {
       sticky.addClass('header-scrolled');
     }
     else {
       sticky.removeClass('header-scrolled'); }



});
