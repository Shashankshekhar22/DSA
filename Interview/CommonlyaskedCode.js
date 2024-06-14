// Balanced Bracket Problem
function isBalancedBracket(string) {
  let stack = [];
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  };
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "(" ||
      string[i] === "{" ||
      string[i] === "[" ||
      string[i] === "<"
    ) {
      stack.push(string[i]);
    } else {
      let poppedData = stack.pop();
      if (string[i] !== bracketMap[poppedData]) {
        return false;
      }
    }
    if (stack.length === 0) {
      return true;
    }
  }
}

console.log(isBalancedBracket("(<>)")); // true
console.log(isBalancedBracket("<)(>")); //false

// Reverse of String
//using in build functions
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // olleh

// without Inbuilt func

function reverseStringWithoutInbuilt(str) {
  let updatedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    updatedString += str[i];
  }
  return updatedString;
}

reverseStringWithoutInbuilt("hello"); // olleh

function reverseWithRecursion(str) {
  if (str === "") return "";
  return reverseWithRecursion(str.substring(1) + str.charAt(0));
}

//find Duplicate string in an array with inbuilt function

let strArray = ["q", "w", "w", "w", "e", "i", "i", "u", "r"];
let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(findDuplicates(strArray)); // ['w', 'w', 'i']
// Using Set

let duplicate = [...new Set(strArray)]; // removes duplicate

//find Duplicate string in an array with  function

function hasDuplicates(arr) {
  var counts = [];
  for (var i = 0; i <= arr.length; i++) {
    if (!counts[arr[i]]) {
      counts[arr[i]] = 1;
    } else {
      console.log(counts);
      return true;
    }
  }
  return false;
}

var arr = [1, 1, 2, 3, 4];

function findDuplicates(arr) {
  const countMap = {};
  const duplicates = [];

  // Count occurrences of each element in the array
  arr.forEach((item) => {
    if (countMap[item]) {
      countMap[item]++;
    } else {
      countMap[item] = 1;
    }
  });

  // Find duplicates and their counts
  for (const key in countMap) {
    if (countMap[key] > 1) {
      duplicates.push({ value: key, count: countMap[key] });
    }
  }

  return duplicates;
}

// Example usage:
const numbers = [1, 2, 3, 4, 4, 2, 5, 6, 6, 6];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [{ value: 2, count: 2 }, { value: 4, count: 2 }, { value: 6, count: 3 }]

///To find unique without inbuilt
function findUnique(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

const arr = [1, 2, 3, 4, 2, 5, 3, 6, 7, 4];
console.log(findUnique(arr)); // Output: [1, 2, 3, 4, 5, 6, 7]

// split  string in equal parts

function splitString(string) {
  let equalStr = [];
  let char = 3;
  for (let i = 0; i < string.length; i = i + char) {
    var part = string.substring(i, i + 3);
    equalStr.push(part);
  }
  console.log(equalStr.join("-"));
}
splitString("999999999"); // 999-999-999

// Longest Word in a string

function findLongestWordString(str) {
  let strArray = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestWord.length) {
      longestWord = strArray[i];
    }
  }
  console.log("longestWord::", longestWord, "its length:", longestWord.length);
}

// findLongestWordString('The quick brown fox jumped over the lazy dog')
// longestWord:: jumped its length: 6

// Longest Substring without repeating characters

var lengthOfLongestSubstring = function (string) {
  var max = 0,
    current_string = "",
    char,
    pos;
  // aaaabc
  for (i = 0; i < string.length; i += 1) {
    char = string.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) {
      current_string = current_string.substring(pos + 1);
    }
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return { max, current_string };
};

// lengthOfLongestSubstring('aaabc')
// {max: 3, current_string: 'abc'}

// Sum of two number in an array equal to third

function sumOfTwoEqualToThird(numArray, targetNumber) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] === targetNumber) {
        return (indexArray = [i, j]);
      }
    }
  }
}

// sumOfTwoEqualToThird([3,2,4],6) :::: [1, 2]
// sumOfTwoEqualToThird([3,2,4],7) :::: [0, 2]

// 2 dimensional Matrix
function printMatrix() {
  let matrix = [];
  let row = 3;
  let col = 3;
  let h = 0;

  // Loop to initialize 2D array elements.
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = h++;
    }
  }
  console.log(matrix); //[ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
}

