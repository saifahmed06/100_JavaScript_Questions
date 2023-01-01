//Q20:JavaScript Program to Make a Simple Calculator


// take the operator input
const operator = "+";"-";"*";"/"

// take the operand input
const number1 = parseFloat();
const number2 = parseFloat();

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);