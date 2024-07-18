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