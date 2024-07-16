const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[4]); // 4

const arr = new Array(1, 2, 3, 4); //Explicitly declares array
// console.log(arr); // [1,2,3,4]

const a = [1,2,3];
const b = [1,2,3];
const c = "1,2,3";
// console.log(a==c); true -- array is coerced to string with each element separated with comma
// console.log(b==c); true 
// console.log(a==b); false -- Different objects in memory, so comparison is false 
// console.log(JSON.stringify(a) == JSON.stringify(b));  true -- to compare the contents in both the array

// ------------------------------ Methods ------------------------------------
myArr.push(6); //pushes element at the end of the array
myArr.push(7);
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop() //removes element from the end of the array
// console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); //Adds element at the begining of array -- should avoid
// console.log(myArr); //[ 9, 0, 1, 2, 3, 4, 5, 6 ]

myArr.shift() //Removes element from the begining of the array
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]

// console.log(myArr.includes(9)); //false
// console.log(myArr.includes(5)) //true
// console.log(myArr.indexOf(9)) //-1
// console.log(myArr.indexOf(3)); //3

const newArr = myArr.join(); //arr to string if separator not mentioned then default is ','
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
console.log(newArr); // 0,1,2,3,4,5,6
const newArr2 = myArr.join('-'); 
console.log(newArr2); // 0-1-2-3-4-5-6

//Do write about slice and splice