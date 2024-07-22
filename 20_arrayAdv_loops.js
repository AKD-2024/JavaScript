// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

const newNums = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums); // [5, 6, 7, 8]

// map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((num) => num * 10);

console.log(newNumbers); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// reduce
const sequence = [1, 2, 3];

const myTotal = sequence.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and curval: ${currval}`);
    return acc+currval;
}, 0);
/*
acc: 0 and curval: 1
acc: 1 and curval: 2
acc: 3 and curval: 3
*/
console.log(myTotal); //6

// Real world example 
const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile App Dev course",
        price: 5999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc+item.price;
}, 0); // here 0 is the initial value of accumulator - acc

console.log(totalPrice); //9997

// chaining - allows us to use multiple maps, or maps and filter together, result of first is passed to next and so on ...

const nums = [1, 2, 3, 4, 5];
const numbers = nums.map((num) => num * 10).map((num) => num + 1).filter( (num) => num>30);

// [1, 2, 3, 4, 5] is passed to first map and [10, 20, 30, 40, 50] is passed from first map to second map [11, 21, 31, 41, 51] is passed from second map to filter and now filter will give result as [31, 41, 51];
console.log(numbers); // [31, 41, 51]
