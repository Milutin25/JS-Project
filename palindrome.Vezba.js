//Write a for loop that checks if a given string is a palindrome (a word that reads the same backward as forward) and prints true or false.

let givenString = "Milutin";
let isPalindrome = true;
givenString = givenString.toLowerCase();
backwardString = "";

for ( let i = givenString.length - 1; i >= 0; i--){
    backwardString += givenString[i];
}
    if (backwardString == givenString)
        console.log(isPalindrome);
    
    else
        console.log(false);

