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
// but the property attributes can be changed (are configurable) !
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);
Object.defineProperty(john, 'firstName', { enumerable: false });
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);

// sealing Objects - can't be changed nor can the attributes
const sarah = {
  firstName: 'Sarah',
  lastName: 'Doe',
};
console.log(Object.isSealed(sarah));
Object.seal(sarah);
console.log(Object.isSealed(sarah));

// freezing Objects - insures that even existing values of properties and methods can't be changed
const bob = {
  firstName: 'Bob',
  lastName: 'Doe',
};
Object.freeze(bob);
console.log(Object.isFrozen(bob));
