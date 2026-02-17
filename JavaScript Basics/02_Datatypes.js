"use strict"; // treat all js code as newer version

// alert(3+3) // won't work because we are using node not browser

// number => 2
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not defined
// symbol => unique

console.log(typeof "Sonu"); // string


console.log(typeof null); // object

console.log(typeof undefined); // undefined


// There are two types of data 
// one is primitive another is non-primitive

// primitive 7 type
// String, Number, Boolean, null, undefined, Symbol, BigInt

const bigNumber = 97821493273294729790439048973n // automatically converts into bigINT must add n at last

// Reference (Non primitive)
// Array, Objects, Functions

// Array 
const heros = ["shaktiman", "SpiderMan", "Ironman"]
// object
let myObj = {
    name: "Sonu",
    age: "21",
}

function sum() {

    console.log("Hello World");   
}

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "DestinyOfGamers"
let anotherName = myYoutubename
anotherName = "Sonutalks"

console.log(myYoutubename);
console.log(anotherName);



