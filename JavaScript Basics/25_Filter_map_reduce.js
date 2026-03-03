// how to use filter function

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynums.filter( (num) => num > 4 ) // same for foreach by it return as value filter but normal foreach doesn't

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// if using curly brackets {} then use return

// const newNumsWHENCURLYBRACKETS = mynums.filter( (num) => {
//     return num > 4 
// })

// console.log(newNumsWHENCURLYBRACKETS);

// using in foreach but different method

const newNums = []

mynums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums)

// map implementation

//const myNums = mynums.map( (num) => {return num + 10} )

// console.log(myNums);

// how to do an chain in map filter and more

const myNums = mynums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num > 50 )

// console.log(myNums);

// reduce
const number = [1, 2, 3]

// const myTotal = number.reduce(function (accumator, currentValue) {
//     console.log(accumator, currentValue);
//     //         0     + from number first_value = 1 = 1
//     //         1     + from number second_value = 2 = 3
//     //         3     + from number third_value = 3 = 6 ans 6
//     return accumator + currentValue
// }, 0)

// writing in callback function
const myTotal = number.reduce( (accumator, currentValue) => accumator + currentValue , 0)

console.log(myTotal); // 6




