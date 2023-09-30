'use strict';
/* Creating Objects - Encapsulating State and Behavior in Objects */

console.log('----- Object Literal Notation -----');
const bookItem = {
  // the state of the object is described by its properties
  title: 'JavaScript: The Comprehensive Guide',
  price: 59.99,
  author: 'Philip Ackermann',
  isbn: '978-1-4932-2286-5',

  // the behavior of the object is described by its methods
  displayDescription: function () {
    console.log(`${this.author}: ${this.title}`);
  },
};
console.log(`${bookItem.title} \n${bookItem.author} \n${bookItem.price} \n${bookItem.isbn}`);
bookItem.displayDescription();

console.log('----- Object via Object Entries -----');
// requires an array of individual arrays with two array elements each
const bookInfoArrayEntries = [
  ['title', 'JavaScript: The Comprehensive Guide'],
  ['price', 59.99],
  ['author', 'Philip Ackermann'],
  ['isbn', '978-1-4932-2286-5'],
  [
    'displayDescription',
    function () {
      console.log(`${this.author}: ${this.title}`);
    },
  ],
];
const bookObjFromEntries = Object.fromEntries(bookInfoArrayEntries);
console.log(bookObjFromEntries);
console.log(`${bookObjFromEntries.title} \n${bookObjFromEntries.author} \n${bookObjFromEntries.price} \n${bookObjFromEntries.isbn}`);
bookObjFromEntries.displayDescription();

console.log('----- Object via Constructor Functions -----');
