const accountId = 123456; // Used for constant values
let accountEmail = "anjali@gmail.com"; // Used for changing values
var accountPassword = "123455"; // Were used to declare variables before let & const were there
accountCity = "Jaipur"; // We can also declare variables without let, const or var but this isn't a good practice, avoid it
let accountState; 

// accountId = 124356; - Error as we can't change the constant
accountEmail = "dubeyanjali@Gmail.com";
accountPassword = "anjali90"
accountCity = "Delhi";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// Output - 
// │    0    │         123456          │
// │    1    │ 'dubeyanjali@Gmail.com' │
// │    2    │       'anjali90'        │
// │    3    │         'Delhi'         │
// │    4    │        undefined        |

//var has function scope - It will display name
// function display() {
//     {
//         var name= "anjali";
//     }
//     console.log(name);
// }

// display();

//let has block scope - It won't display name and throw error
// function display1() {
//     {
//         let name= "anjali";
//     }
//     console.log(name);
// }

// display1();