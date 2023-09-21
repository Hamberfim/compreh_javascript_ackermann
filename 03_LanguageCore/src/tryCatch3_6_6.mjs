// trigger errors
/**
 * @param {string | number} age
 */
// function checkAge(age) {
//   if (typeof age === 'string') {
//     age = parseInt(age);
//     if (isNaN(age)) {
//       throw new Error(`input must be a number`);
//     } else {
//       if (age < 0) {
//         throw new Error('Age must be a positive number.');
//       } else {
//         return true;
//       }
//     }
//   } else if (typeof age === 'number') {
//     if (age < 0) {
//       throw new Error('Age must be a positive number.');
//     } else {
//       return true;
//     }
//   }
// }

// refactor
// function checkAge(age) {
//   if (isNaN(parseFloat(age))) {
//     throw new Error(`input must be a number`);
//   } else if (age < 0) {
//     throw new Error('Age must be a positive number.');
//   }
//   return true;
// }

// refactor
/**
 * The `checkAge` function is a validation function that checks if the input `age` is a valid age.
 * It first checks if the input is not a number by using `isNaN(parseFloat(age))`.
 * If it is not a number, it throws a `TypeError` with the message "Input must be a number."
 * If the input is a number, it then checks if the age is less than 0.
 * If it is, it throws a `RangeError` with the message "Age must be a positive number." If the input passes both checks, it returns `true`.
 * @param {*} age
 * @returns
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

// add try/catch to each function call
try {
  console.log(checkAge(22)); // true
} catch (error) {
  console.log(error);
}

try {
  console.log(checkAge(0)); // true
} catch (error) {
  console.log(error);
}

try {
  console.log(checkAge('36')); // true
} catch (error) {
  console.log(error);
}

try {
  console.log(checkAge('-40')); // error
} catch (error) {
  console.log(error);
}

try {
  console.log(checkAge('pizza')); // error
} catch (error) {
  console.log(error);
}
