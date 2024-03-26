let array = [1,2,5,7,9,25];
let sum = 0;

for ( let i = 0; i < array.length; i++){
    sum += Math.pow(array[i],2);
}
console.log(sum);