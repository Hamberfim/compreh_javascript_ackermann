// Extracting value from arrays - destructuring
const myFavBands = ['talking heads', 'the smiths', 'the cars', "the b-52's", 'peter gabriel'];

const [one, two, three, ...others] = myFavBands;
console.log(one);
console.log(two);
console.log(three);
console.log(others);

// default values
const [first = '', second = '', third = '', fourth = '', fifth = ''] = myFavBands;
console.log('\n');
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

// Extracting value from objects/arrays - destructuring
console.log('\n');
const person = {
  firstName: 'John',
  lastName: 'Doe',
  address: { state: 'Iowa', zip: 50266 },
  phone: ['555-555-5555', '555-555-4444'],
};

const {
  firstName: fNameExtracted,
  lastName: lNameExtracted,
  address: { state: stateExtracted, zip: zipExtracted },
  phone: [phone1Extracted, phone2Extracted],
} = person;
console.log(fNameExtracted, lNameExtracted, stateExtracted, zipExtracted, phone1Extracted, phone2Extracted);
