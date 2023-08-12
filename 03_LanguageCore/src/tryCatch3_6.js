/**
 * Error Handling
 * Try/Catch/Finally
 *
 * try {
 *      // execute code that could potentially contain an error
 * } catch (error) {
 *      // handle the error
 * } finally {
 *      // Run additional code regardless of an error or not
 * }
 */

// prompting user with readline
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

// user input
rl.question('Enter the length of the array: ', (userInput) => {
  // @ts-ignore
  const length = parseInt(userInput);
  let array;
  // try/catch
  try {
    array = createArray(length);
  } catch (error) {
    // @ts-ignore
    console.log(error.name);
    // @ts-ignore
    console.log(error.message);
  }
  rl.close();
});

// create array function
// @ts-ignore
function createArray(length) {
  return new Array(length);
}