// calculate diagonal sum of matrix
// [(0, 0) (0, 1) (0, 2)
// (1, 0) (1, 1) (1, 2)
// (2, 0) (2, 1) (2, 2)]
function calculateDiagonalSumOfMatrix(matrix) {
  let matrixLength = matrix.length;
  let diagonal1 = 0, //sum of ((0,0),(1,1),(2,2))
    diagonal2 = 0; //sum of ((0,2),(1,1),(2,0))
  for (i = 0; i < matrixLength; i++) {
    for (j = 0; j < matrixLength; j++) {
      if (i === j) {
        diagonal1 += matrix[(i, j)];
      }

      if (i + j === matrix.length - 1) {
        diagonal2 += matrix[(i, j)];
      }
    }
  }
  const sum = Math.abs(diagonal1 - diagonal2);
  const mul = diagonal1 * diagonal2;
  console.log("sum::::", sum);
  console.log("mul::::", mul);
}
// Bubble sort

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// bubbleSort([3,4,6,2,1,21,5,8])  [1, 2, 3, 4, 5, 6, 8, 21]

//************sum(1)(2)(3)(4)() */
let sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
//sum(2)(3)(1)(25)(19)() //50

//**********************Create custom Map */

Array.prototype.myMap = function (callback) {
  let newArray = [];
  let x = this.length;
  for (let i = 0; i < x; i++) {
    let counter = callback(this[i]);
    newArray.push(counter);
  }
  return newArray;
};

let arr = [1, 2, 3];
arr = arr.myMap((e) => e * 2);
console.log(arr);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  const lot = (root, level) => {
    if (!root) return;
    if (result[level]) result[level].push(root.val);
    else result[level] = [root.val];
    lot(root.left, level + 1);
    lot(root.right, level + 1);
  };
  lot(root, 0);
  return result.map((b, i) => (i % 2 ? b.reverse() : b));
};

/********Find Duplicate word in the string********/
const string = "big black bug bit a big black dog on his big black nose";

const findDuplicateWords = (str) => {
  const strArr = str.split(" ");
  const res = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
      // console.log("res before", res);
      if (!res.includes(strArr[i])) {
        res.push(strArr[i]);
        console.log("res After", res);
      }
    }
  }
  console.log(res);
  return res.join(" ");
};

let str = "how is my code. how is my style";
function findDuplicateWordsAndThereCount() {
  let words = [""];

  for (let i = 0; i < str.length; i++)
    if (str[i] !== " ") {
      words[words.length - 1] += str[i];
    } else if (words[words.length - 1]) {
      words.push("");
    }
  console.log(words);
  var countObj = {};
  words.forEach(function (x) {
    countObj[x] = (countObj[x] || 0) + 1;
  });
  console.log(countObj);
}
//  ['how', 'is', 'my', 'code.', 'how', 'is', 'my', 'style']
// {how: 2, is: 2, my: 2, code.: 1, style: 1}

/************fix  i value without using let**************/
function x() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
}

x();
/************deppClone***********/

function deepClone(object) {}

var newObject = {};
for (var key in object) {
  if (typeof object[key] === "object" && object[key] !== null) {
    newObject[key] = deepClone(object[key]);
  } else {
    newObject[key] = object[key];
  }
  return newObject;
}

/***********Custom Log**********/

function appLog() {
  var args = Array.prototype.call(arguments);
  args.unshift("MY APP:::");
  console.log.bind(console, args);
}

// appLog("Some Error"); // MY APP::: Some Error

/***************IF ARRAY IS ALREADY SORTED THEN USE********** */
(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numberArray);
})();

/***************Fibonaci Series************ */

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

/********Missing Number in an array********/

function findMissingNumber(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let transformArray = [];
  for (let i = min; i < max; i++) {
    if (array.indexOf(i) === -1) {
      transformArray.push(i);
    }
  }
  console.log(transformArray);
}

findMissingNumber([1, 10]);

/*******Prime Number**********/
for (var i = 1; i <= 20; i++) {
  var a = false;
  for (var j = 2; j <= i; j++) {
    if (i % j === 0 && i !== j) {
      a = true;
    }
  }
  if (a === false) {
    document.write("<br>" + i);
  }
}

/**********Count the value for duplicate numbers */

const arry = [1, 3, 7, 2, 3, 4, 5, 1, 2, 8, 9, 1, 3];
let sortedArray = arry.sort();
const count = {};
sortedArray.forEach((x) => {
  count[x] = (count[x] || 0) + 1;
});

/*********ANAGRAM************/
function isAnagram(str1, str2) {
  // Removes spaces and convert into the lowercase letter

  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  // console.log(str1, str2)

  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in the given string
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Compare the sorted String

  return str1 === str2;
}

const check = isAnagram("I am Monu", "am I OnMU"); // true
const check2 = isAnagram("Monu", "MODI"); // false

