"use strict"

const name = "anjali";
const repoCount = 40;

// console.log(name + repoCount + " Value"); Not prefered to be used
// console.log(`My name is ${name} and my repocount on github is ${repoCount}`); Use the way of string interpolation

const gameName = new String('anjali-akd'); // another way of declaring string, do it in console so that you can check for the funcions and properties associated with it.
console.log(gameName[0]); //a
console.log(gameName.length); //10
console.log(gameName.toUpperCase()); //ANJALI-AKD
console.log(gameName.charAt(2)); //j -- returns the char at that index
console.log(gameName.indexOf('j')); //2 -- returns the index of that char

const newString = gameName.substring(0,4) //syntax: substring(startindex, endindex) -- endindex is excluded --- [0,4)
console.log(newString); //anja

const anotherString = gameName.slice(-8,4); //negative reprensts starting from the end and uses one based indexing and positive means starting from front with 0-based indexing -- end index is not included
console.log(anotherString); //ja --starts from end 

const anotherString2 = gameName.slice(-8,-2);
console.log(anotherString2); //jali-akd


const newStringOne = "   Anjali     ";
console.log(newStringOne);
console.log(newStringOne.trim()) //Remove spaces from the starting and end of the string

// const url = "https://anjali.com/anjali dubey" so browser changes space to %20 so the url becomes const url = "https://anjali.com/anjali%20dubey"

const url = "https://anjali.com/anjali%20dubey";
const newUrl = url.replace('%20', '-');
console.log(newUrl); //"https://anjali.com/anjali-dubey"

console.log(url.includes('anjali')); //true
console.log(url.includes('amit')); //false

const str = "anjali-kumari- dubey";
console.log(str.split('-'));
console.log(str.split(' '));

