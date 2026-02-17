const score = 400
// console.log(score); // o/p 400

// by default it will a number datatype 

// if you want to declare explicitly then do this in js
const balance = new Number(100) // insert your value
// console.log(balance); // specifically [Number: 100]

// console.log(balance.toString()); // one of the number method
// console.log(balance.toString().length); // after converting to string you can access the string methods as well this the cool feature and to be noted

// console.log(balance.toFixed(2)) // gives the value after decimal point example 100.00

const otherNumber = 23.5866

// console.log(otherNumber.toPrecision(4)); // this gives precise value for example if value is above 5 and above 5 means it will round off to the next number or if it is before 5 then it will stay the same for instance value = 23.58.toPrecision(4) o/p is 23.59 is the output.

const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // o/p = 1,000,000 us format of number system
// console.log(hundreds.toLocaleString('en-IN')); // convert english number system to indian number system by this 'en-IN' o/p = 10,00,000


// Now About Maths

console.log(Math); // o/p = Object [Math] {}
console.log(Math.abs(-4)); // o/p = 4 gives the negative value to positive value
console.log(Math.round(4.6)); // o/p = 5 gives the round up value
console.log(Math.ceil(4.2)); // o/p = 5 if the value after the decimal point is any number it gives the increment of the number ex: 4.2 -> 5
console.log(Math.floor(4.2)); // o/p = 4 it is just opposite to the ceil method if value after decimal point it gives the same number back.

console.log(Math.min(4, 3, 6, 8)); // o/p = 3 gives the minimum value
console.log(Math.max(4, 3, 6, 8)); // o/p = 8 gives the maximum value

console.log(Math.random());
console.log(Math.round((Math.random()*10) + 1));











