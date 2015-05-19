$(document).ready(function() {
  $("#three").click(function() {
  $('#three').fadeOut(function() {
    $(this).load(function() {
      $(this).fadeIn();
    });
    $(this).attr("src", "images/cheshire.png");
  });
  });
});
