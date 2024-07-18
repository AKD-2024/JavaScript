// if and else
let score = 90;

if (score > 50) {
  console.log("pass");
} else {
  console.log("fail");
} //pass

// if, else if and else

if (score > 80 && score <= 100) {
  console.log("Grade: A");
} else if (score > 50 && score <= 80) {
  console.log("Grade: B");
} else if (score > 33 && score <= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade D");
} // Grade: A

// switch
const week = 4; // Thursday
switch (week) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Not a day");
    break;
}

// falsy values
// "", 0, -0, bigint 0n, NaN, false, null, undefined

// Truthy values
// All other values except falsy are truthy

// Empty array check
const username = [];
if (username.length == 0) {
  console.log("array is empty");
}

// Empty object check
const obj = {};
if(Object.keys(obj).length == 0) {
    console.log("empty object");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10; 
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10 -- it takes first not null value

val1 = undefined ?? 15;
console.log(val1); // 15

// Ternary Operator -- (condition) ? true : false

let coursePrice = 900;
coursePrice>1000 ? console.log("Expensive") : console.log("cheap");