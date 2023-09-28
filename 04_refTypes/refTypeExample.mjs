// primitive vs reference types

// Primitive Example
function primExample(input) {
  console.log('In primExample', input);
  input = 5;
  console.log('In primExample', input);
}
let primInput = 4711;
console.log('Start primLog', primInput);
primExample(primInput);
console.log('Finish primLog', primInput);

console.log('-------------------');

// Reference Example
function refExample(input) {
  console.log('In refExample', input.value);
  input.value = 5;
  console.log('In refExample', input.value);
}
let refInput = {
  value: 4711,
};
console.log('Start refLog', refInput);
refExample(refInput);
console.log('Finish refLog', refInput);

console.log('-----type of-------');
console.log(typeof primInput); // number primitive type
console.log(typeof refInput); // object - reference type

console.log('-----instanceof-------');
console.log(primInput instanceof Object);
console.log(refInput instanceof Object);
