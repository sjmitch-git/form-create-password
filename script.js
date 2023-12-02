const form = document.getElementById("registrationForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const progressBar = document.getElementById("passwordStrength");
const registerButton = document.getElementById("registerButton");

form.addEventListener("input", handleFormInput);

function handleFormInput() {
  updatePasswordStrength();
  updateFormValidity();
}

function updateFormValidity() {
  registerButton.disabled = !form.checkValidity();
}

passwordInput.addEventListener("input", updatePasswordStrength);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function updatePasswordStrength() {
  const password = passwordInput.value;
  const length = password.length;
  const maxStrength = 100;
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,12}$/;
  const meetsPattern = pattern.test(password);

  progressBar.value = Math.min((length / 12) * maxStrength, maxStrength);

  const strengthClasses = ["danger", "warning", "success"];
  progressBar.classList.remove(...strengthClasses);

  if (length < 8 || length > 12) {
    progressBar.classList.add("danger");
  } else if (length >= 8 && length <= 12) {
    progressBar.classList.add("warning");
    if (meetsPattern) progressBar.classList.add("success");
  }

  checkPasswordMatch();
}

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  confirmPasswordInput.setCustomValidity(
    password === confirmPassword ? "" : "Passwords do not match"
  );
}

function formsubmit(event) {
  event.preventDefault();
}
