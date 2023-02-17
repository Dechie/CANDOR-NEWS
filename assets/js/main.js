const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Successful!");
    window.location.href = "index.html";
  });
}

const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const menuMobile = document.getElementsByClassName("menu-mobile");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuMobile[0].classList.add("menu-active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    menuMobile[0].classList.remove("menu-active");
  });
}

// Pasword Validation

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
