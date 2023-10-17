// working with strings
const firstName = "Mark";
const fullName = "Mark Mustermann";
const nickName = "MarkMust";

// strings are really just an array with each char having an index position
console.log(firstName[0]);
console.log(firstName[1]);

console.log(fullName[5]);
console.log(fullName[6]);

function minMaxName(userName) {
  if (userName.length < 5) {
    console.log("Name must be at least 5 characters in length.");
  } else if (userName.length > 8) {
    console.log("Name must be no more than 8 characters in length.");
  } else {
    console.log("Name length is valid.");
  }
}
minMaxName(firstName);
minMaxName(fullName);
minMaxName(nickName);

// first occurrence of
console.log(fullName.indexOf("u")); // 6
console.log(fullName.indexOf("mann")); // 11

// first occurrence starting from an index position
console.log(fullName.indexOf("M", 4)); // start at index four which is the space / 5

//extract part of a string
console.log(fullName.slice(0, 4)); // fullName.slice(start, stop) / Mark
console.log(fullName.substring(5, 11)); // Muster
