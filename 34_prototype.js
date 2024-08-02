let myName = "Anjali     ";
let myProfession = "swe     ";
// console.log(myName.trim().length);

// console.log(myName.trueLength); -- intitially undefined

String.prototype.trueLength = function () {
    return this.trim().length;
};

// let len = myName.trueLength();
// console.log(len); // -- 6

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.anjali = function () {
  console.log(`anjali is present in all objects`);
};

Array.prototype.heyAnjali = function () {
  console.log(`anjali says hello`);
};

// heroPower.anjali() // anjali is present in all objects
// myHeros.anjali() // anjali is present in all objects
// myHeros.heyAnjali() // anjali says hello
// heroPower.heyAnjali() // Since heyAnjali prototype is added in Array, heroPower object doesn't have access to it so gives error

// inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // Teaching Support will have access to properties of Teacher

let anotherUsername = "Anjali    ";

String.prototype.trueLength = function () {
  console.log(`${this}`); // this matlab jiss - jisne call kara
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"kumari".trueLength();
"dubey".trueLength();

// Output
// Anjali    
// True length is: 6
// kumari
// True length is: 6
// dubey
// True length is: 5