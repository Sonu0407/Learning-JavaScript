// how to define a function in js
// using function keyword
// for exmaple 

// function sayMyName() {
//     console.log("S");
//     console.log("O");
//     console.log("N");
//     console.log("U");
// }

//sayMyName() // can call it n number of times
// sayMyName // this just a reference put parentesis to excute it 


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
    
// } // without return function it just prints in the console doesn't return
// anything

// const result = addTwoNumber(2, 3) // when you store your function in a variable without returning aything in the function then the output will be unfined because it is just printing in console as per the function

// same function in return value

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Sonu"); // Note: that after returning something no code will excute. that's the end
    
}

const result = addTwoNumber(2, 3)

// console.log(result);

// create function to show that user has loggined in 
function loginUserMessage(username) {

    return `${username} You Just Logined IN`
}

// console.log(loginUserMessage("Sonu").toUpperCase());

// default values function
function loginUserMessage(username = "No_Name_Given") { // if any value is given it will over write it.
    
    return `${username} You Just Logined IN`
}

// console.log(loginUserMessage()); // if nothing is given it will the default value if given in function

// Write a function with infinite argument support's it 
function infinite(...nums) { // ... is actually a spread operator but we can use it in this case also when we want to take n number of argument and Note: when this operator is used like it is called as REST operator done.
    return nums
}

// sconsole.log(infinite(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)); //
// o/p: [
//    100, 200, 300,
//    400, 500, 600,
//    700, 800, 900,
//   1000
// ]

// how to pass objects in functions

const user = {
    username: "Sonu",
    age: 21
}

function objectHandle(passanyobject) {
    console.log(`My name is ${passanyobject.username} and I am ${passanyobject.age} years old`); 
}

// this way 
// objectHandle(user)

// or can pass it directly also how?

// objectHandle({
    // username: "mon",
    // age: 24
// }) // this way

// various function syntax

console.log(addone(5)) // if it calling function on the top of function also will excute it without any error

function addone(nums) {
    return nums + 1
}



// 2nd ways can see this type of syntax in react

// console.log((addTwo(5))); // but it is not same in type function syntax it give you error while your are calling before the function

const addTwo = function(nums) {
    return nums + 2
}

console.log((addTwo(5))); // so always call after function definition in this syntax.




