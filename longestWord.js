/*Write a function that takes a sentence as input
 and returns the longest word in the sentence. 
 In case of a tie, return the first occurring 
 longest word.*/


const sentence = "The quick brown fox jumped over the lazy dog";


let arrOfStrings = sentence.split(" ")
let longestword = arrOfStrings[0];



for (let i = 0; i < arrOfStrings.length; i++){

    if (longestword.length < arrOfStrings[i].length){

        longestword = arrOfStrings[i];
    }
}console.log(longestword);
