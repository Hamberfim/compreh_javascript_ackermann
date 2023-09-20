'use strict';
//
function checkAge(age) {
  if (isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number!');
  } else if (age < 0) {
    throw new RangeError('Age must not be negative!');
  } else if (age > 0 && age < 18) {
    document.querySelector('#errMsg').textContent = 'Welcome';
    document.querySelector('#message').textContent = 'You may enter with limited access!';
  } else if (age >= 18) {
    document.querySelector('#errMsg').textContent = 'Congradulations!';
    document.querySelector('#message').textContent = 'You may enter with full access!';
  }
  return true;
}

function enter() {
  const age = document.querySelector('#age').value;
  try {
    checkAge(age);
  } catch (error) {
    document.querySelector('#errMsg').textContent = 'Error Message:';
    document.querySelector('#message').textContent = error.message;
  }
}

function reset() {
  document.querySelector('#errMsg').textContent = '';
  document.querySelector('#message').textContent = '';
  document.querySelector('#age').value = '';
}
