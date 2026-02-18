
// how to declare object in singleton object using constructor
const twitterUser = new Object() // this singleton object
const facebookUser = {} // this is not singleton object

// inserting values in object
twitterUser.id = "123abc"
twitterUser.name = "Sam"
twitterUser.isloggedIn = false

// console.log(twitterUser);

// different types value to be accessed 
// console.log(Object.keys(twitterUser)); // o/p: [ 'id', 'name', 'isloggedIn' ]
// console.log(Object.values(twitterUser)); // o/p: [ '123abc', 'Sam', false ]
// console.log(Object.entries(twitterUser)); // o/p: [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isloggedIn', false ] ]

// nested objects declaration
const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shekar",
            lastName: "Sonu"
        }
    }
}

// how to access objects in nested objects
// console.log(regularUser.fullName.userFullName.firstName); // like this

// merge the objects

const obj1 = {1: 'a', 2: "b"}
const obj2 = {3: 'a', 4: "b"}
const obj3 = {5: 'a', 6: "b"}
// const obj4 = {obj1, obj2, obj3} // but this does not work as expected returns every object in single single array like this o/p: 
/*{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}*/

// so solution is this
const obj4 = Object.assign(obj1, obj2, obj3) // assign works as join method in objects
// console.log(obj4); // this works as excepted

// or use spread operator
const obj5 = {...obj1, ...obj2, ...obj3} // this is also works and most used one
// console.log(obj5); // this also works as excepted












