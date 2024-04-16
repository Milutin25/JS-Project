/*Write a function makeMultiplier
that takes one parameter. This function
should return another function that takes
one parameter and returns the product of 
both parameters.*/

function makeMultiplier (num_one){
    return function (num_two){
        return num_one * num_two
    }

}
const newMultiplier = makeMultiplier(5);
console.log(newMultiplier(5));