'use strict';

/**
 * The function compares two numbers and logs a message if they are equal.
 * @param {number} numberAtI - The value of the number at index i in an array.
 * @param {number} numberAtJ - The parameter `numberAtJ` represents the number at index `j` in an array or list.
 */
function compareNumbers(numberAtI, numberAtJ) {
  if (numberAtI === numberAtJ) {
    console.log(`Found duplicate: ${numberAtI}`);
  }
}

/**
 * The function `checkNumbers` compares a number at index `i` with all the numbers in the `numbers` array starting from index `i+1`.
 * @param {number }numberAtI - The value of the number at index i in the numbers array.
 * @param {number} numbers - The `numbers` parameter is an array of numbers.
 * @param {number }i - The parameter `i` represents the index of the current number in the `numbers` array.
 */
function checkNumbers(numberAtI, numbers, i) {
  // @ts-ignore
  for (let j = i + 1; j < numbers.length; j++) {
    // @ts-ignore
    const numberAtJ = numbers[j];
    compareNumbers(numberAtI, numberAtJ);
  }
}

/**
 * The function `findDuplicates` checks for duplicate numbers in an array.
 */
function findDuplicates() {
  const numbers = [2, 4, 5, 2, 5, 8, 5, 4711];
  for (let i = 0; i < numbers.length; i++) {
    // @ts-ignore
    checkNumbers(numbers[i], numbers, i);
  }
}

document.addEventListener('DOMContentLoaded', findDuplicates);
