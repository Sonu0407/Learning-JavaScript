const programming_lang_list = ['cpp', 'java', 'python', 'javascript']

// programming_lang_list.forEach( function (item) {
//     console.log(item);
    
// } )

// using call back function in foreach
programming_lang_list.forEach( (item) => {
    //console.log(item);
    
} )

//to print eveything from the array example item and index and complete array you can do it

programming_lang_list.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


// for each loop in array_objects
// for example
const myCoding = [
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'Java'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    }
]

// now use foreach loop

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )