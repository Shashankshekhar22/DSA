//**********Call Apply and Bind***************** */

// call

let name = {
  firstName: "Shashank",
  lastName: "Shekhar",
};

let fullName = function (city, state) {
  this.firstName + " " + this.lastName + " " + city + " " + state;
};

fullName.call(name, "patna", "bihar"); // Shashank SHekhar Patna Bihar

let name2 = {
  firstName: "x",
  lastName: "y",
};

fullName.call(name2, "Panaji", "Goa"); //x y Panji Goa

// apply
let name3 = {
  firstName: "Shashank",
  lastName: "Shekhar",
};

let fullName1 = function (city, state) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
};

fullName1.apply(name3, ["patna", "bihar"]); // Shashank Shekhar patna bihar

// The major difference between call and apply is that call takes coma separated value where as apply takes an Array
// *********************Bind*********************/

let printFullName = fullName1.bind(name, "Chennai", "TN");
console.log(printFullName); // ƒ (city, state) {
//     console.log(this.firstName + " " + this.lastName+ " " + city + " " + state);
//   }
printFullName(); // Shashank Shekhar Chennai TN

// In bind a reference/copy is created so that it can be called later when it is required. Bind gives us a copy

//****************Function currying **********************/
//In Function currying we fix value for one of the parameter. It can be achieved by using bind and closure

let multiply = function (x, y) {
  console.log(x * y);
};
// Using bind

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(5); //10 here 2 is fixed as first argument.

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(5); //10 here 15 is fixed as first argument.

//Using closure

let multiplyByClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mulBy3 = multiplyByClosure(3);
mulBy3(3); //9

//************sum(1)(2)(3)(4)() */
let sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
//in ES6

let sum1 = (a) => (b) => b ? sum(a + b) : a; //sum1(2)(3)(1)(25)(19)() //50

//sum(2)(3)(1)(5)(19)() ===>  30

//***************Event Delegation************ */

// It is a concept which is used in event bubbling. is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

{
  /* <div>
  <span>
    <button>Click Me!</button>
  </span>
</div>; */
}
const div = document.getElementsByTagName("div")[0];

div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("button was clicked");
  }
});
// *******************Debouncing******************
let counter = 0;
const getData = () => {
  //calls API
  console.log("Fetching data::::", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunc = debounce(getData, 300);

// **********Debouncing VS Throttling*********************/
// Debouncing delays the execution of your code until the user stops performing a certain action for a specified amount of time.
// Throttling limits the execution of your code to once in every specified time interval

// Pure function and Impure Function

// Pure function always returns the same output for the same input

function pureFunction(x, y) {
  return x + y;
}

// Impure function always return different output for the same Input

function impureFunction(x) {
  return Math.random(x);
}

/*******Ways To create Object********/
var obj = new Object();
var obj = {};
var obj = Object.create({});
function Employee(fName, lName, age, salary) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.salary = salary;
}

// Creating multiple object which have similar property but diff value assigned to object property.
var employee1 = new Employee("John", "Moto", 24, "5000$");
var employee2 = new Employee("Ryan", "Jor", 26, "3000$");
var employee3 = new Employee("Andre", "Salt", 26, "4000$");

/*********Object.freeze vs const***********/
// const is used to create immutable bindings for variables,
// while Object.freeze() is used to create immutable objects.
const obj = { key: "value" };
obj.key = "new value"; // Allowed

const obj = { key: "value" };
Object.freeze(obj);
obj.key = "new value"; // Error in strict mode
