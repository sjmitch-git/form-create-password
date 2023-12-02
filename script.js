const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const progressBar = document.getElementById("passwordStrength");
const registerButton = document.getElementById("registerButton");

form.addEventListener("input", handleFormInput);

function handleFormInput() {
  updateFormValidity();
  updatePasswordStrength();
}

function updateFormValidity() {
  const isFormValid = form.checkValidity();
  registerButton.disabled = !isFormValid;
}

passwordInput.addEventListener("input", updatePasswordStrength);
confirmPasswordInput.addEventListener("input", updateFormValidity);

function updatePasswordStrength() {
  const password = passwordInput.value;
  const length = password.length;
  const maxStrength = 100;
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,12}$/;

  const meetsPattern = pattern.test(password);

  progressBar.value = Math.min((length / 12) * maxStrength, maxStrength);

  progressBar.classList.remove("danger", "warning", "success");

  if (length < 8 || length > 12) {
    progressBar.classList.add("danger");
  } else if (length >= 8 && length <= 12) {
    progressBar.classList.add("warning");
    if (meetsPattern) progressBar.classList.add("success");
  }
  checkPasswordMatch();
}

function checkPasswordMatch() {
  const password = document.getElementById("password").value;
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordInput.setCustomValidity("");
  } else {
    confirmPasswordInput.setCustomValidity("Passwords do not match");
  }
}

function formsubmit(event) {
  event.preventDefault();
}
