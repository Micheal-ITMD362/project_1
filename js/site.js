$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    let userName = $("#name").val().trim();
    if (userName) {
      alert("Thanks for subscribing, " + userName + "!");
    } else {
      alert("Please enter your name before subscribing.");
    }
    $(this).trigger("reset");
  });
});