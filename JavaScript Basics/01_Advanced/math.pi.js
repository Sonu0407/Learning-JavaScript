// we can't change math.pi value why because explore here
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// because it is not writable and enumerable and configurable so we can't change the math.pi value (*Interview Question)


// let's check whether we can change math.pi
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'sonu',
    gender: 'male',
    isAvailable: true
}

// now print using Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// changing writable to false and enumerable to false so that no can change these

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); // here you get only gender and properties because in defineproperty name is enumerable is false so name does'nt show in the output or if it is set to true then you name also in the output.
        
    }
}