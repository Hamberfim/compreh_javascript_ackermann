'use strict';
/* Encapsulating State and Behavior in Objects */
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
