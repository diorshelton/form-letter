$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const inputName= $("input#name").val();

    $(".yourname").text(inputName);
    event.preventDefault();
    $(".row").fadeIn();
    $(".form").hide();

    $(".row button").click(function() {
      $(".form").show();
      $(".row").fadeOut();
    });

  });
});