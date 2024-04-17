/*Create a function createMathOp
that takes a mathematical operator as a string 
('+', '-', '*', '/'). Return a function that takes two 
parameters (a and b). When this returned function is called,
it should apply the operation to a and b
and return the result. Use currying and 
closures to encapsulate the operator and operands.*/


function createMathOp(operator){
    return function(a,b){
        switch (operator){
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                console.log("Invalid operator");    
        }
    }
}

const add = createMathOp ("+");
console.log(add(10,11));

const substract = createMathOp ("-");
console.log(substract(25,11));

const multiply = createMathOp ("*");
console.log(multiply(25,11));

const divide = createMathOp ("/");
console.log(divide(25,11));
