// ES2021 - logical assignment operators
// conditional value assignment
let a1 = 10;
let a2 = null;
let a3 = false;

// ||= logical OR assignment
// NOTE: if the left hand side is falsy it is assigned the right hand side value
a1 ||= 7; // a1 is already assigned a truthy value OR it is assigned 7 --> 5
a2 ||= 7; // a2 is already assigned OR it is assigned 7 --> 7
a3 ||= 7; // a3 is already assigned OR it is assigned 7 --> 7

let b1 = 5;
let b2 = null;
let b3 = false;

// &&= logical AND assignment
// NOTE: if the left hand side value and right hand side value are truthy it is assigned the right hand side value
b1 &&= 7; // the left hand AND right hand values are truthy --> 7
b2 &&= 7; // the left hand value is falsy AND right hand values is truthy --> null
b3 &&= 7; // the left hand value is falsy AND right hand values is truthy --> false

let c1 = 5;
let c2 = null;
let c3 = false;

// ??= logical nullish assignment
// NOTE: if the left hand side value is null or undefined it is assigned the right hand side value
c1 ??= 5; // the left hand side value is NOT null or undefined so it is assigned the right hand side value --> 7
c2 ??= null; // the left hand side value is null or undefined so it is assigned the right hand side value --> 7
c3 ??= false; // the left hand side value is NOT null or undefined so it is assigned the right hand side value --> false

// Example ES2021 - logical assignment operators to initialize an object property
const john = {
  fName: 'John',
};

john.fName ||= 'James';
john.lName ||= 'Doe';
console.log(john); // { fName: 'John', lName: 'Doe' }

// Example Pre-ES2021 logical assignment syntax
const paul = {
  fName: 'Paul',
};
paul.fName || (paul.fName = 'James');
paul.lName || (paul.lName = 'Doe');
console.log(paul); // { fName: 'Paul', lName: 'Doe' }

// Operators for Special Operations
const randNum = Math.random();
// ternary <condition> ? <if true value> : <if false value>;
const result = randNum > 0.5 ? '...is greater than 0.5' : 'is less than 0.5';
console.log(result);

// delete elements from an array or properties from an object
const myNumArr = [1, 2, 3, 4, 5];
delete myNumArr[2];
console.log(myNumArr); // [ 1, 2, <1 empty item>, 4, 5 ]

const person = {
  name: 'Bill Williams',
  age: 53,
  gender: 'male',
};
delete person.gender;
console.log(person); // { name: 'Bill Williams', age: 53 }

// existence of property in object: <'property'> in <object>
let hasProperty = 'age' in person;
console.log(hasProperty);
hasProperty = 'gender' in person;
console.log(hasProperty);

// Type Verification: <object> instanceof <type>
const isObjectType = person instanceof Object;
console.log(isObjectType);

// Type Determination: typeof <Operand>
let whatIsType = typeof person.age;
console.log(whatIsType);
whatIsType = typeof person.name;
console.log(whatIsType);
