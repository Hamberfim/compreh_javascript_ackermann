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
