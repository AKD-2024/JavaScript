// IIFE - Immediately Invoked Function Expressions

// Named IIFE
(function db() {
    console.log('DB connected');
})(); // Output DB connected -- always end iife with ";"

((num) => {
    console.log(`DB ${num}, Connected!`);
})(2); //Output: DB 2, Connected

// Hoisting
// Built in behaviour of JS in which the function or variable declaration are moved to the top of their scope so that they can be used before declaration

a = 2;
var a;
console.log(a); // 2

// or

console.log(b); // undefined as only variable declaration is moved to the top of their scope
var b = 2;

// Closure 
// for (var i = 1; i <= 5; i++) {
//   (function(i) {
//     setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// })(i);
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// Lexical Scope
function foo() {
  console.log(a); // 2
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;
bar();