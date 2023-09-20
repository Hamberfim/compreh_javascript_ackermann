'use strict';
//
function checkAge(age) {
  if (isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number!');
  } else if (age < 1) {
    throw new RangeError('Age must be a number greater than zero!');
  } else if (age > 0 && age < 18) {
    document.querySelector('#errMsg').textContent = 'Welcome';
    document.querySelector('#message').innerHTML = 'You may enter with <strong>limited</strong> access!';
  } else if (age >= 18) {
    document.querySelector('#errMsg').textContent = 'Congratulations!';
    document.querySelector('#message').innerHTML = 'You may enter with <strong>full</strong> access!';
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
  } finally {
    if (checkAge(age)) document.querySelector('#completed').textContent = 'Submission Triggered Successfully!';
  }
}

function reset() {
  document.querySelector('#errMsg').textContent = '';
  document.querySelector('#message').textContent = '';
  document.querySelector('#age').value = '';
  document.querySelector('#completed').textContent = '';
}
