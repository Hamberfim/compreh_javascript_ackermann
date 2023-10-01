'use strict';
// define item Object, it's properties and property descriptors
const item = {};
Object.defineProperties(item, {
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

  displayItemDescription: {
    value: function () {
      console.log(`A ${item.year} ${item.color} ${item.make} ${item.model} for $${item.price}\n`);
    },
    writable: false,
    // not enumerable
    enumerable: false,
    configurable: false,
  },
});

item.displayItemDescription();
console.log('--- Using a for-in loop ---');
// outputting the Objects properties and property descriptors via for-in loop
for (let property in item) {
  let propertyDescriptor = Object.getOwnPropertyDescriptor(item, property);
  console.log(`Name: ${property}, Value: ${item[property]}`);
  console.log(` ---- Writable: ${propertyDescriptor.writable}`);
  console.log(` ---- Enumerable: ${propertyDescriptor.enumerable}`);
  console.log(` ---- Configurable: ${propertyDescriptor.configurable}\n`);
}

// outputting the Objects properties and property descriptors via helper methods
console.log('--- Using Object .keys/.values helper methods and a for loop ---');
const itemsKeys = Object.keys(item);
const itemValues = Object.values(item);
for (let i = 0; i < itemsKeys.length; i++) {
  const propertyName = itemsKeys[i];
  const propertyValue = itemValues[i];
  const propertyDescriptor = Object.getOwnPropertyDescriptor(item, itemsKeys[i]);
  console.log(`Name: ${propertyName}, Value: ${propertyValue}`);
  console.log(` .... Writable: ${propertyDescriptor.writable}`);
  console.log(` .... Enumerable: ${propertyDescriptor.enumerable}`);
  console.log(` .... Configurable: ${propertyDescriptor.configurable}\n`);
}
