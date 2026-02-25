// Immediately Invoked Function Expressions (IIFE)
// IIFE is the function that immediately executes

(function chai(){
    console.log(`DB CONNECTED`);
})(); // add semi colon to end the function because it is invoked immediately and don't know when to end if not semi colon no other function will work.
// this is a normal function

// syntax for it 
//()() // first parenthesis is for function name and second () is for executing the function

// can we write this in arrow function style, Yes of course
( () => {
    console.log(`DB CONNECTED TWO`);
    
} )();

// how to pass parameters in the IIFE function
// in brackets pass parameters for example

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`); // access parameter
} )("Sonu") // pass arugment here in the brackets


// how to write an named IIFE
( function somefunction () {
    // named IIFE
    console.log(`DB CONNECTED FOUR`);
} )();




