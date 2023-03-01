let passwordEl = document.querySelector("#password");
let ShowBtn = document.querySelector("#show");
let emailEl = document.getElementById("email");
let emailOutput = document.querySelector(".email");

emailOutput.textContent = "abc";

emailEl.addEventListener("input", (e) => {
  emailOutput.textContent = e.target.value;
});

console.log(passwordEl);

ShowBtn.addEventListener("click", function () {
  //   if (passwordEl.type == "text") {
  //     passwordEl.type = "password";
  //   } else {
  //     passwordEl.type = "text";
  //   }
  passwordEl.type =
    passwordEl.type == "text"
      ? (passwordEl.type = "password")
      : (passwordEl.type = "text");
});

let btnLogin = document.querySelector(".btn--login");
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
});

let btnGoggle = document.querySelector(".btn--google");

btnGoggle.addEventListener("click", (e) => {
  e.preventDefault();
  window.location = "https://www.google.com";
});

let fbBtn = document.querySelector(".btn--facebook");

fbBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location = "https://www.facebook.com";
});
