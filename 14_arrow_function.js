const user = {
    username: "Anjali",
    age: 22,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage(); // Anjali, welcome to website
/*
{
  username: 'Anjali',
  age: 22,
  welcomeMessage: [Function: welcomeMessage]
}
*/ 
user.username="amit";
user.welcomeMessage(); // amit, welcome to website
/* 
{
  username: 'amit',
  age: 22,
  welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this); // {} : node -- [important: browser: global-object: window]

// function something() {
//     let user = "anjali";
//     console.log(this.user); //undefined
// }
// something(); -- Normal Function

// const something = function() {
//     let user = "anjali";
//     console.log(this.user); //undefined
// }
// something(); -- Function Expression

// const something = () => {
//     let user = "anjali";
//     console.log(this); //undefined
// }
// something(); -- arrow function

// --------- Arrow function --------- () => {return....} or () => ()

const sum2 = (num1, num2) => {
    return num1+num2;
}
console.log(sum2(4,3)); // 7

// implicit return - arrow function
const sum3 = (n1, n2, n3) => n1+n2+n3;
console.log(sum3(1,2,3)); // 6
// or 
const sum4 = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4);
console.log(sum4(1,2,3,5)); // 11