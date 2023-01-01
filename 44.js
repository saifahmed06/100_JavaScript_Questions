//Q44: program to clone the object

// declaring object
const person = {
    name: 'Saif',
    age: 23,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);