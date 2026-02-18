/*

objects can be declared in three forms:
1. singleton
2. Using Object.create
and finally in
3. object literals

*/

// how to declare objects in literals
const users = {
    name: "Sonu",
    age: 21,
    number: 9035550671,
    email: "sonu.sapri2004@gmail.com"
}

// access the objects ways
// console.log(users.name); // 1 way
// console.log(users["age"]); // 2nd way

// how to declare a symbol
const mysym = Symbol('myKey')

// how to declare a Symbol in object syntax
const object2 = {
    name: "monica",
    age: 24,
    [mysym]: "mykey1", // use square brackets for Symbol
    email: "monica.sjan02@gmail.com"
}

// console.log(object2[mysym]); // access Symbol

object2.name = "Sonu"
// Object.freeze(object2) // this freezes the value does not allow to change it further by anyone
// object2.name = "Gunavathi"
// console.log(object2);

users.greeting = function () {
    console.log("Hello, User");
    
}

object2.greeting_userbyname = function () {
    console.log(`Hello, ${this.name}`); // this keyword access everything that object has.
    
}

console.log(users.greeting());
console.log(object2.greeting_userbyname());