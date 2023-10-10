'use strict';
// define item Object, it's properties and property attributes/descriptors
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
    value: 'Black',
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

// @ts-ignore
item.displayItemDescription();
console.log('--- Using a for-in loop ---');
// outputting the Objects properties and property via for-in loop (plus attributes/descriptors)
for (let property in item) {
  let propertyDescriptor = Object.getOwnPropertyDescriptor(item, property);
  console.log(`Name: ${property}, Value: ${item[property]}`);
  // @ts-ignore
  console.log(` ---- Writable: ${propertyDescriptor.writable}`);
  // @ts-ignore
  console.log(` ---- Enumerable: ${propertyDescriptor.enumerable}`);
  // @ts-ignore
  console.log(` ---- Configurable: ${propertyDescriptor.configurable}\n`);
}

// outputting the Objects properties and property via helper methods (plus attributes/descriptors)
const itemEntries = Object.entries(item); // helper method produces an array of arrays of names and values
const itemsKeys = Object.keys(item); // helper method produces an array of names
const itemValues = Object.values(item); // helper method produces an array of values
console.log('Entries:', itemEntries);
console.log('Keys:', itemsKeys);
console.log('Values:', itemValues);
console.log('\n--- Using Object .keys/.values helper methods and a for loop ---');
for (let i = 0; i < itemsKeys.length; i++) {
  const propertyName = itemsKeys[i];
  const propertyValue = itemValues[i];
  // Object.getOwnPropertyDescriptor(<Object>, <ObjectPropertyName>)
  const propertyDescriptor = Object.getOwnPropertyDescriptor(item, itemsKeys[i]); // an Objects property value and its attribute settings
  // console.log('propertyDescriptor', propertyDescriptor);
  console.log(`Name: ${propertyName}, Value: ${propertyValue}`);
  // @ts-ignore
  console.log(` .... Writable: ${propertyDescriptor.writable}`);
  // @ts-ignore
  console.log(` .... Enumerable: ${propertyDescriptor.enumerable}`);
  // @ts-ignore
  console.log(` .... Configurable: ${propertyDescriptor.configurable}\n`);
}
