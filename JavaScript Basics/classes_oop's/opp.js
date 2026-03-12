// what is object literals
const user = {
    username: "Sonu",
    loginCount: 10,
    siginedIn: true,
    
    // function inside object
    getUserDetails: function() {
        // console.log("Got User details from databases");
        console.log(this);
        
    }


} // this is only called object literal means this is literally object only

console.log(user.username); // Sonu
console.log(user.getUserDetails()); // give everything from current context as output
/* 
    username: "Sonu",
    loginCount: 10,
    siginedIn: true,
*/





