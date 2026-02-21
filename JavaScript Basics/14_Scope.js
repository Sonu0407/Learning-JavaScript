let a = 100
const b = 200


{
    let a = 10
    const b = 20
    var c = 30
    // console.log(a); // o/p: 10
    // console.log(b); // o/p: 20
    
} // this is a scope starts from here


// console.log(a);// error not defined and now it is 100
// console.log(b);// error not defined and now it is 200
// console.log(c);// o/p: 30 because var is gobal variable


// nested scope
function one() {
    const username = "hitesh"

    function two() {
        const website = "Youtube"
        console.log(username); // but username is like gobal variable can be used within one function

        function three() {
            console.log(username); // o/p: hitesh same like a gobal variable for this function  
        }
        three() 
    }
    // console.log(website) // gives error because scope is within the function two
    two()
}

one()