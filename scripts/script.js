const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-invalid');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-invalid');

const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-invalid');

const submitForm = document.getElementById('contact-form');
const formError = document.getElementById('invalid-form');

const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

hamburger.addEventListener('click', () => {
  navItems.classList.toggle('show-nav');
});

nameInput.addEventListener('blur', (e) => {
  const input = e.target;
  if (input.value.length > 2) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    nameError.innerHTML = '';
    nameError.classList.remove('error-message');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
    nameError.innerHTML = 'Please enter at least three characters as your name';
    nameError.classList.add('error-message');
  }
});

emailInput.addEventListener('keyup', (e) => {
  const input = e.target;
  if (emailIsValid.test(input.value)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    emailError.innerHTML = '';
    emailError.classList.remove('error-message');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
    emailError.innerText = 'Please enter a valid email address';
    emailError.classList.add('error-message');
  }
});

messageInput.addEventListener('blur', (e) => {
  const input = e.target;
  if (input.value.length > 200) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    messageError.innerHTML = '';
    messageError.classList.remove('error-message');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
    messageError.innerText =
      'The likelihood of you being an actual person and trying to get in touch with such a short message is very slim...';
    messageError.classList.add('error-message');
  }
});

submitForm.addEventListener('submit', (e) => {
  const inputs = [...document.getElementsByClassName('contact-input')];
  const isNotValid = inputs.some((input) => {
    return input.classList.contains('invalid');
  });
  if (isNotValid) {
    e.preventDefault();
    formError.innerText =
      "There is a problem with the information you're trying to enter. Revisit the fields above and double check everything's in order!";
    formError.classList.add('error-message');
  }
});
