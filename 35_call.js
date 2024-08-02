function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // call passes the current execution context to another function and we are passing "this" here because we want the other function properties to be retained otherwise it will just go away as after its execution it execution context gets deleted.
  this.email = email;
  this.password = password;
}

const user = new createUser("akd", "akd@fb.com", "123");
console.log(user);
