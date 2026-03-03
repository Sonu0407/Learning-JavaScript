// About Objects
const myObjects = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'    
}

// to iterate over object we should use forin loop
// this is forin loop syntax
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }
for (const key in myObjects) {
    //console.log(`${key} shortcut for this is ${myObjects[key]}`);
}

// implementing forin loop in arrays
const programming_lang_list = ['cpp', 'java', 'python', 'javascript']

for (const key in programming_lang_list) { // can use in arrays also
    //console.log(programming_lang_list[key]);
}

//can we use forin loop in maps
// for example
const map = new Map() // it is an object
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("IN", "India")

for (const key in map) {
    console.log(key); // won't get the output because forin can't iterate over map 
}
