// trigger errors
/**
 * @param {string | number} age
 */
function checkAge(age) {
  if (typeof age === 'string') {
    age = parseInt(age);
    if (isNaN(age)) {
      throw new Error(`input must be a number`);
    } else {
      if (age < 0) {
        throw new Error('Age must be a positive number.');
      } else {
        return true;
      }
    }
  } else if (typeof age === 'number') {
    if (age < 0) {
      throw new Error('Age must be a positive number.');
    } else {
      return true;
    }
  }
}

console.log(checkAge(22)); // true
console.log(checkAge(0)); // true
console.log(checkAge('22')); // error
console.log(checkAge('pizza')); // error
