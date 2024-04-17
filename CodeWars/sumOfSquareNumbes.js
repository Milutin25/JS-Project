function squareSum(numbers){
    return numbers.reduce((total,current) => total + current * current, 0);

}
const numbers = [2,5,4];
const result = squareSum(numbers);
console.log(result);