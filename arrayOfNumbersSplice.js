let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

for ( let i = 0; i < arrayOfNumbers.length; i ++){
    if ( arrayOfNumbers[i] % 2 ==0){
        arrayOfNumbers.splice(i,1);
    }
}
for (let j = 0; j < arrayOfNumbers.length; j++ ){
        arrayOfNumbers.splice(j,1,arrayOfNumbers[j] * arrayOfNumbers[j]);
}
console.log(arrayOfNumbers);

