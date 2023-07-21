const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton = document.getElementById('signInButton');
const signInButton = document.getElementById('signUpButton');

const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

signUp.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signIn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

function isFieldEmpty(field) {
  return field.value.trim() === '';
}

function validateSignUpForm() {
  const nameInput = signUpForm.querySelector('input[type="text"]');
  const emailInput = signUpForm.querySelector('input[type="email"]');
  const passwordInput = signUpForm.querySelector('input[type="password"]');
  
  if (isFieldEmpty(nameInput) || isFieldEmpty(emailInput) || isFieldEmpty(passwordInput)) {
    alert('Please fill in all the required fields.');
    return false;
  }
  
  return true;
}

function validateSignInForm() {
  const emailInput = signInForm.querySelector('input[type="email"]');
  const passwordInput = signInForm.querySelector('input[type="password"]');
  
  if (isFieldEmpty(emailInput) || isFieldEmpty(passwordInput)) {
    alert('Please fill in all the required fields.');
    return false;
  }
  
  return true;
}

signUpButton.addEventListener('click', function() {
  if (validateSignUpForm()) {
    window.location.href = 'http://127.0.0.1:5500/Olympusle_Website/web.html';
  }
});

signInButton.addEventListener('click', function() {
  if (validateSignInForm()) {
    window.location.href = 'http://127.0.0.1:5500/Olympusle_Website/web.html';
  }
});
