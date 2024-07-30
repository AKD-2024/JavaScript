// Hoisting - Order of Precedence

var bool = true;
function bool(){
    console.log("Variable Assignment takes precedence over function declaration");
}
console.log(typeof bool); //Output: boolean

var example;
function example(){
    console.log("Function declaration take precedence over variable declaration");
}
console.log(typeof example); // Output: function

// Higher Order Function 

// multiply is an HOF as it returns a function
function multiply(a) {
  return function innerFunction(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);

console.log(multiplyBy2(7)); // 14
console.log(multiplyBy3(5)); // 15

// Asynchronous Programming

function delayedGreeting(name) {
  setTimeout(function() {
    console.log(`Hello, ${name}!`);
  }, 1000);
}

delayedGreeting("Anjali"); // After 1 second, it logs: "Hello, Anjali!"
delayedGreeting("John"); // After 1 second, it logs: "Hello, John!"


