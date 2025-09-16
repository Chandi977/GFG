// Form and input selectors
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Modal elements
const modalName = document.getElementById("modalName");
const modalEmail = document.getElementById("modalEmail");
const userModal = new bootstrap.Modal(document.getElementById("userModal"));

// Toast element
const successToastEl = document.getElementById("successToast");
const successToast = new bootstrap.Toast(successToastEl);

// Regex functions
const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isPasswordValid = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);

// Real-time validation
const validateName = () => {
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("is-invalid");
    return false;
  }
  nameInput.classList.remove("is-invalid");
  nameInput.classList.add("is-valid");
  return true;
};

const validateEmail = () => {
  if (!isEmailValid(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    return false;
  }
  emailInput.classList.remove("is-invalid");
  emailInput.classList.add("is-valid");
  return true;
};

const validatePassword = () => {
  if (!isPasswordValid(passwordInput.value.trim())) {
    passwordInput.classList.add("is-invalid");
    return false;
  }
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.add("is-valid");
  return true;
};

const validateConfirmPassword = () => {
  if (
    confirmPasswordInput.value.trim() !== passwordInput.value.trim() ||
    confirmPasswordInput.value.trim() === ""
  ) {
    confirmPasswordInput.classList.add("is-invalid");
    return false;
  }
  confirmPasswordInput.classList.remove("is-invalid");
  confirmPasswordInput.classList.add("is-valid");
  return true;
};

// Event listeners for real-time validation
[nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
  (input) => {
    input.addEventListener("input", () => {
      if (input === nameInput) validateName();
      if (input === emailInput) validateEmail();
      if (input === passwordInput) {
        validatePassword();
        validateConfirmPassword();
      }
      if (input === confirmPasswordInput) validateConfirmPassword();
    });
  }
);

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValidField = validateName();
  const isEmailValidField = validateEmail();
  const isPasswordValidField = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  if (
    isNameValidField &&
    isEmailValidField &&
    isPasswordValidField &&
    isConfirmValid
  ) {
    // Fill modal with user data
    modalName.textContent = nameInput.value.trim();
    modalEmail.textContent = emailInput.value.trim();

    // Show modal
    userModal.show();

    // Show toast
    successToast.show();

    // Reset form
    form.reset();
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
      (input) => input.classList.remove("is-valid")
    );
  }
});
