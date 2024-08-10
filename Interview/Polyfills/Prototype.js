function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.fullName = function () {
  console.log(`${this.firstName + this.lastName}`);
};

var a = new Person("Ram", "Kumar");
a.fullName();
