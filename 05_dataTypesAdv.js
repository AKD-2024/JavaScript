//--------- Primitive 7 types ----------
// 1. string typeof: string
// 2. number typeof: number
// 3. boolean typeof: boolean
// 4. null typeof: object
// 5. undefined typeof: undefined
// 6. symbol typeof: symbol
// 7. bigint typeof:bigint

//--------- Symbol ---------
// let id = Symbol('123'); //Symbol return a unique symbol value
// let anotherId = Symbol('123');
// console.log(id == anotherId); //false
// console.log(typeof id); //symbol

// -------- bigint ----------
// let bigNumber = 1234567897889092380n;
// console.log(typeof bigNumber) //bigint

// ---------- Reference (Non primitive) --------------
// 1. array typeof: object
// 2. object  typeof: object
// 3. function typeof: function -- function object

// ---------- array -------------
// let person = ["Anjali", 22, "Software Engineer"];
// console.log(person); output: ["Anjali", 22, "Software Engineer"]
// console.log(typeof person); output: object 

// ----------- object -------------
// let intro = {
//     name: "Anjali",
//     age: 22,
//     profession: "Software Engineer"
// };
// console.log(intro); output: {name: 'Anjali', age:22, profession: 'Software Engineer'}
// console.log(typeof intro); output: object

// ----------- function ----------
// let sum = function(num1, num2) {
//     return (num1+num2); 
// }
// console.log(sum(5,10)); output: 15
// console.log(typeof sum); output: function
// console.log(typeof sum()); output: number

// ----------------- Memory --------------------
// 1. Stack - Primitive Types - Copy is passed
// 2. Heap - Non primitive types - reference is passed

// --- Stack ---
// let userOne = "Anjali";
// let userTwo = userOne;
// console.log(userTwo); //Anjali
// userTwo = "Amit";
// console.log(userOne); // Anjali
// console.log(userTwo); // Amit

// --- Heap ---
// let u1 = {
//     name: "Anjali",
//     age: 22
// }
// let u2 = u1;
// u2.age = 21;
// console.log(u1); // {name: Anjali, age: 21}
// console.log(u2); // {name: Anjali, age: 21}
