$('.modal-city').each(function() {
  $(this).on("click", function() {
    $(".modal-choose-city").slideDown();
  });
  $('.close').on("click", function() {
    $(".modal-choose-city").slideUp();
  });
});
