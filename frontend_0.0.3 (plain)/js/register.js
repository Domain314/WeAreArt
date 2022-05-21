var name = '';
var email = '';
var mobile = '';
var city = '';
var art = '';
var questions = '';

function passData() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    mobile = document.getElementById("mobile").value;
    city = document.getElementById("city").value;
    art = document.getElementById("art").value;
    questions = document.getElementById("questions").value;

    // console.log(name);
    // console.log(email);
    // console.log(mobile);
    // console.log(city);
    // console.log(art);
    // console.log(questions);

    register();
}

function register() {
    //check for username
    if(name.length < 1) {
        console.log("no username");
        alert("pleaser enter a username...");
      }

      //Email check
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if (!regex.test(email)) {
        console.log("email invalid");
        alert("Please enter a valid email.");
      };

      if(name.length > 1 && (regex.test(email))) {
        console.log("...valid data...");
        alert("Thank you! We will come back to you soon!");

        //READY FOR PHP REQUEST -->
        submit();
        /*

        Data:

        name = Name - string
        email = Email - string
        mobile = Telefonnummer - string
        hometown = Stadt - string
        art = was für Kunst? - string
        questions = offene Fragen? - string

        */

        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mobile").value = '';
        document.getElementById("city").value = '';
        document.getElementById("art").value = '';
        document.getElementById("questions").value = '';

      } else {
        console.log("something went wrong");
      }
}

function submit() {
  let userInput = {
    db: "contact",
    name: $("#name").val(),
    email: $("#email").val(),
    mobile: $("#mobile").val(),
    city: $("#city").val(),
    art: $("#art").val(),
    questions: $("#questions").val()
  }
  ajaxSubmit(userInput);
}


function ajaxSubmit(userInput) {
    let directory = "https://domain314.ddns.net/weareart/backend/php/submit.php";

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
