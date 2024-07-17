if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}
// let and const -- block scope & hoisting isn't allowed
// var -- function scope & hoisting is allowed
 
// console.log(a); // error
// console.log(b); //error
// console.log(c); //30 as var has function scope

let a = 300;
if(true) {
    let a = 90;
    // console.log("Inner: ", a); // Inner: 90
}

// console.log("Outer: ", a); // Outer: 300

function outer() {
    const username = "Anjali";
    function inner() {
        const website = "anjali.vercel.app";
        console.log(username); // Anjali-- inner function can access outer scope -- closure
    }
    // console.log(website); // error - outer function can't accesss inner function variables
    inner();
}

outer();

if(true) {
    const username = "anjali";
    if(username === "anjali") {
        const website = ".dubey@compro.com";
        console.log(username + website); // anjali.dubey@compro.com
    }
    // console.log(website); // error
}
// console.log(username); // error

// --------------------- Interesting ---------------------

//normal function -- Hoisting allowed
console.log(sum(4,5)); //9
function sum(num1, num2) {
    return num1+num2;
}

//function expression -- Hoisting not allowed
console.log(sum1(5,6)); // error
const sum1 = function(num1, num2) {
    return num1+num2;
}

//Arrow function -- Hoisting not allowed
console.log(sum2(15, 6)); //error
const sum2 = (num1, num2) => {
  return num1 + num2;
};
