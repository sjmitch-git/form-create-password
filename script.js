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

  progressBar.value = Math.min((length / 12) * maxStrength, maxStrength);

  progressBar.classList.remove("danger", "warning", "success");

  if (length < 8) {
    progressBar.classList.add("danger");
  } else if (length >= 8 && length <= 12) {
    progressBar.classList.add("warning");
  } else {
    progressBar.classList.add("success");
  }
}
