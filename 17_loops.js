// for : entry controlled loop -- condition checked at entry
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) console.log("5 is the mean.");
  console.log(element);
}
/* 
0
1
2
3
4
5 is the mean.
5
6
7
8
9
10
*/

// Nested Loops
for (let i = 2; i < 4; i++) {
  console.log(`Table: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
/*
Table: 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
Table: 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
 */

// Array iteration
const teamIndiaScore = [250, 444, 300, 222, 178];
for (let i = 1; i <= teamIndiaScore.length; i++) {
  console.log(`Team India score for match ${i}: ${teamIndiaScore[i - 1]}`);
}
/*
Team India score for match 1: 250
Team India score for match 2: 444
Team India score for match 3: 300
Team India score for match 4: 222
Team India score for match 5: 178
*/ 

// break and continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    break; // come out of the loop
  }
  console.log(i);
}
/*
0
1
2
3
4
5 detected
*/

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue; // come out of particular iteration
  }
  console.log(i);
}
/*
0
1
2
3
4
5 detected
6
7
8
9
10
*/

// while : entry controlled loop -- condition checked at entry
let i = 0;
while (i < 5) {
  console.log("value of i: " + i);
  i++;
}
/*
value of i: 0
value of i: 1
value of i: 2
value of i: 3
value of i: 4
*/ 

let arr = ["anjali", "amit", "alice", "ritik"];
let index = 0;
while (index < arr.length) {
  console.log(arr[index]);
  index++;
}

/*
anjali
amit
alice
ritik
*/ 

// do while : exit controlled loop -- condition checked at exit
let score = 1;
do {
  console.log(score);
  score++;
} while (score <= 5);
/*
1
2
3
4
5
*/

// do while will run once even if condition is false
let scoreVal = 1;
do {
  console.log(scoreVal);
} while(scoreVal > 5);
// 1
