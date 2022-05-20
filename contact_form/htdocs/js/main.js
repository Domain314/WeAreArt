$(document).ready(function () {
  $("#submit").on("click", function() {
    event.preventDefault();
    submit();
  })

});

function submit() {
  let userInput = {
    db: "contact",
    name: $("#name").val(),
    email: $("#email").val(),
    comment1: $("#comment1").val(),
    comment2: $("#comment2").val(),
    contactCheckbox: $("#contactCheckbox").val()
  }
  ajaxSubmit(userInput);
}


function ajaxSubmit(userInput) {
    let directory = document.location.origin + '/php/submit.php';

    $.ajax({
      method: "POST",
      url: directory,
      cache: false,
      async: true,
      data: userInput,
      success: function (response) {
        console.log("succ");
      },
      error: function (e) {
        console.log("error");
        console.log(e);
      }
    });
  }
