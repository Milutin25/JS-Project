let num = 77869; 

function sumOfNumbers (y) {
    let numToString = y.toString();

    let stringToArray = numToString.split("");

    let sumOfNum = 0; 

    for (let i = 0; i < stringToArray.length; i++) { 
        let arrayOfNums = Number(stringToArray[i]);
        sumOfNum += arrayOfNums;
    } 

        if (sumOfNum > 10){

            let sumString = sumOfNum.toString();
            let sumArray = sumString.split("");
            let finalSum = 0; 

            for (let j = 0; j < sumArray.length; j++) { 
                let sumArrayNums = Number(sumArray[j]);
                finalSum += sumArrayNums;
            }
            return finalSum;
            } else {
            return sumOfNum;
        }
}

console.log(sumOfNumbers(num));

function sumOfDigits(num) {
    let sum = num;

    while (sum >= 10) { // Keep looping until sum is a single digit
        let tempSum = 0;
        while (sum > 0) {
            tempSum += sum % 10; // Add the rightmost digit to tempSum
            sum = Math.floor(sum / 10); // Remove the rightmost digit from sum
        }
        sum = tempSum; // Update sum to the new sum of its digits
    }

    return sum;
}

const number = 942;
console.log(sumOfDigits(number));