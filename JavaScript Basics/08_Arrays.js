// array

const myArr = [0, 1, 2, 3, 4, 5] // declarations of array
const myHeros = ['shaktiman', 'siperman', 'etc'] // declare for string

const myArr2 = new Array(1, 2, 3, 4) // here dont need to add brackets it adds automatically in behind the scence
// console.log(myArr2[2]); 


// Array methods
// console.log(myArr);
// console.log(myArr.push(6)); // to add element at the end of the array
// console.log(myArr);
myArr.pop() // delete the last element from the array

myArr.unshift(5) // adds elements at the beginning that's all 
myArr.shift() // removes elements at the beginning that's all

console.log(myArr.includes(9)); // returns in boolean value whether 9 is in array or no

console.log(myArr.indexOf(4)); // returns the index of the array

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // it automatically convert into string and join the arrays given to it.

// splice and slice

const myarr1 = myArr.slice(1, 3) // slice will just show a part in the next line and don't change the original array it does'nt include the last value means (n-1)

console.log("slice", myarr1);
console.log("Original Array ", myArr);


// splice means it will remove the part from the array and it will change the original array here. and it includes last value also

const myarr2 = myArr.splice(1, 3)

console.log("splice ", myarr2);
console.log("Original Array ", myArr);








