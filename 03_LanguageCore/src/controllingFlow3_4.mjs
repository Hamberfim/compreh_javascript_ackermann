// basic setup for Node.js input/output - .mjs is the newer ES to use await/async
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// let milesDriven = await rl.question('How many miles did you drive? ');

// Controlling Flow of a program - branching, nested, complex and assignment
let isAtLeast21 = false;
let isAtLeast18 = false;
let isLoggedIn = true;
const age = await rl.question('Enter your age: ');
if (!isNaN(parseFloat(age)) && isLoggedIn) {
  if (age >= 21) {
    isAtLeast18 = true;
    isAtLeast21 = true;
    console.log('As a logged in member 21 or over you can view our Alcohol products.');
  } else if (age >= 18 && isLoggedIn) {
    isAtLeast18 = true;
    console.log(
      'As a logged in member who is at least 18 but younger than 21 you can view our age appropriate products.'
    );
  } else {
    isLoggedIn = false;
    isAtLeast18 = false;
    isAtLeast21 = false;
    console.log('You must be at least 18 and be logged in to access the member content.');
  }
} else {
  isLoggedIn = false;
  isAtLeast18 = false;
  isAtLeast21 = false;
  console.log('You must enter your age, be at least 18 and be logged in to access the member content.');
  console.log('You are being automatically logged out');
}

console.log(`Is logged in: ${isLoggedIn}`);
console.log(`Is at least 18: ${isAtLeast18}`);
console.log(`Is at least 21: ${isAtLeast21}`);

// ternary selection operator syntax: <condition> ? <value if true> : <value if false>
const hasFullAccess =
  isLoggedIn && isAtLeast21
    ? console.log('You have full membership access!')
    : console.log('You do not have full membership access!');

console.log('\n'); // break viewing space

// switch branching

switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log('☠️  DANGER!');
    break;
  case 2:
    console.log('⚠️  WARNING!');
    break;
  case 3:
    console.log('✅  SUCCESS!');
    break;
  default:
    console.log('👽  UNKNOWN RETURN!');
    break;
}

// close the created interface
rl.close();
