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

 $("#button").on("click", function (event) {
  event.preventDefault();
  let userName = $("#name").val().trim();
  if (userName) {
    alert("Thanks for subscribing, " + userName + "!");
  } else {
    alert("Please enter your name before subscribing.");
  }
});
});