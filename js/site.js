jQuery(function ($) {
  $('html').removeClass('nojs').addClass('hasjs');
  
  $(".checkbox-container").on("click", function () {
    let checkbox = $("#subscribe");
    checkbox.prop("checked", !checkbox.prop("checked"));

    if (checkbox.prop("checked")) {
      $(".checkbox-container label").append(" <span class='checkmark'>&#10004;</span>");
    } else {
      $(".checkmark").remove();
    }
  });
});
