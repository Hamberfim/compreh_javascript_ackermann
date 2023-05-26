// optional chaining operator and accessing nested object properties

const staffObj = {
  1001: {
    firstName: 'john',
    lastName: 'doe',
    contact: { email: 'jdoe@fake.mail', phone: '555-555-1001' },
  },
  1002: {
    firstName: 'mary',
    lastName: 'doyle',
    contact: { email: 'mdoyle@fake.mail' },
  },
  1003: {
    firstName: 'bill',
    lastName: 'west',
    contact: { email: 'bwest@fake.mail', phone: '555-555-1003' },
  },
  1004: {
    firstName: 'sammy',
    lastName: 'smith',
    contact: { email: 'ssmith@fake.mail' },
  },
  1005: {
    firstName: 'tom',
    lastName: 'jones',
    contact: { email: 'tjones@fake.mail', phone: '555-555-1005' },
  },
};

// access nested properties via optional chaining operator
console.log(staff['1001'].firstName, staff['1001'].contact?.phone, '\n');

// nested properties via optional chaining operator as a function
/**
 * @param {({ firstName: string; lastName: string; contact: { email: string; phone: string; }; } | { firstName: string; lastName: string; contact: { email: string; phone?: undefined; }; })[]} arr
 * @param {string} id
 */
function getStaffContactPhoneById(arr, id) {
  let contact = `${id} not found`;
  for (const key in arr) {
    //console.log(key, id);
    if (key === id) {
      if (arr[key].contact.phone) {
        contact = `${key} ${arr[key].firstName}: ${arr[key].contact?.phone}`;
      } else {
        contact = `${id} : Has no phone contact`;
      }
    }
  }
  console.log(contact);
}

getStaffContactPhoneById(staff, '1001');
getStaffContactPhoneById(staff, '1004');
getStaffContactPhoneById(staff, '2000');
