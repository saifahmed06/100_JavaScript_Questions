//Q55: program to convert an object to a string

const person = {
    name: 'Saif',
    age: 23
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);