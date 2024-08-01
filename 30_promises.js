// 1. Promise creation and consumption method-1
// Promises creation
const promiseOne = new Promise(function(resolve, reject) {
    // Do any async task
    // DB calls, cryptography, network calls
    setTimeout(function() {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

// Promise consumed!
promiseOne.then(function() {
    console.log("Promise is consumed!!");
});

// 2. Promise creation and consumption method-2
new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Async task 2 is complete");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Promise 2 is consumed!!");
});

// 3. Promise creation and consumption method-3
new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Async task 3 is complete");
        resolve({username:'something', email: 'something.com'});
    }, 1000);
}).then((user) => {
    console.log("Promise 3 is consumed!!");
    console.log(user);
});

// 4. Promise creation and consumption method-4
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "Anjali", password: "1234@pass"});
        } else {
            reject("ERROR: Something went wrong.")
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected!");
})

// 5. Promise creation and consumption method-5
const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let error = true;
    if (!error) {
      resolve({ userlanguage: "JavaScript", password: "1234@pass" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

// Fetch usage - async and await
async function getAllUsers() {
    try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    } 
}

getAllUsers();

// Fetch usage - then and catch 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

