/*Define a curried function add
that can take three numbers as 
arguments but does so one at a time. 
For example, add(1)(2)(3)
should return 6.*/

function add(x){
    return function (y){
        return function (z){
            return x + y + z;
        };
    };
}
const result = add(1)(2)(3);
console.log(result);