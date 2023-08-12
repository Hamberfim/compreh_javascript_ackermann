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
