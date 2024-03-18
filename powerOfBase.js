let base = 3;
let exponent = 2;
let powerOfABase = 1;
if (exponent === 0){
    console.log("The power of number is: " + base);
}
else if (base === 0){ 
    console.log("Base number cannot be 0.");
}
else{
    for (let i = 1; i <=exponent; i++){
        powerOfABase *= base 
      
    }
    console.log("The power of number is:" + powerOfABase);
}
