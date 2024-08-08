class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  } // Static functions are inaccessible to objects
}

console.log(User.createId()); // To access the static function use className.staticFunctionName()

const akd = new User("akd");
// console.log(akd.createId()) // Error: Through object it is not accessible

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const amit = new Teacher("amit", "amit.com");
amit.logMe(); // Username: amit
// console.log(amit.createId()); // Error: Through object it is not accessible
