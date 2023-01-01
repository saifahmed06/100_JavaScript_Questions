//Q54:// program to trim a string

function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result = trimString('    Hello world    ');
console.log(result);