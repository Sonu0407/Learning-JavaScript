let score = "33abc" // or null o/p: 0 or when it is undefined o/p: NaN or when it is true boolean value the o/p: 1 or false means o/p: 0 that's it
console.log(typeof score);

let valueInNumber = Number(score) // this converts score type string to Number
console.log(typeof valueInNumber);

console.log(valueInNumber); // but when it is not a valid number like "3abc" example it will sure convert but when we print value we get an NOT AN NUMBER NaN value. so be carefull with numbers

let isLoggedIn = 'sonu'

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// '' => false
// 'sonu' => true

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);





