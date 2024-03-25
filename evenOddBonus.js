let num = [1, 5, 9, 14, 27, 55, 96];
let evenNum = [];
let oddNum = [];

num.forEach((num)=> num % 2 === 0 && evenNum.push(num));
num.forEach ((num)=> num % 2 != 0 && oddNum.push(num));
console.log(evenNum);
console.log(oddNum);