const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton = document.getElementById('signInButton');
const signInButton = document.getElementById('signUpButton');

const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

const googleSignUpButton = signUpForm.querySelector('.social-container .fab.fa-google');
googleSignUpButton.addEventListener('click', function() {
  redirectToExternalProvider('google');
});

const twitterSignUpButton = signUpForm.querySelector('.social-container .fab.fa-twitter');
twitterSignUpButton.addEventListener('click', function() {
  redirectToExternalProvider('twitter');
});

const appleSignUpButton = signUpForm.querySelector('.social-container .fab.fa-apple');
appleSignUpButton.addEventListener('click', function() {
  redirectToExternalProvider('apple');
});

// sign-in form
const googleSignInButton = signInForm.querySelector('.social-container .fab.fa-google');
googleSignInButton.addEventListener('click', function() {
  redirectToExternalProvider('google');
});

const twitterSignInButton = signInForm.querySelector('.social-container .fab.fa-twitter');
twitterSignInButton.addEventListener('click', function() {
  redirectToExternalProvider('twitter');
});

const appleSignInButton = signInForm.querySelector('.social-container .fab.fa-apple');
appleSignInButton.addEventListener('click', function() {
  redirectToExternalProvider('apple');
});

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

function redirectToExternalProvider(provider) {
  // Define the URLs for the callback after authentication with each provider
  const googleCallbackURL = 'http://example.com/auth/google/callback';
  const twitterCallbackURL = 'http://example.com/auth/twitter/callback';
  const appleCallbackURL = 'http://example.com/auth/apple/callback';

  // Construct the URLs for each authentication provider's authentication page
  switch (provider) {
    case 'google':
      // Replace the "YOUR_GOOGLE_CLIENT_ID" with your actual Google client ID
      const googleClientID = 'AIzaSyCt9MITgfSuDJ9r27UAIPwayw2XcYBLjF0';
      const googleAuthURL = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientID}&redirect_uri=${googleCallbackURL}&response_type=code&scope=email`;
      window.location.href = googleAuthURL;
      break;
    case 'twitter':
      // Replace the "YOUR_TWITTER_API_KEY" with your actual Twitter API key
      const twitterAPIKey = '1258417974291173379-kEi6LuW6CaIleLzg7zzRjlkG5iT1Oz';
      const twitterAuthURL = `https://api.twitter.com/oauth/authenticate?oauth_consumer_key=${twitterAPIKey}&oauth_callback=${twitterCallbackURL}`;
      window.location.href = twitterAuthURL;
      break;
    case 'apple':
      // Replace the "YOUR_APPLE_CLIENT_ID" with your actual Apple client ID
      const appleClientID = 'YOUR_APPLE_CLIENT_ID';
      const appleAuthURL = `https://appleid.apple.com/auth/authorize?client_id=${appleClientID}&redirect_uri=${appleCallbackURL}&response_type=code&scope=name%20email`;
      window.location.href = appleAuthURL;
      break;
    default:
      // If the provided provider is not recognized, display an error message
      alert('Invalid authentication provider.');
      break;
  }
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
