//Q88 Javascript Program to Generate a Random Number Between Two Numbers

const min = parseInt(1);
const max = parseInt(50);

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);