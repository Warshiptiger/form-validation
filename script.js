// Form and Input Elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error Message Elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Utility Function to Show Error
function showError(input, message, errorElement) {
  input.classList.add('is-invalid');
  errorElement.textContent = message;
}

// Utility Function to Clear Error
function clearError(input, errorElement) {
  input.classList.remove('is-invalid');
  errorElement.textContent = '';
}

// Validation Functions
function validateName() {
  if (fullName.value.trim().length < 5) {
    showError(fullName, 'Name must be at least 5 characters long.', nameError);
    return false;
  }
  clearError(fullName, nameError);
  return true;
}

function validateEmail() {
  if (!email.value.includes('@')) {
    showError(email, 'Please enter a valid email address.', emailError);
    return false;
  }
  clearError(email, emailError);
  return true;
}

function validatePhone() {
  const phonePattern = /^[0-9]{10}$/;
  if (phone.value === '1234567890' || !phonePattern.test(phone.value)) {
    showError(phone, 'Please enter a valid 10-digit phone number.', phoneError);
    return false;
  }
  clearError(phone, phoneError);
  return true;
}

function validatePassword() {
  if (
    password.value.length < 8 ||
    password.value.toLowerCase() === 'password' ||
    password.value.toLowerCase() === fullName.value.toLowerCase()
  ) {
    showError(password, 'Password must be at least 8 characters and not common words.', passwordError);
    return false;
  }
  clearError(password, passwordError);
  return true;
}

function validateConfirmPassword() {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Passwords do not match.', confirmPasswordError);
    return false;
  }
  clearError(confirmPassword, confirmPasswordError);
  return true;
}

// Event Listeners for Real-Time Validation
fullName.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

// Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  
  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
    // All validations passed
    alert('Registration Successful!');
    form.reset();
  } else {
    // If any validation fails, focus the first invalid input
    const firstInvalid = document.querySelector('.is-invalid');
    if (firstInvalid) firstInvalid.focus();
  }
});
