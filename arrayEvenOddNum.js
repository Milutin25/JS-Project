let num = [1, 5, 9, 14, 27, 55, 96];
let evenArray = [];
let oddArray = [];
for (let i = 0; i < num.length; i++){
    if  (num[i] % 2 ===0){
        evenArray.push(num[i]) ;
}
    else 
        oddArray.push(num[i]);
}


console.log(evenArray)
console.log(oddArray);