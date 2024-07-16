//Comparisons convert string to a number
// console.log("2" > 1) //true "2"->2
// console.log("02" > 1) //true "02"->2
// console.log("02" == 1) //false "02"->2

//Comparisons convert null to a number, treating it as 0. That's why null>0 is false and null>=0 is true;
// console.log(null > 0); // false
// console.log(null >= 0); // true
// Equality check
// console.log(null == 0); // false - null:undefined - NaN
//The reason null == 0 is false as equality check == and comparisons > < >= <= work differently

//Comparisons convert undefined to a number, treating it as NaN
// console.log(undefined>0); //false
// console.log(undefined>=0); //false
// console.log(undefined==0); //false

// Loose Equality
console.log("2"==2) //true -- value is checked
// Strict Equality
console.log("2"===2) //false -- type and value both are checked
