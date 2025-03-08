jQuery(function ($) {
  $('html').removeClass('nojs');
  $("html").addClass("hasjs");
  $(".checkbox-container").on("click", function () {
    $("#subscribe").prop("checked", true);
    $(".checkbox-container").html("<p>&#10004;</p>");
  });
});
