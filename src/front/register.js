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

// alert element
let alertWrapper = document.getElementById("alert-wrapper");
let alertTitle = document.getElementById("alert-title");
let alertText = document.getElementById("alert-text");

// add animation alert
function animation_alert() {
  setTimeout(() => {
    alertWrapper.style.cssText = `left='-5rem'; opacity: 0;transform: scale(1);`;
  }, 8000);
  alertWrapper.style.cssText = `animation: show_Alert 1.5s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);`;
}

function contentAlert(Title,Text){
  alertTitle.innerHTML = `${Title}`
  alertText.innerHTML = `${Text}`
}

// Check value name
function checkName(name) {
  if (typeof name.value  !== "string") {
    contentAlert('name Error',"Please do not use numbers!")
    animation_alert();
    return false;
  }
  for (var i = 0; i < name.length; i++) {
    if (isNaN(name.value.charAt(i))) {
      return false;
    }
  }
  return true;
}

// check username
function checkUsername(username) {
  if (username.value.length < 6) {
    contentAlert('userName Error',"Please choose your username more than 6 characters!.")
    animation_alert();
    return false;
  }
  if (/[0-9][!@#$%^&*()_+-={}[\]\\;':",.<>?]/.test(username)) {
    contentAlert('userName Error',"Please do not use characters (!@#$%^&*) and number in your username.")
    animation_alert();
    return false;
  }

  return true;
}

//  check email!
function checkEmail(email) {
  let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  if (reg.test(email.value)) {
    return true;
  }
  contentAlert('Email Error',"The email format is wrong, please enter a valid email!.")
  animation_alert();
  return false;
}
//   function check value password

function checkPassword(password) {
  if (password.length < 8) {
  contentAlert('password','"The password must be at least 8 characters long."')
    animation_alert();
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    contentAlert('password','"The password must contain at least one uppercase letter."')
    animation_alert();
    return false;
  }
  if (!/[a-z]/.test(password)) {
    contentAlert('password','"The password must contain at least one lowercase letter."')
    animation_alert();
    return false;
  }
  if (!/[0-9]/.test(password)) {
    contentAlert('password','"The password must contain at least one number."')
    animation_alert();
    return false;
  }
  if (!/[!@#$%^&*()_+-={}[\]\\;':",.<>?]/.test(password)) {
    contentAlert('password','"The password must contain at least one special character."')
    animation_alert();
    return false;
  }
  return true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName(first_name)
  checkEmail(email)
  checkUsername(userName)
  checkPassword(password.value);
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
