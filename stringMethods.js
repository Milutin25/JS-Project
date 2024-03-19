let text = "String Methods";
let length = text.length // string length calculation
console.log(length);

console.log (text[1]); //extracting string characters, letter with position 1 in this case

let char1 = text.charCodeAt(1) //this method returns UTF-16 Code
console.log(char1)

let char2 = text.at(1); //the newest way to extract string character
console.log(char2);

let part = text.slice (3,10); // to extract part or slice of string
console.log(part);
