// Extracting value from objects/arrays - destructuring
const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    contact: {
      email: "john@fake.org",
      phone: "555-555-1111",
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    contact: {
      email: "jane@fake.org",
      phone: "555-555-2222",
    },
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
