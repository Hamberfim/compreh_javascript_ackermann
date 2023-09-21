// optional chaining operator and accessing an array nested object properties

const staff = [
  {
    firstName: 'john',
    lastName: 'doe',
    contact: { email: 'jdoe@fake.mail', phone: '555-555-1001' },
  },
  {
    firstName: 'mary',
    lastName: 'doyle',
    contact: { email: 'mdoyle@fake.mail' },
  },
  {
    firstName: 'bill',
    lastName: 'west',
    contact: { email: 'bwest@fake.mail', phone: '555-555-1003' },
  },
  {
    firstName: 'sammy',
    lastName: 'smith',
    contact: { email: 'ssmith@fake.mail' },
  },
  {
    firstName: 'tom',
    lastName: 'jones',
    contact: { email: 'tjones@fake.mail', phone: '555-555-1005' },
  },
];

// access nested properties via optional chaining operator
console.log(staff[0].firstName, staff[0].contact?.phone, '\n');

// nested properties via optional chaining operator in a function
/**
 * The function `getStaffContactPhone` takes an array of staff objects and a first name as parameters,
 * and returns the contact phone number for the staff member with the given first name, or a message
 * indicating that the staff member was not found or has no phone contact.
 * @param {string | any[]} arr - An array of objects representing staff members. Each object has properties such as
 * firstName and contact, which contains information about the staff member's contact details.
 * @param {string} fName - The `fName` parameter is a string representing the first name of a staff member.
 */
function getStaffContactPhone(arr, fName) {
  let contact = `${fName} not found`;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstName == fName) {
      if (arr[i].contact.phone) {
        contact = `${fName}: ${arr[i].contact?.phone}`;
      } else {
        contact = `${fName}: has no phone contact`;
      }
    }
  }
  console.log(contact);
}
getStaffContactPhone(staff, 'john');
getStaffContactPhone(staff, 'sammy');
getStaffContactPhone(staff, 'wanda');
