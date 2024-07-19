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


