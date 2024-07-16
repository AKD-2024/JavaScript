const score = 400;
// console.log(score); //400

const balance = new Number(100); // explictly declared as number
// console.log(balance); //[Number: 100]

// console.log(balance.toString()); // "100"
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); //100.00

const otherNum = 123.8977;
// console.log(otherNum.toPrecision(4)); //123.9
// console.log(otherNum.toPrecision(3)); //124
// console.log(otherNum.toFixed(3)); //123.898

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 if not mentioned en-IN it will give values in US standard

// -------------------- Maths ------------------------

// Math - JS math object provides several constants and methods to perform mathematical operation

console.log(Math.abs(-4)); //4 : abs - mod function 
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console.log(Math.random()); // provides random values between 0 and 1
console.log((Math.random()*10) + 1); //-- Any values Between 1 to 11 
console.log(Math.floor(Math.random()*10)+1); //Integer values between 1 to 11

//If range is given then in that case -- use min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)) + min); // Integer values between 10 and 20
