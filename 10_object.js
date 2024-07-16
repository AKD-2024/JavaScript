// Object creation -- 1. using constructor -- Object.create -- always creates singleton object

// Object creation -- 2. using object literal -- not creates singleton object

//Symbol Declaration - 
const mySym = Symbol("key1");

const user = { 
    name: "Anjali", 
    "full name": "Anjali Dubey",
    age: 22, 
    [mySym]: "mykey1", // Symbol within object declaration
    location: "Delhi",
    email: "anjali@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
};

//access
console.log(user.name); //Anjali
// console.log(user."full name") // error
console.log(user["name"]); //Anjali
console.log(user["full name"]);  //Anjali Dubey
console.log(user[mySym]); //mykey1 -- to access symbol thats the way

user.email = "anjali@compro.com";
console.log(user); /* {
  name: 'Anjali',
  'full name': 'Anjali Dubey',
  age: 22,
  location: 'Delhi',
  email: 'anjali@compro.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Sunday' ],
  [Symbol(key1)]: 'mykey1'
} */
// Object.freeze(user); // to freeze the object
// user.email = "anjali@microsoft.com"; // these changes won't be implemented since we have freezed the object
console.log(user); /* {
  name: 'Anjali',
  'full name': 'Anjali Dubey',
  age: 22,
  location: 'Delhi',
  email: 'anjali@compro.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Sunday' ],
  [Symbol(key1)]: 'mykey1'
} */

user.gender = 'female';
user.greeting = function() {
    console.log(`Hello user, ${this.name} !`);
    return 1;
}

console.log(user.gender); // female
console.log(user.greeting()); /* Hello user, anjali! 
 1 */





