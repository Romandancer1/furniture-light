$('.modal-city').each(function() {
  $(this).on("click", function() {
    $(".modal-choose-city").slideDown();
  });
  $('.close').on("click", function() {
    $(".modal-choose-city").slideUp();
  });
});

$('.nav__login').each(function() {
  $(this).on("click", function() {
    $(".modal-login").slideDown();
  });
  $('.login-close').on("click", function() {
    $(".modal-login").slideUp();
  });
});
