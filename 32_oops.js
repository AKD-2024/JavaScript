// Object Literal
const user = {
  username: "Anjali",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username); // Anjali
console.log(user.getUserDetails()); 
// OUTPUT: 
// Got user details from database
// Username: Anjali
// {
//   username: 'Anjali',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
// undefined -- because the function isn't returning anything
console.log(this); // {} in case of node and in case of browser it refers to window object

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne =  new User("Anjali", 12, true);
const userTwo = new User("Amit", 11, false);
console.log(userOne.constructor); // [Function: User]
console.log(userTwo);
// User {
//   username: 'Amit',
//   loginCount: 11,
//   isLoggedIn: false,
//   greeting: [Function (anonymous)]
// }

console.log(userOne instanceof User); // true -- if we don't use new keyword it will print false!