/******Longest balanced substring of binary number */
var findTheLongestBalancedSubstring = function (s) {
  let temp = "01";
  while (s.includes(temp)) {
    temp = 0 + temp + 1;
  }
  return temp.length - 2;
};

// findTheLongestBalancedSubstring("00111"); // 4;

/************flatten array in JS****************/
var a = [1, 2, 3, { test: "key" }, [4, [5, 6]], 7, 8];

function flattenArray(a, flattenArr) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flattenArray(a[i], flattenArr);
    } else {
      flattenArr.push(a[i]);
    }
  }
  return flattenArr;
}

console.log(flattenArray(a, []));

/* var a ="updatestring"
var b = a.substr(0,3).toUpperCase()+a.substr(3,a.length-3);
console.log(b) */

/******************Convert To toUpperCase***********/
function convertToUpperCase(char, noOfCharToUpdate) {
  var b =
    char.substring(0, noOfCharToUpdate).toUpperCase() +
    char.substring(noOfCharToUpdate, a.length - 3);
  console.log(b);
}

// convertToUpperCase('Update',2)

// Sum of a number in an array
function findSubsetsWithIndices(arr, targetSum) {
  const subsets = [];

  function backtrack(start, currentSum, currentIndex) {
    if (currentSum === targetSum) {
      subsets.push([...currentIndex]); // Found a valid subset of indices
      return;
    }

    for (let i = start; i < arr.length; i++) {
      const num = arr[i];
      if (currentSum + num <= targetSum) {
        currentIndex.push(i);
        backtrack(i + 1, currentSum + num, currentIndex);
        currentIndex.pop();
      }
    }
  }

  backtrack(0, 0, []);

  return subsets;
}

const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const subsets = findSubsetsWithIndices(arr, targetSum);

if (subsets.length > 0) {
  console.log(`Subsets with sum ${targetSum}:`);
  subsets.forEach((indices) => {
    const subset = indices.map((index) => arr[index]);
    console.log(`Subset: [${subset}] (Indices: [${indices}])`);
  });
} else {
  console.log(`No subsets found with sum ${targetSum}`);
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
// </head>
// <body>

//    <button id="myBtn1">Resolve </button>
//    <button id="myBtn2">Reject </button>

//     <!-- JavaScript -->
//     <script>
//     /* var a = new Promise(); */
// const p = new Promise((resolve, reject) => {
//   document.getElementById("myBtn1").addEventLister('click',()=>{
//  resolve("myPromise")
// })

//   document.getElementById("myBtn2").addEventLister('click',()=>{
//  reject("reject myPromise")
// })

// });

//   p.then((res) => {
//     console.log("p", res);
//   }).catch(e=>{console.log(err)});
//     </script>
// </body>
// </html>


 let x = NaN;
let y = NaN;
 
console.log(x === y)

var v1 = 10;
(function(){
    console.log(v1); // undefined     
    var v1 = 20;
    console.log(v1);    // 20
})();
console.log(v1);         // 10
var v1 = 30;

var v1 = 10;
(function(){
    console.log(v1); //10
    v1 = 20;  
    console.log(v1);     //20   
})();
console.log(v1); //20
var v1 = 30; 

const arr = [1, [2, 3], [4, [5, 6]]];
// [1, 2, 3, 4, 5, 6]

function flatTheArray(arr1){
let myArray = [];
for(let i =0;i<arr1.length;i++){
if(Array.isArray(arr1[i])){
myArray = myArray.concat(flatTheArray(arr1[i]))
}else{
myArray.push( arr1[i])

}
}
return myArray
}

var a = flatTheArray(arr)
console.log(a) 

/* map(value=>value/2) */
 
Array.prototype.myMap= function(callback,arg){
const result = [];
for(let i =0;i<this.length;i++){
result.push(callback.call(arg,this[i],i,this))
}
console.log(result);
return result
}

var number = [1,2,3,4];

const multiplyBy2 =  number.myMap(value=>value*2)
console.log(multiplyBy2); 

Function.prototype.myBind = function(contex,...bindArg){
const orginalInstance = this;
return function(...args){
 console.log('ARGS', ...args)
const returnArgs = [...bindArg,...args]
if(this instanceof orginalInstance){
return new orignalInstance(...args)
}
return orginalInstance.apply(contex, returnArgs)
}
}

function foo(fName,lName){
return fName + " "+ lName;
}

var a = {fName:"Shashnak", lName: "Shekhar"}
var b = foo.myBind(a)
console.log(b())

















































