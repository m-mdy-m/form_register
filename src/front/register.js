const labels = document.querySelectorAll(".form-input label");
const showPassword = document.querySelector("#showPassword");
let password = document.querySelector("#password");
const wrapperName = document.getElementById("wrapper-name");
const wrapperUsername = document.getElementById("wrapper-username");
const wrapperEmail = document.getElementById("wrapper-email");
const bgImg = document.getElementById("bgImg");
let form = document.querySelector("form");
let pass_length = password.value.length;
let signUp = document.querySelector("#sign-Up");
let signIn = document.querySelector("#sign-In");
let register_login = document.getElementById("register_login");

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
    bgImg.style.transition = "background 3s ease-in-out";
    i = 1;
  }
  bgImg.style.background = "url('../../image/bg/bg_" + i + ".jpg')";
  bgImg.style.transition = "background 3s ease-in-out";
  setTimeout(changeBg, 5000);
}
changeBg();