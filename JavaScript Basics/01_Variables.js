// const accountId 
// const account_Id
// const account_id
// common syntax of variable declaration

const accountId = 123244
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountcity = "Jaipur" // can declare like this also but it is not a good practice. 
let accountState; // print undefined

// accountId = 2 // not allowed to change const variable

console.log(accountId);

// another way is displaying using .table

console.table([accountEmail, accountId, accountPassword, accountState])

/*
    Prefer not to use var
    because of issue in block scope functional scope
*/
