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
console.log(studioAlbums.has(artist1)); // true
console.log(studioAlbums.get(artist1)); // 10
studioAlbums.delete(artist5);
