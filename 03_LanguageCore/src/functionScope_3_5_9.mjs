let name = 'Karl';
/**
 * @this {any}
 */
function getName() {
  return this.name;
}

const person1 = {
  name: 'John',
  getName: function () {
    return this.name;
  },

  getInnerName: function () {
    let name = 'Pete';
    return this.name; // 'this' is mapped to the scope of the object not the function in the object
  },
};

const person2 = {
  name: 'Billy',
  getName: function () {
    return this.name;
  },

  getInnerName: function () {
    let name = 'Tamra';
    return name; // without 'this' it is mapped to the scope of the function
  },

  willGetGlobalScopeName: function () {
    name: 'Larry';
    return name; // without 'this' and no re-declaring of the variable it is mapped to the global scope
  },
};

// console.log(getName()); // undefined
console.log(person1.getName());
console.log(person1.getInnerName());
console.log(person2.getName());
console.log(person2.getInnerName());
console.log(person2.willGetGlobalScopeName());

// START TRY/CATCH page 204
