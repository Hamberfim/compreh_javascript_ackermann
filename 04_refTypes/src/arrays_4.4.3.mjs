// Extracting value from objects/arrays - destructuring
const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    contact: {
      email: "john@fake.org",
      phone: "555-555-1111",
    },
    age: 24,
    hairColor: "brown",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    contact: {
      email: "jane@fake.org",
      phone: "555-555-2222",
    },
    age: 38,
    hairColor: "blond",
  },
];

// Destructuring values with a for-of loop
for (let {
  firstName: firstName,
  lastName: lastName,
  contact: { email: email, phone: phone },
} of persons) {
  console.log(`${firstName} ${lastName}, ${email}, ${phone}`);
}

// extracting args of a function
function displayPerson({ firstName: fn, lastName: ln, contact: { email: e, phone: p } }) {
  console.log(`${fn} ${ln}, ${e}, ${p}`);
}
// extracting some args of a function
function contactInfoOnly({ contact: { email: e, phone: p } }) {
  console.log(`Contact Info: ${e} | ${p}`);
}

const dave = {
  firstName: "Dave",
  lastName: "Doe",
  contact: {
    email: "dave@fake.org",
    phone: "555-555-3333",
  },
};
// @ts-ignore
displayPerson(dave);
contactInfoOnly(dave);

console.log();
// copying an objects properties to/from another object
const { firstName, lastName, ...properties } = persons[0];
console.log(`${firstName} ${lastName},`, properties);

const john = { firstName, lastName, ...properties };
console.log(john);
