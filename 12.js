//Q12:program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(-7);
const num2 = parseFloat(-5);
const num3 = parseFloat(-1);
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);