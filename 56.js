//Q56:// program to check if a string contains a substring

// take input
const str = "saif Ahmed";
const checkString = "Ahmed";

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}