class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const myuser = new Teacher("akd", "akd@teacher.com", "123");
myuser.logMe();
myuser.addCourse();

const myusertwo = new User("amit");
myusertwo.logMe();

console.log(myuser instanceof User); // true -- myuser instance of Teacher and Teacher inherits User so myuser is automatically instance of User
