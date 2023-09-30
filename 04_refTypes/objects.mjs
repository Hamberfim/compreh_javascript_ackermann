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
function JavaScriptBook(title, price, author, isbn) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.isbn = isbn;
  this.displayDescription = function () {
    console.log(`${this.author}: ${this.title}`);
  };
}
const jsBook = new JavaScriptBook('JavaScript: The Comprehensive Guide', 59.99, 'Philip Ackermann', '978-1-4932-2286-5');
const nodeBook = new JavaScriptBook('Node.js: The Comprehensive Guide', 59.99, 'Sebastian Springer', '978-1-4932-2292-6');
jsBook.displayDescription();
nodeBook.displayDescription();

console.log('----- Objects Using Classes -----');
class NodeJSBook {
  constructor(title, price, author, isbn) {
    this.title = title;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
  }
  displayDescription = function () {
    console.log(`${this.author}: ${this.title}`);
  };
}
const nodeJSBook = new NodeJSBook('Node.js: The Comprehensive Guide', 59.99, 'Sebastian Springer', '978-1-4932-2292-6');
nodeJSBook.displayDescription();

console.log('----- Objects via Object.create() function helper method -----');
// this method expects the prototype of the object to be created followed by an object with names key/value object pairs
// this object creation method also allows for property attributes to configure individual object properties
// these attributes are: writable, enumerable, configurable.
const bestJsBook = Object.create(Object.prototype, {
  title: {
    value: 'JavaScript: The Comprehensive Guide',
    // title cant be changed
    writable: false, // can this value be overwritten
    enumerable: true, // is this property include when iterating over this objects properties
    configurable: true, // can this value have it's attributes re-configures afterwards
  },
  price: {
    value: 59.99,
    // price can be changed
    writable: true, // can this value be overwritten
    enumerable: true, // is this property include when iterating over this objects properties
    configurable: true, // can this value have it's attributes re-configures afterwards
  },
  author: {
    value: 'Philip Ackermann',
    writable: false, // can this value be overwritten
    enumerable: true, // is this property include when iterating over this objects properties
    configurable: true, // can this value have it's attributes re-configures afterwards
  },
  isbn: {
    value: '978-1-4932-2286-5',
    writable: false, // can this value be overwritten
    // no output during iteration
    enumerable: false, // is this property include when iterating over this objects properties
    configurable: true, // can this value have it's attributes re-configures afterwards
  },
  displayDescription: {
    value: function () {
      console.log(`${this.author}: ${this.title}`);
    },
  },
});
// iterate over object and it properties
for (let property in bestJsBook) {
  console.log(property);
}
// bestJsBook.title = 'Some other title'; // TypeError: Cannot assign to read only property 'title' of object
console.log('original price:', bestJsBook.price);
bestJsBook.price = 10.99;
console.log('writable:', bestJsBook.price);
console.log('----- display the configuration of an objects property -----');
const propertyDescriptor = Object.getOwnPropertyDescriptor(bestJsBook, 'title');
console.log(propertyDescriptor);
console.log('----- display the configuration of multiple properties of an object -----');
const allPropertyDescriptors = Object.getOwnPropertyDescriptors(bestJsBook);
console.log(allPropertyDescriptors);
console.log('----- dot.notation vs bracket["notation"] -----');
console.log(bestJsBook.price);
console.log(bestJsBook['price']);
const productOne = {};
productOne['name'] = 'Chewing Gum';
productOne['price'] = 1.49;
productOne['productDescription'] = function () {
  console.log(`${this.name} is $${this.price}`);
};
productOne.productDescription();
// requires the use of bracket notation because of the property key-name
const person = {
  'first-name': 'Jon',
  'last-name': 'Doe',
};
console.log(person['first-name'], person['last-name']);
console.log('----- Using access properties -----');
// data encapsulation using access properties:
//      set - specifies which function is called when there is write access,
//      get - specifies which function is called when there is read access
const item = {
  _itemName: 'candy bar',
  set itemName(newItemName) {
    if (typeof newItemName === 'string') {
      console.log(' -- set new item name');
      this._itemName = newItemName;
    } else {
      throw new TypeError('Make must be a string');
    }
  },

  get itemName() {
    console.log(' -- returning item name');
    return this._itemName;
  },
};
console.log(item.itemName);
item.itemName = 'Pizza';
console.log(item.itemName);

console.log('----- Defining Objects properties and method using defineProperty() function helper method -----');
const productTwo = {};
Object.defineProperty(productTwo, 'name', { value: 'Brisket sandwich', writable: true, enumerable: true, configurable: true });
Object.defineProperty(productTwo, 'price', { value: 5.99, writable: true, enumerable: true, configurable: true });
console.log(productTwo);
const productThree = {};
Object.defineProperties(productThree, {
  name: {
    value: 'French Fries',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  price: {
    value: 1.99,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  calories: {
    value: 370,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(productThree);
delete productThree.calories;
console.log(productThree);
