function sum(number1, number2) {
    if((typeof number1) === "number" && (typeof number2) === "number") {
        console.log(number1+number2);
    } else {
        console.log("Not valid summation")
    }
}

sum(5,7); //12
sum(3,"8"); //Not valid summation
const res = sum(6,6); //sum(6,6) - 12
console.log(res) //undefined --- as the sum function isn't returning anything
// ---------------------------------------------------------

function summation(number1, number2) {
    if((typeof number1) === "number" && (typeof number2) === "number") {
        let result = number1 + number2;
        return result;
    } else {
        console.log("Not valid summation")
    }
}

const result = summation(9,7); 
console.log(result); // 16
sum(3,"8"); //Not valid summation
// ---------------------------------------------------------

function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!`;
}

const output = loginUserMessage("Anjali");
console.log(output); // Anjali just logged in!

const output2= loginUserMessage();
console.log(output2); //Please enter a name --undefined
// ---------------------------------------------------------

function loginUser(username="anji") {
    return `${username} just logged in!`;
}

const outcome = loginUser("Anjali");
console.log(outcome); // Anjali just logged in!

const outcome2 = loginUser();
console.log(outcome2) // Anji just logged in!
// ---------------------------------------------------------

// ------------------------ Rest operator -------------------
function calculateCarPrice(...num1) {
    return num1;
}
console.log(calculateCarPrice(200, 400, 500, 2000)); // [ 200, 400, 500, 2000 ]

function calculateCarPrice2(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCarPrice2(200, 400, 500, 2000)); // [500, 2000 ]

// ----------------------------------------------------------
const product = {
    productname: "earpods",
    price: 990
}

function handleObject(anyobject) {
    console.log(`Product Name is ${anyobject.productname} and price is ${anyobject.price}`);
}

handleObject(product); // Product Name is earpods and price is 990
handleObject({productname: "specs", price:800}); // Product Name is specs and price is 800

// ----------------------------------------------------------
const myNewArray = [100, 200, 900, 600];

function returnSecondValue(arr) {
    return arr[1];
}

console.log(returnSecondValue(myNewArray)); //200
console.log(returnSecondValue([900, 45, 678])); //45