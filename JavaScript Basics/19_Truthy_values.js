// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN these all are falsy values

// truthly values

// Non-empty strings: "0", "false"

// Numbers other than 0: 42, -42, 3.14

// Arrays: []

// Objects: {}

// Functions: function(){}


// Nullish Coalescing Operator (??): null undefined

let val;
// val = 5 ?? 10 // o/p: 5
// val = null ?? 10 // o/p: 10 if no number or anything returns then it will automatically assigns null to the variable or take number as variable as value if it comes
val = undefined ?? 15 // o/p: 15 same as null and undefined


console.log(val);

// Terniary operator and Note: Nullish operator and Terniary are different

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")



