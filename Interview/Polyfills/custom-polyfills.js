let name = {
  firstname: "Shashank",
  lastname: "Shekhar",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " , " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};
//**********************CUSTOM BIND *****************/
Function.prototype.mybind = function (...args) {
  let obj = this, // obj will refer to printName method
    params = args.slice(1); // params will refer to the parameter passed with mybind call
  // params will refer to the 1st parameter which is passed with mybind here it is [Patna, Bihar]"
  return function (...args2) {
    // args2 will refer to parameter passed with printMyName Here it is India
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Patna", "Bihar");
printMyName2("India");

// *****************Custom Map********************//
Object.prototype.myMap = function (cb) {
  // cb here is the callback method/operation which is required to be done. Here it is val*2
  let obj = this; // this is the Object. Here it is [2,4,6,8]
  let newArray = [];
  for (let i = 0; i < obj.length; i++) {
    newArray.push(cb(obj[i], i));
  }
  return newArray;
};

let a = [2, 4, 6, 8];
b = a.myMap((val) => val * 2);
console.log(b); // [4,8,12,16]

//********Custom Filter ***********/

Object.prototype.myFilter = function (cb) {
  let obj = this;
  let newArray = [];
  for (let i = 0; i < obj.length; i++) {
    if (cb(obj[i])) {
      newArray.push(obj[i]);
    }
  }
  return newArray;
};
