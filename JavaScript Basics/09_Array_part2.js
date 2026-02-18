const marvel_Heros = ["Thor", "Ironman", "SpiderMan", "OnepunchMan"]
const dc = ["Superman", "Flash", "Batman"]

// marvel_Heros.push(dc) //  this creates an array inside an array

// console.log(marvel_Heros);
// console.log(marvel_Heros[4][1]); // o/p: Flash
    // console.log(dc);

// for proper merge

const all_Heros = marvel_Heros.concat(dc)

//console.log(all_Heros); // o/p: ["Thor", "Ironman", "SpiderMan", "OnepunchMan",
// "Superman", "Flash", "Batman"]

// one more for proper merge 
// spread operator

const all_New_Heros = [...marvel_Heros, ...dc] // ... this is speard operator

// console.log(all_New_Heros);

const another_Array = [1, 2, 4, 5, [6, 7, 8, [9, 10,]], [11, 12, 13], [14, [15]]]

const single_Array = another_Array.flat(Infinity) // flat makes the array inside into an single array and infinite keyword to define how much dept inside the flat go and we can numbers also 1 dept , 2 dept etc..

// console.log(single_Array);

// array check and create array by method

// console.log(Array.isArray("SonuS")); // checks if SonuS is an array or not
// console.log(Array.from("SonuS")); // create an array ['S', 'o', 'n', 'u', 'S']
// console.log(Array.isArray("SonuS"));

let name = ['sonu']

// console.log(Array.isArray(name)); // o/p: true because name is an array

console.log(Array.from({name: "Sonu"})) // interesting o/p: [] because it can't do this operation

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));












