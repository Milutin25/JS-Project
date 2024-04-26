function processing(){
    let input1 = Number(document.getElementById("textField1").value);
    let input2 = document.getElementById("textField2").value;
    let input3 = Number(document.getElementById("textField3").value);
    let result;
    

    if (input2 === "+"){
        result = add(input1, input3);
    }
    if (input2 === "-"){
        result = substract(input1, input3);
    }
    if (input2 === "*"){
        result = multiply(input1, input3);
    }
    if (input2 === "/"){
        result = divide(input1, input3);
    }
    outputArea.innerHTML = result;
}

function add(num1, num2){
    let sum = 0;
    sum = num1 + num2;
    return sum;
}
function substract(num1, num2){
    let sum = 0;
    sum = num1 - num2;
    return sum;
}
function multiply(num1, num2){
    let sum = 0;
    sum = num1 * num2;
    return sum;
}
function divide(num1, num2){
    let sum = 0;
    sum = num1 / num2;
    return sum;
}