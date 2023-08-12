'use strict';
/**
 * @param {string | number} age
 */
function checkAge(age) {
  // @ts-ignore
  if (isNaN(parseFloat(age))) {
    throw new TypeError('Input must be a number.');
    // @ts-ignore
  } else if (age < 0) {
    throw new RangeError('Age must be a positive number.');
  }
  return true;
}

function enter() {
  // @ts-ignore
  const age = document.querySelector('#age').value;
  console.log(age);
  try {
    checkAge(age);
  } catch (error) {
    // @ts-ignore
    document.querySelector('#message').textContent = error.message;
    return;
  }
}
