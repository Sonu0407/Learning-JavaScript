// for of loop

["", "", ""] // array of string objects
[{}, {}, {}] // array of objects

const arr = [1, 2, 3, 4, 5]

// this is forof syntax and element can be named anything and object is arr as it is in for loop
// for (const element of object) {
    
// }

for (const num_of_arr of arr) {
    //console.log(num_of_arr);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(greet);   
}

// map
const map = new Map() // it is an object
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("IN", "India") // this does'nt add because map are known for unique values

// console.log(map);

// how to print each one in the loop
for (const key of map) { // this gives every lines of data in array
    //console.log(key);
}

// for individual printing
for (const [key, value] of map) { // syntax for print in both key and value pair
    //console.log(key, "->", value)
}
// IN -> India
// USA -> United States Of America

const myObject = {
    'game1': 'NFS',
    'game2': 'RED_DEAD',
    'game3': 'GTA5'
}

// for (const [key, value] of myObject) {
//     //console.log(key, '->', value); // this doesn't work because object cant iterate but there other type to do these things
    
// }

console.log(myObject.game1); // accessing 
console.log(myObject['game3']); // accessing


