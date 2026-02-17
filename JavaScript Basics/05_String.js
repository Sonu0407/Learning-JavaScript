const name = "Sonu"
const repoCount = 50

// console.log(name + " " + repoCount + " Value"); this is bad practice

//console.log(`Hello my name is ${name} and the Count is ${repoCount}`); // this is called string interpolation

console.log(typeof name);

// how to declare a object-string

const string = new String('Sonu')

console.log(string) // o/p: [String: 'Sonu']
console.log(typeof string) // object
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.charAt(2));
console.log(string.indexOf('n'));


const newString = string.substring(0, 2)
console.log(newString);

const anotherString = string.slice(-3, 2)
console.log(anotherString);

console.log(string.trim()); // removes white spaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

const myName = new String("S-O-N-U")

console.log(myName.split('-', 2));
