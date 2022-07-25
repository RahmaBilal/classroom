var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
//localStorage.getItem("email", email);
//localStorage.getItem("password", password);
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
userEmailSpan.textContent = email;
userPasswordSpan.textContent = password;

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);



  }
});

//putting stuff in local storage
//=localStorage.setItem("count", 10);
//to restore the value, you have to use a key
//=var count = localStorage.getItem(count);
//removing items
//=localStorage.removeItem("count");
//setItem, getItem, removeItem - 