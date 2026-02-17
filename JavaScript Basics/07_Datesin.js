// Dates 

let myDate = new Date()
// console.log(myDate); // print the present time and date
// console.log(myDate.toDateString()); // prints only the date no time example: Sun Feb 15 2026
// console.log(myDate.toLocaleDateString()); // o/p = 2/15/2026

// console.log(typeof myDate); // o/p = object

// console.log(myDate.toISOString()); // same output as myDate direct print but in string type

// console.log(myDate.toJSON()); // same as toISOString

// console.log(myDate.toLocaleString()); // o/p = 2/15/2026, 5:58:40 PM

// let myCreateDate = new Date(2023, 0, 23) // how to declare a date here
// console.log(myCreateDate.toDateString()); // o/p = Mon Jan 23 2023 gives you the day of the date that you have given in the object.

// formats of dates
// let myCreateDate = new Date("2023-01-14") // year/month/date
let myCreateDate = new Date("01-14-2023") // month/date/year system's format
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // this gives the time in mili seconds and in numbers because to how finished the coding in the first place

const newDate = new Date()
console.log(newDate.getMonth()); // o/p = 1 but it is feb month remainder month starts from zero 0, 1, 2

// same way you can print day and more...










