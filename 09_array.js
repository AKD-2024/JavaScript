const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[4]); // 4

const arr = new Array(1, 2, 3, 4); //Explicitly declares array
// console.log(arr); // [1,2,3,4]

// const a = [1,2,3];
// const b = [1,2,3];
// const c = "1,2,3";
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

//slice
console.log("Before: ", myArr); // [0, 1, 2, 3, 4, 5, 6]
const myNewArr = myArr.slice(1,3); //slice(start,end) end is excluded
console.log(myNewArr); // [1, 2]
console.log("After: ", myArr); // [0, 1, 2, 3, 4, 5, 6] // Original Array remains unchanged

//splice
console.log("Before: ", myArr); // [0, 1, 2, 3, 4, 5, 6]
const myNewArr1 = myArr.splice(1,3); //splice(start,deleteCount) 
console.log(myNewArr1); // [1, 2, 3]
console.log("After: ", myArr); //  [0, 4, 5, 6] // Original Array gets changed

const animals = ["dog", "cat", "tiger"];
const birds = ["parrot", "sparrow", "peacock"];
// animals.push(birds); // will push the birds array as 4th element in animals array
// console.log(animals); // [ 'dog', 'cat', 'tiger', [ 'parrot', 'sparrow', 'peacock' ] ]
// console.log(animals[3][2]) // to access peacock -- peacock

const newArray = animals.concat(birds); // concat - combines two or more arrays, returns new array without modifying existing array
console.log(newArray); // [ 'dog', 'cat', 'tiger', 'parrot', 'sparrow', 'peacock' ]

// Common way to merge two ore more arrays is to use a spread operator (...)
const allSpecies = [...animals, ...birds];
console.log(allSpecies); // [ 'dog', 'cat', 'tiger', 'parrot', 'sparrow', 'peacock' ]

// When there are nested arrays then to make a single array we use flat 
const nestedArr = [1, 2, [3, 4], 5, 6, [7, [8, 9]]]; // level of nesting - 2
const flatArr = nestedArr.flat(2) //flat(level) if not sure just write infinity in level, it will take care
console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("anjali")); // checks if the argument passed is array or not -- false
console.log(Array.from("anjali")) // "from" creates array from an iterable object -- [ 'a', 'n', 'j', 'a', 'l', 'i' ]
console.log(Array.from({name: "anjali"})); //interesting -- returns empty array -- []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // "of" returns a new array from a set of elements -- [ 100, 200, 300 ]