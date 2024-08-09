class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}123`;
  }
  set password(value) {
    this._password = value;
  }
}

const akd = new User("akd@gmail.com", "abc");
console.log(akd.password);
console.log(akd.email);
// abc123
// AKD@GMAIL.COM

// -------------- Earlier scene(using defineproperty) ----------------
function myUser(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const me = new myUser("anjali.com", "anjali");
console.log(me.password);
console.log(me.email);
// ANJALI
// ANJALI.COM

// ------------- using Object -------------
const UserObject = {
  _email: "akd.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const user1 = Object.create(UserObject);
console.log(user1.email);
// AKD.COM