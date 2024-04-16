/*Create a function processUserInput
that accepts an integer. If the integer
is less than 10, return "Input is less than 10".
 If the integer is between 10 and 20, return 
 "Input is between 10 and 20". Otherwise, return 
 "Input is greater than 20".*/

 function processUserInput(num){
    if (num < 10){
        return "Input is less than 10";
    }
    if (num > 10 & num < 20){
        return "Input is between 10 and 20";
    }
    else {
        return "Input is greater than 20";
    }
 }
 console.log(processUserInput(25));