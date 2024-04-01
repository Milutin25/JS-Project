let myArray = [5, 16, 2, 11, 4, 8, 1, 25, 12, 98, 22];
let newArray = [];

for (let i = 0; i < myArray.length; i++){

    if(myArray[i] > 10){

        newArray.push(myArray[i]);    
    }    
}
console.log(newArray)
newArray = newArray.sort();
console.log(newArray);