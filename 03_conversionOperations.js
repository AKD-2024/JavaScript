//--------------------- Conversion Summary -----------------------------
// Boolean() conversion
// number - 0 => false and 1 or any no except 0 => true,
// string "" => false and "anjai" or any other string => true
// null => false
// undefined => false 
// Falsy values - 0, "", null, undefined, truthy values - all othere values except falsy ones

// Number() conversion
// string "33" => 33 and "33abc" => NaN
// boolean true => 1, false => 0
// null => 0
// undefined => NaN

// String() Conversion
// number - 33 -> "33"
// boolean - true->"true" false->"false"
// null -> "null"
// undefined -> "undefined"

// ------------------------ Operations --------------------------------

//1. Addition, Subtraction, Multiplication, Division, Modulus

//2. String Concatenation
// let str1 = "Hello";
// let str2 = " Anjali";
// let str3 = str1 + str2;
// console.log(str3);
// Output - Hello Anjali

//3. Tricky Conversion
// console.log("1" + 2); // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") //32

//4. Post Increment and Pre increment
// let num = 10;
// console.log(num++); 10 //Post increment - first use and then increase
// console.log(++num); 12 //Pre increment - first increase then use

// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`); // output: "x:4, y:3"

// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`); // output: "a:4, b:4"

//-------------------------- Example - Number() Converison -----------------------------------------------
// let score = "33";
// console.log(typeof score);
// let valueInNumber = Number(score); //convert score into number type
// console.log(valueInNumber)
// console.log(typeof valueInNumber);
// Output :
// string
// 33
// number

// let score = "33abc";
// console.log(typeof score);
// let valueInNumber = Number(score); //convert score into number type
// console.log(valueInNumber);
// console.log(typeof valueInNumber);
// Output
// string
// NaN
// number

// let score = true;
// console.log(typeof score);
// let valueInNumber = Number(score); //convert score into number type
// console.log(valueInNumber);
// console.log(typeof valueInNumber);
// Output
// boolean
// 1
// number

// console.log(typeof NaN); -- Type of NaN is number

// let score = null;
// console.log(typeof score);
// let valueInNumber = Number(score); //convert score into number type
// console.log(valueInNumber);
// console.log(typeof valueInNumber);
// Output
// object
// 0
// number

// let score = undefined;
// console.log(typeof score);
// let valueInNumber = Number(score); //convert score into number type
// console.log(valueInNumber);
// console.log(typeof valueInNumber);
// Output
// undefined
// NaN
// number
