let n = 11;
let isPrime = true;
// prime is greater than 1
// number is only divisable by itself
// square root of prime number is not whole number

if (n < 2){
    console.log("number 1 is not a prime number");
} else {
    for (let i = 2; i < Math.sqrt(n); i++){
        if ( n % i === 0){
            isPrime = false;
            break;
        }
    }
}
console.log(n + " is " + (isPrime ? "a prime number." : "not a prime number."));
