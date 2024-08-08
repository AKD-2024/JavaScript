// ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const myuser = new User("akd", "akd@gmail.com", "123");
console.log(myuser.encryptPassword());
console.log(myuser.changeUsername());

// Behind the scene
function funcUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

funcUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
funcUser.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user = new funcUser("Anji", "anji@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.changeUsername());
