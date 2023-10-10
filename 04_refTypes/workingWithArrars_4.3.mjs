// Working with Arrays -- array elements
'use strict';
const todoList = [];
todoList.push('buy pickles');
todoList.push('buy cabbage');
todoList.push('buy coffee');
todoList.push('buy fruit');

console.log(todoList);
todoList.unshift('go to bank');
console.log(todoList);
todoList.splice(1, 0, 'get cash from teller'); // insert one item at index 1 but not replacing any items
console.log(todoList);

todoList.push('take a shower');
todoList.push('mow the yard');
console.log(todoList);
todoList.splice(6, 1); // remove one item at index 6
console.log(todoList);

todoList.push('clean the gutters');
todoList.push('sweep the walk');
todoList.push('take a shower');
console.log(todoList);

const yardWork = todoList.slice(6, 10); // copy items 6 -9 to a new array
console.log(yardWork);

// array sorting
const names = ['Zoiburg', 'Frie', 'Hermies', 'Leelah', 'Bender', 'Professor'];
console.log('names', names);
names.sort();
console.log('sort()', names);
names.reverse();
console.log('reverse()', names);

// sorting numbers requires a comparison function
let numbers = [40, 100, 1000, 10, 60, 3];
console.log(numbers);
numbers.sort();
console.log(numbers); // not correct
numbers = [40, 100, 1000, 10, 60, 3];
// sort with a comparison function - descending
numbers.sort(function (a, b) {
  return b - a; // descending
});
console.log(numbers);
// sort with a comparison function - ascending
numbers = [40, 100, 1000, 10, 60, 3];
numbers.sort(function (a, b) {
  return a - b; // ascending
});
console.log(numbers);

// sorting an array of object with a built-in string comparison function - localCompare()
const contacts = [
  {
    firstName: 'Zoiburg',
    email: 'zoiburg@fake.com',
  },
  {
    firstName: 'Leelah',
    email: 'alphalady@fake.com',
  },
  {
    firstName: 'Hermies',
    email: 'congaline158@fake.com',
  },
];
function compareFirstName(contact1, contact2) {
  return contact1.firstName.localeCompare(contact2.firstName);
}
function compareEmail(contact1, contact2) {
  return contact1.email.localeCompare(contact2.email);
}
console.log(contacts);
contacts.sort(compareFirstName);
console.log('By First Name:', contacts);
contacts.sort(compareEmail);
console.log('By email:', contacts);

// using arrays as a stack - LIFO - last in, first out.
console.log('\n--- Stack LIFO ---');
let stackArr = ['a', 'b', 'c'];
console.log(stackArr);
stackArr.push('d');
console.log(stackArr);
stackArr.pop();
console.log(stackArr);
// using arrays as a queue - FFO - First in, first out.
console.log('\n--- Queue FIFO ---');
stackArr.push('d');
console.log(stackArr);
stackArr.shift();
console.log(stackArr);
console.log('\n---search an array starting from the beginning ---');
stackArr = ['a', 'b', 'c', 'd', 'c', 'a'];
console.log(stackArr.indexOf('c'));
console.log('\n---search an array starting from the end ---');
console.log(stackArr.lastIndexOf('c'));
console.log('\n--- find the first occurrence of an item that meet a condition ---');
const result = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5].find((item) => item % 2 !== 0);
console.log(result);
const result2 = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5].findIndex((item) => item % 2 !== 0);
console.log(result2);
