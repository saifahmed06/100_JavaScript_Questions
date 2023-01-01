//Q26:// program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(5);

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);