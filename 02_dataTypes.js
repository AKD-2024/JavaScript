// alert(3+3); We are using nodejs, not browser so it won't run
console.log(3+3); //We can use this to display something on screen

//JS has typed values not typed variables

//Primitive types:
let name = "Anjali"; //1.string
let age = 18; //2.number
let isLoggedIn = false; //3.boolean
let temperature = null; //4.null - represents intentional absence of value
let something; //5.undefined - when we declare something but not assign it a value
let obj = {
    name:"Anjali",
    age: 22
};  //6.object - key value pairs --most important type in JS and arrays & functions are specialized version of object
//7.bigint - for very large numbers, and 8.symbol - for unique -- Introduced in ES6

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof temperature); //object -- exception
console.log(typeof something); //undefined
console.log(typeof obj); //object

//Exception: WEIRD BUG - typeof null, returns object
