// ["", "", ""] -- array of strings
// [{}, {}, {}] -- array of objects

// 1. for of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}
// 1 2 3 4 5

const greetings = "Hello!";
for (const greet of greetings) {
  console.log(`Each char of greeetings: ${greet}`);
}
/*
Each char of greeetings: H
Each char of greeetings: e
Each char of greeetings: l
Each char of greeetings: l
Each char of greeetings: o
Each char of greeetings: !
*/

// Maps
const map = new Map();
map.set('IN', "India");
map.set('FR',"France");
map.set('USA', "United States of America");
console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'FR' => 'France',
  'USA' => 'United States of America'
}
*/ 

for(const [key, value] of map) {
    console.log(key, ':-', value);
}

// IN :- India
// FR :- France
// USA :- United States of America

// 2. forEach
const languages = ["cpp", "python", "swift", "ruby", "javascript"];

languages.forEach((item) => {
  console.log(item);
});
/*
cpp
python
swift
ruby
javascript
*/

languages.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
/*
cpp 0 [ 'cpp', 'python', 'swift', 'ruby', 'javascript' ]
python 1 [ 'cpp', 'python', 'swift', 'ruby', 'javascript' ]
swift 2 [ 'cpp', 'python', 'swift', 'ruby', 'javascript' ]
ruby 3 [ 'cpp', 'python', 'swift', 'ruby', 'javascript' ]
javascript 4 [ 'cpp', 'python', 'swift', 'ruby', 'javascript' ]
*/ 

const codingLang = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

codingLang.forEach((item) => {
  console.log(item.languageFileName);
});

/*
js
java
py
*/ 
