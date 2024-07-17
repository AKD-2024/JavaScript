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
    console.log("Inner: ", a); // Inner: 90
}

console.log("Outer: ", a); // Outer: 300

