const labels = document.querySelectorAll(".form-input label");
const showPassword = document.querySelector("#showPassword");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let pass_length = password.value.length;
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
form.addEventListener("submit", () => {
  check_pass(pass_length);
});
function check_pass(pass) {
  switch (pass) {
    case 0:
      console.log("very weak");
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("weak");
      break;
    case 6:
    case 7:
    case 8:
      console.log("medium");
      break;
    case 9:
    case 10:
      console.log("strong");
      break;
    default:
      console.log("invalid password");
      break;
  }
}
