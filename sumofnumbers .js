/*Write a function that takes a non-negative integer
and returns the sum of its digits. If the sum contains 
more than one digit, continue reducing in this way until
  
a single-digit number is produced.

565 = 5 + 6 + 5 = 16 = 1 + 6 = 7*/


let num = 943;
let sum = num;

while(sum >= 10){
    let tempSum = 0;
    while(sum >0){
        tempSum += sum % 10
        sum = Math.floor(sum / 10);
    }
    sum = tempSum
}
console.log(sum);