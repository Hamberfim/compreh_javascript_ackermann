// functions with defaults
function add(a = 0, b = 0, c = 0) {
  console.log(a + b + c);
}

add(1, 2, 3); // 6
add(1, 2); // 3
add(1, undefined, 3); // 4

function sum1(numberArr) {
  let result = 0;
  for (let i = 0; i < numberArr.length; i++) {
    result += numberArr[i];
  }
  console.log(result);
}
// pass an array
sum1([1, 2, 3, 4, 5]); // 15

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
