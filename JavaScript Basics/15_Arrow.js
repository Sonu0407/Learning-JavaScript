function func() {
    console.log(this); // o/p: is many object when we run inside a function
}

// func()

console.log(this); // o/p: {}

// if you want to use in functions what happens

function two() {
    let username = "Sonu"
    console.log(this.username); // o/p: undefined cannot use this in functions
    console.log(username); // o/p: Sonu
}

two()

// how to declare a arrow function

const arrowFunction = () => {
    // this is the syntax for arrow function
}

// adding two number by arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4)); // o/p: 7

// arrow function in one line of code 

const addTwo = (num1, num2) => (num1 + num2) // if you add curly braces then you need explicitly give the return or if you add parenthesis as the above function then you don't need to add the return thing at all. Note: Used more in reactjs

console.log(addTwo(3, 4));



