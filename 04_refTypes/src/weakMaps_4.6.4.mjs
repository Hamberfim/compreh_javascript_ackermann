/**
 * Using weak maps - objects are referenced weakly
 * Strings can not be used as keys, only objects can be used as keys
 * weak maps do not have the keys(), values() or entries() methods
 */

// objects to use as keys
const artist1 = { name: "David Byrne" };
const artist2 = { name: "Talking Heads" };
const artist3 = { name: "Smiths" };
const artist4 = { name: "Pretenders" };
const artist5 = { name: "Brian Eno" };

// WeakMap() constructor
const studioAlbums = new WeakMap();
// add objects as keys for each entry
studioAlbums.set(artist1, 10);
studioAlbums.set(artist2, 8);
studioAlbums.set(artist3, 4);
studioAlbums.set(artist4, 12);
studioAlbums.set(artist5, 29);
console.log(studioAlbums);
console.log(studioAlbums.has(artist1)); // true
console.log(studioAlbums.get(artist1)); // 10
studioAlbums.delete(artist5);

// Using sets 4.7  a data structure similar to a list
const artists = new Set(["David Byrne", "Talking Heads", "Smiths", "Pretenders", "Brian Eno"]);
console.log(artists.size);
// Set methods
artists.add("Tom Tom Club");
console.log(artists.has("Brian Eno"));
console.log(artists.size);
for (const artist of artists) {
  console.log(artist);
}

// WeakSet - similar to WeakMap
const topArtists = new WeakSet([artist1, artist2, artist3, artist4, artist5]);
console.log(topArtists);
console.log(topArtists.has(artist1));

// wrapper object for primitive types
const theNumberThree = new Number(3);
console.log(theNumberThree);
console.log(theNumberThree.toExponential());
console.log(theNumberThree.toPrecision(5)); // total display including number
console.log(theNumberThree.toFixed(2)); // addition decimal positions

// regular expressions - 4.9
const regExpConstruct = new RegExp("abcd"); // via constructor - input as a string
const regExpLiteralNotation = /abcd/; // via literal notation - faster than the constructor
// test - does the specific 'string' character pattern occur
console.log(regExpConstruct.test("abcdefg")); // true
console.log(regExpLiteralNotation.test("gfedcba")); // false
console.log(regExpLiteralNotation.test("abcdefg|gfedcba")); // does 'abcdefg' OR 'gfedcba' occur
let myRegExp = /...../; // at least any five string characters
console.log(myRegExp.test("497")); // false
console.log(myRegExp.test("49752")); // true
console.log(myRegExp.test("49752111")); // true
console.log(myRegExp.test("497  111")); // true - spaces count

// regEx character classes
myRegExp = /[abcde]/; // simple class
// contains on letter in one place
console.log(myRegExp.test("l")); // false
console.log(myRegExp.test("ghij")); // false
console.log(myRegExp.test("acd")); // true
console.log(myRegExp.test("cxyz")); // true

// range class
console.log(myRegExp.test("A-Z")); //  false no cap letters
const localLongPhoneNum = /[1].[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9][0-9]/; // #-###-###-####
console.log(localLongPhoneNum.test("1-515-967-1111")); // true
console.log(localLongPhoneNum.test("1 515 967 1111")); // true
console.log(localLongPhoneNum.test("3 515 967 1111")); // false
console.log(localLongPhoneNum.test("515-967-1111")); // false
const localPhoneNum = /[0-9][0-9][0-9].[0-9][0-9][0-9][0-9]/; // ###-####
console.log(localPhoneNum.test("515 967 1111")); // true
console.log(localPhoneNum.test("967-1111")); // true

// predefined classes
myRegExp = /\d\d\d\s\d\d\d\d/;
console.log(myRegExp.test("266 1111")); // true
console.log(myRegExp.test("266-1111")); // false
myRegExp = /\d\d\d-\d\d\d\d/;
console.log(myRegExp.test("266-1111")); // true

// limits
myRegExp = /^S/; // starts with 'S'
console.log(myRegExp.test("Smith"));
myRegExp = /h$/; // ends with 'h'
console.log(myRegExp.test("Smith"));
myRegExp = /^Smith$/; // exactly 'Smith'
console.log(myRegExp.test("Smith"));
console.log(myRegExp.test("Schmiths")); //false
console.log(myRegExp.test("Sh")); // false

// boundary
myRegExp = /\btoys\b/;
console.log(myRegExp.test("The children play with toys."));

// optional occurrences
myRegExp = /^Smith?$/; // h is optional
console.log(myRegExp.test("Smit")); // true
console.log(myRegExp.test("Smith")); // true
console.log(myRegExp.test("Smiths")); // false

// any number occurrences
myRegExp = /^Smith*$/;
console.log(myRegExp.test("Smit")); // true
console.log(myRegExp.test("Smith")); // true
console.log(myRegExp.test("Smithhhhh")); // true
console.log(myRegExp.test("Smiths")); // false

// exact
myRegExp = /^\d{3}-\d{4}$/; // ###-####
console.log(myRegExp.test("266-2222")); // true
console.log(myRegExp.test("1 266 2222")); // false
console.log(myRegExp.test("abc-2222")); // false

// replacement
let contactText = "Their private phone number is 515-266-1111";
console.log(contactText);
myRegExp = /\d{3}-\d{3}-\d{4}/;
contactText = contactText.replace(myRegExp, "<number redacted for privacy>");
console.log(contactText);

// functions as function arguments
function someFunction1(f) {
  console.log("function1 started");
  f();
  console.log("function1 ended");
}

function someFunction2() {
  console.log("function2 started");
  console.log("function2 ended");
}
someFunction1(someFunction2);
