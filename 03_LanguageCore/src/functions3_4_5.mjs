// functions with defaults

/** The function `add` is a function that takes three parameters `a`, `b`, and `c`, with default values of 0.
 * It then logs the sum of `a`, `b`, and `c` to the console.
 * If any of the parameters are not provided when calling the function, the default value of 0 will be used. */
function add(a = 0, b = 0, c = 0) {
  console.log(a + b + c);
}

add(1, 2, 3); // 6
add(1, 2); // 3
add(1, undefined, 3); // 4

/**
 * The function `sum1` takes an array `numberArr` as a parameter.
 * It then iterates over each element in the array and adds it to the `result` variable.
 * Finally, it logs the value of `result` to the console.
 * Essentially, the function calculates the sum of all the numbers in the array and prints the result.
 * @param {number[]} numberArr
 */
function sum1(numberArr) {
  let result = 0;
  for (let i = 0; i < numberArr.length; i++) {
    result += numberArr[i];
  }
  console.log(result);
}

// pass an array
sum1([1, 2, 3, 4, 5]); // 15

/**
 * The function `sum2` is a variadic function, meaning it can accept any number of arguments.
 * It uses the rest parameter syntax (`...numbers`) to collect all the arguments passed to the function into an array called `numbers`.
 * @param {number[]} numbers
 */
function sum2(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(result);
}

// pass numbers
sum2(5, 4, 3, 2, 1); // 15

// string tagged templates - implementation and usage of a Tag Function
/**
 * The `tagFunction` is an example of a string tagged template function.
 * It takes two parameters: `fixedStringsParts` and `variableReplacements`.
 * @param {any[]} fixedStringsParts
 * @param {any[]} variableReplacements
 */
function tagFunction(fixedStringsParts, ...variableReplacements) {
  const name = variableReplacements[0];
  const age = variableReplacements[1];
  if (age > 80) {
    return `${fixedStringsParts[0]}${variableReplacements[0]}`;
  }

  return `${fixedStringsParts[0]}${name}${fixedStringsParts[1]}${age}${fixedStringsParts[2]}`;
}
const name = 'john doe';
let age = 44;

let message = tagFunction`My name is ${name}, I am ${age} years old.`;
console.log(message);
age = 88;
message = tagFunction`My name is ${name}, I am ${age} years old.`;
console.log(message);

// NEXT, START NEW ON 3.5.9
