/*Test cases
console.log(reverseWords("hello world")); // Output: "dlroW HellO"
console.log(reverseWords("javascript is awesome")); // Output: "emosewA sI ScripT"
console.log(reverseWords("openai's language models are impressive")); // Output: "evissrepmI erA slleduoM eguaG languagE openaI'"*/

let words = "javascript is awesome"; 

let arrayWords = words.split(" ");

for (let i = 0; i < arrayWords.length; i++){
    arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1);
}
arrayWords = arrayWords.toString();
let noCommaArray = arrayWords.replaceAll (",", " ");

let reverseWords = "";
for (let i = noCommaArray.length; i >= 0; i--){
    reverseWords += .charAt(i);
}
console.log(reverseWords);
