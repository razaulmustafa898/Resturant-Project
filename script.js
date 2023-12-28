function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.opacity = "0.95";
  } else {
    x.className = "topnav";
  }
}

let counter = 1;
setInterval(function () {
  let counter_result = document.getElementById("radio" + counter);
  counter_result.checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // In a real application, you would send this data to a server for registration and handle the response accordingly.
    // For this example, we'll just simulate a successful registration.
    document.getElementById("mypage").innerHTML =
      "You can successfully Sign Up " + username;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // In a real application, you would send this data to a server for registration and handle the response accordingly.
    // For this example, we'll just simulate a successful registration.
    document.getElementById("mypage").innerHTML =
      "You can successfully log in " + username;
  });
});

function search() {
  let filter = document.getElementById("searchinput").value.toUpperCase();
  let item = document.querySelectorAll(".card");
  let heading = document.getElementsByClassName("card_1");

  for (var i = 0; i <= heading.length; i++) {
    let a = item[i].getElementsByClassName("card_1")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
function home_search() {
  let filter = document.getElementById("searchinput").value.toUpperCase();
  let item = document.querySelectorAll(".home-card");
  let heading = document.getElementsByClassName("card_1");

  for (var i = 0; i <= heading.length; i++) {
    let a = item[i].getElementsByClassName("card_1")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

function contact_msg() {
  document.getElementById("submit-msg").innerHTML = "Thanks for submit form";
}
