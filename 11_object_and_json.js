const course = {
    coursename: "js in english",
    price: 9000,
    courseInstructor: "Hitesh Choudhary"
}

// console.log(course.courseInstructor); //Hitesh Choudhary

// -------------- Destructuring - Better Way -------------------
// const { courseInstructor } = course
// console.log(courseInstructor); // Hitesh Choudhary

// Could rename also
const { courseInstructor: instructor} = course;
console.log(instructor); // Hitesh Choudhary

// JSON - JavaSript Object Notation
// {
//     "name": "Anjali",
//     "age": 22,
//     "email": "dubeyanjali@gmail.com"
// }

// Sometimes this format can also been seen
// [
//     {},
//     {},
//     {}
// ]

// JSON formatter -- https://jsonformatter.org/ can be used to understand the JSON easily
