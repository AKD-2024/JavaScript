// IIFE - Immediately Invoked Function Expressions

// Named IIFE
(function db() {
    console.log('DB connected');
})(); // Output DB connected -- always end iife with ";"

((num) => {
    console.log(`DB ${num}, Connected!`);
})(2); //Output: DB 2, Connected

