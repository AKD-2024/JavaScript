// 1. for - in loop
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}