/*Implement a function createCounter
that initializes a counter to 0 and
returns a function. When invoked, 
the returned function should increment the
counter by 1 and return the new count, but
without allowing direct access to the counter variable.*/

function createCounter(){
    let counter = 0;
    return function (){
        counter++;
        return counter;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());