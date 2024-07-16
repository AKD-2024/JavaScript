// JavaScript "Date" objects represent a single moment in time in a platform independent format
// Data objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC

"use strict"

let myDate = new Date();
console.log(typeof myDate); //object

console.log(myDate); //2024-07-15T10:28:14.320Z
console.log(myDate.toString()); //Mon Jul 15 2024 16:02:43 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 15/7/2024, 4:02:43 pm
console.log(myDate.toDateString()); // Mon Jul 15 2024
console.log(myDate.toISOString()); // 2024-07-15T10:32:43.716Z
console.log(myDate.toJSON()); // 2024-07-15T10:32:43.716Z

// Date creation by self: format: YYYY, Month: 0-based indexing, DD
let myCreatedDate = new Date(2024, 7, 16);
console.log(myCreatedDate.toDateString()); //Fri Aug 16 2024

// Date + time creation by self : format: YYYY, Month:0-based indexing, DD, HH, MM, SS
let myNewCreatedDate = new Date(2025, 0, 26, 4, 4, 55);
console.log(myNewCreatedDate.toLocaleString()); // 26/1/2025, 4:04:55 am

let newDate = new Date();
console.log(newDate); //2024-07-15T11:17:17.331Z
console.log(newDate.getMonth() + 1); //To convert 0-based indexing to 1-based indexing, one is added
console.log(newDate.getDay()); //0:Sunday, 1:Monday, 2:Tuesday ....

// ----------------- Timestamp ---------------------

let myTimeStamp = Date.now();
console.log(myTimeStamp); //return milliseconds for present time - 1721041419797
console.log(myCreatedDate.getTime()); // 1723746600000 return milliseconds till created date
console.log(Math.floor(Date.now()/1000)); //converts milliseconds into seconds and takes the floor value
