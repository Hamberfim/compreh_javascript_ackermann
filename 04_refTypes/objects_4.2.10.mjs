// Using Symbols to define unique objects that can then only be access by using these Symbols
'use strict';
console.log('--- define unique objects with Symbols ---');
const firstName = Symbol('firstName');
const lastName = Symbol('lastName');

const person = {};
person[firstName] = 'John';
person[lastName] = 'Doe';

console.log(person[0]);
console.log(person.firstName);
console.log(person[firstName]);

console.log(person[1]);
console.log(person.lastName);
console.log(person[lastName]);

console.log('\n--- preventing changes to objects ---');
const john = {
  firstName: 'John',
  lastName: 'Doe',
};
console.log(Object.isExtensible(john));
// prevent extension - no new properties or methods can be added...but the property attributes can be changed
Object.preventExtensions(john);
// john.firstName = 'James';  // TypeError: Cannot add property firstName, object is not extensible
console.log(Object.isExtensible(john));
// but the property attributes can be changed !
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);
Object.defineProperty(john, 'firstName', { enumerable: false });
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);

// sealing Objects
