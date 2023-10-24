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
