// resolve is after completion
// reject is when promise is broken

const promiseTypeOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptrography, or network calls
    setTimeout(function(){
        console.log("Async Task Completed");
        // if it is completed then pass on resolve to execute further
        resolve()
    }, 1000)
}) 

// after resolve get activate then it is stored in then variable
promiseTypeOne.then(function(){
    console.log("Promise Completed");
    
})

// or second way

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed");
        // add resolve method
        resolve()
    }, 1000)
}).then(function(){
    console.log("Task Completed");
})

// promise three

const promiseTypeThree = new Promise(function(resolve, reject) {
    // we can data in the resolve for the further execution
    setTimeout(function(){
        resolve({username: "Sonu", useremail: "sonu.sapri2004@gmail.com"})
    }, 1000)
})
                            // pass it here to access it
promiseTypeThree.then(function(user) {
    console.log(user);
    
})

// promise four error ditection

const promiseTypeFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // set an error variable if error we get from api calls
        let error = false; // false means executes resolve part and true means executes reject part
        // if no error same resolve execution
        if (!error) {
            resolve({username: "Sonu2", useremail: "sonu.s123@gmail.com"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

// this is called chaining
promiseTypeFour.then((user) => {
    console.log(user);
    return user.username;  // i have returned user.username that is Sonu2
    // passes on to the next function watch
}).then((user) => {
    console.log(user); // here in parameter i have got it user.username
    // then for handling the error use catch
}).catch((error) => { // passed in the reject value which is this 'ERROR: something went wrong'
    console.log(error);
    // next is the finally this is a default keyword which executes anyways
}).finally(() => console.log("The promise either resolved or rejected"))


// promise five

const promiseTypeFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Sonu", useremail: "sonu.sapri@gmail.com"})
        } else {
            reject("ERROR something went wrong")
        }
    }, 1000)
})

// using async and await function
async function ConsumePromiseFive() {
    // add async in try catch block like in the then catch and finally
    try {
        const response = await promiseTypeFive;
        console.log("promiseFiveres:", response);
    }catch (error) {
        console.log(error);   
    }finally {
        console.log("this will confirm execute it.");
        
    }
}

// now the function to execute
ConsumePromiseFive();

// now with real data
async function displayALLUSERS() {
    try {
        // fetch return the promise so directly use a fetch library 
    // because this takes time so add to await
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response); // but it is in string format change it to JSON format
    const data = await response.json(); // it is not coverting because convertion also takes time so make it also await
    console.log("Async and await response", data); // now this in json format
    } catch (error) {
        console.log("ER: ", error);
        
    } finally {
        console.log("This is default statement");
        
    }
    
    

} // wrap this into try catch function


displayALLUSERS();


// now fetching same api call with .then .catch .finally

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    // console.log(response); // print string format so commented
    return response.json(); 
})
.then(function(data) {
    console.log(".then .catch response", data);
    
})
.catch(function(error) {
    console.log(error);
})