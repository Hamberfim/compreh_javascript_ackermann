// Working with Arrays
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
