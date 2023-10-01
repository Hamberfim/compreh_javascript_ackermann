'use strict';
// outputting object properties and methods via for-in loop
// const kiaCar = {
//   // properties - the state of the object
//   make: 'Kia',
//   model: 'Soul',
//   year: 2016,
//   color: 'black',
//   price: 18000,
//   // methods - the behavior of the object
//   displayDescription: function () {
//     console.log(`A ${kiaCar.year} ${kiaCar.color} ${kiaCar.make} ${kiaCar.model} for $${kiaCar.price}`);
//   },
// };
// kiaCar.displayDescription();

// re-define kiaCar and it's properties
const kiaCar = {};
Object.defineProperties(kiaCar, {
  make: {
    value: 'Kia',
    writable: false,
    enumerable: true,
    configurable: false,
  },
  model: {
    value: 'Soul',
    writable: false,
    enumerable: true,
    configurable: false,
  },
  year: {
    value: 2016,
    writable: false,
    enumerable: true,
    configurable: false,
  },
  color: {
    value: 'black',
    writable: false,
    enumerable: true,
    configurable: false,
  },
  price: {
    value: 18000,
    writable: true,
    enumerable: true,
    configurable: false,
  },

  displayDescription: {
    value: function () {
      console.log(`A ${kiaCar.year} ${kiaCar.color} ${kiaCar.make} ${kiaCar.model} for $${kiaCar.price}`);
    },
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

const propDesc = Object.getOwnPropertyDescriptors(kiaCar);
kiaCar.displayDescription();
console.log(propDesc);
