let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);        some basic operations
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Sonu"
let str3 = str1 + str2
console.log(str3);

// first priority
console.log("1" + 2); // first is string so converted into string everything
console.log(1 + "2"); // here first is number but second is string so it attached
console.log("1" + 2 + 2); // first is string so convert everything into string
console.log(1 + 2 + "2"); // first is number so added it and attached with string

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false because symbol is uniques


