// Using Maps - map refers to data structures of stored key-value pairs

// maps constructor function - creating a map based on an array - an iterable object
const numOfStudioAlbums = new Map([
  ["Kyuss", 1],
  ["Tool", 6],
  ["Monster Magnet", 8],
  ["Ben Harper", 9],
  ["Queen of the Stone Age", 6],
]);
console.log(numOfStudioAlbums.size); // prints 5
numOfStudioAlbums.set("Talking Heads", 8);
console.log(numOfStudioAlbums.size);
console.log(numOfStudioAlbums.has("Ben Harper"));
console.log(numOfStudioAlbums.get("Ben Harper"));
numOfStudioAlbums.delete("Tool");
console.log(numOfStudioAlbums.size);

// iteration
console.log("\n--- iteration via the map's index position of each key value ---");
for (let item of numOfStudioAlbums) {
  console.log(item[0], item[1]);
}

console.log("\n--- iteration via entries() ---");

for (let band of numOfStudioAlbums.entries()) {
  console.log(band);
}

console.log("\n--- iteration via keys() ---");

for (let band of numOfStudioAlbums.keys()) {
  console.log(band);
}

console.log("\n--- iteration via values() ---");

for (let band of numOfStudioAlbums.values()) {
  console.log(band);
}

console.log("\n--- destructuring via entries() ---");
for (let [bandName, numAlbums] of numOfStudioAlbums.entries()) {
  console.log(`${bandName} has produced ${numAlbums} studio album(s).`);
}

console.log("\n--- clear() ---");
numOfStudioAlbums.clear();
console.log(numOfStudioAlbums.size);
