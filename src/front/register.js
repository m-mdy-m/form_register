const labels = document.querySelectorAll(".form-input label");
const showPassword = document.querySelector("#showPassword");
const wrapperName = document.getElementById("wrapper-name");
const wrapperUsername = document.getElementById("wrapper-username");
const wrapperEmail = document.getElementById("wrapper-email");
const bgImg = document.getElementById("bgImg");
let form = document.querySelector("form");
let signUp = document.querySelector("#sign-Up");
let signIn = document.querySelector("#sign-In");
let register_login = document.getElementById("register_login");
const first_name = document.getElementById("first_name");
const userName = document.getElementById("user-name");
const email = document.getElementById("email");
let password = document.querySelector("#password");


function checkPassword(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    // Show an alert
    alert("The password must be at least 8 characters long.");
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    // Show an alert
    alert("The password must contain at least one uppercase letter.");
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    // Show an alert
    alert("The password must contain at least one lowercase letter.");
    return false;
  }

  // Check if the password contains at least one number
  if (!/[0-9]/.test(password)) {
    // Show an alert
    alert("The password must contain at least one number.");
    return false;
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+-={}[\]\\;':",.<>?]/.test(password)) {
    // Show an alert
    alert("The password must contain at least one special character.");
    return false;
  }

  // The password is valid
  return true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPassword(password.value)
});

// =====  Creative text label  ==== ///

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join(" ");
});
let show = false;
// =====  show password with click user  ==== ///

showPassword.addEventListener("click", () => {
  if (show) {
    password.type = "password";
    showPassword.setAttribute("src", "../../image/svg/emoji/main.svg");
    show = false;
  } else {
    password.type = "text";
    showPassword.setAttribute("src", "../../image/svg/emoji/face-grin.svg");
    show = true;
  }
});
// =====  change Form  ==== ///
signIn.addEventListener("click", () => {
  register_login.innerHTML = "In";
  wrapperName.style.display = "none";
  wrapperEmail.style.display = "none";
  form.style.cssText =
    "grid-template-rows: repeat(3, minmax(0, 1fr));align-items: stretch;";
});

signUp.addEventListener("click", () => {
  register_login.innerHTML = "Up";
  wrapperName.style.display = "block";
  wrapperEmail.style.display = "block";
  form.style.cssText = "grid-template-rows: repeat(5, minmax(0, 1fr));";
});

// =====  change background ==== ///
var i = 0;
function changeBg() {
  i++;
  if (i > 4) {
    bgImg.style.opacity = "0";
    bgImg.style.transition = "all 3s ease-in-out";
    i = 1;
  }
  bgImg.style.background = "url('../../image/bg/bg_" + i + ".jpg')";
  bgImg.style.transition = "all 3s ease-in-out";
  bgImg.style.opacity = "1";
  setTimeout(changeBg, 5000);
}
changeBg();
