$(document).ready(function() {
  console.log("ready!");

  $(window).resize(function() {
    if ($(this).width() > 680) {
      $("#mobile-nav-bar").css("display", "none");
      $("#burger-link").click(function() {
        $("#mobile-nav-bar").css("display", "block");
      });
    }
  });
});
