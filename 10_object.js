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
console.log(user.greeting()); /* Hello user, Anjali ! 
 1 */

// ---------------- object : part-2 ------------------

// const candyCrushUser = new Object(); // {} -- singleton object
const candyCrushUser = {}; // {} -- Not a singleton object
candyCrushUser.id = "cc01";
candyCrushUser.name = "Anjali";
candyCrushUser.isLoggedIn = false;
console.log(candyCrushUser); // { id: 'cc01', name: 'Anjali', isLoggedIn: false }

const regularUser = {
  email: "anjalidubey@compro.com",
  fullname: {
    userfullname: {
      firstname: "anjali",
      lastname: "dubey"
    }
  }
}
console.log(regularUser.fullname.userfullname.firstname); //anjali

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2, obj3}; // wrong way to combine as it will create object of objects 
// console.log(obj4); 
/*
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
} */

// Object.assign(source, target); -- correct way to combine multiple objects
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Popular way to combine multiple objects using spread operator
const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
  {
    id: 1,
    email: "anjali@gmail.com"
  },
  {
    id: 2,
    email: "amit@gmail.com"
  }
];

console.log(users[0].email); // anjali@gmail.com 

// ---------- important thing -----------
console.log(candyCrushUser); // { id: 'cc01', name: 'Anjali', isLoggedIn: false }
console.log(Object.keys(candyCrushUser)); // returns array of object's keys -- [ 'id', 'name', 'isLoggedIn' ] 
console.log(Object.values(candyCrushUser)); // returns array of object's values -- [ 'cc01', 'Anjali', false ]

console.log(candyCrushUser.hasOwnProperty('isLoggedIn')); // true
console.log(candyCrushUser.hasOwnProperty('phone')); // false
