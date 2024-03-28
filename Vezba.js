//Create an array of numbers, then use a for loop to find and print the smallest number in the array.

let myArray = [ 3, 6 , 89, 45, 73, 25];
let smallestNum = myArray[0];
let biggestNum = myArray[0];
for ( let i = 0; i <= myArray.length; i ++){

    if (smallestNum > myArray[i]){
        smallestNum = myArray[i];         
}
    else if (biggestNum < myArray[i]){
        biggestNum = myArray[i];
    }
} console.log(smallestNum); 
    console.log(biggestNum)