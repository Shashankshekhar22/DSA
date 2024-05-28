// If we have 2 array and need to find out if there is any value common among these 2 array
// for eg arr1 = [2,3,5] arr2 = [1,4,5]

// HT: Item In Common
// In this exercise, you are tasked with writing a JavaScript function named itemInCommon. This function should take two arrays as its parameters. The goal of the function is to determine whether the two arrays have at least one element in common.

// If there is at least one common element between the two arrays, your function should return true. If there are no common elements, the function should return false.

// Examples:

// itemInCommon([1, 3, 5], [2, 4, 5]) should return true because both arrays contain the number 5.

// itemInCommon([1, 3, 5], [2, 4, 6]) should return false because there are no common items.

// You can use two types of hash tables to solve this problem in JavaScript:

// Map: A built-in object that allows you to store key-value pairs.

// Object: The most basic data structure in JavaScript, which can also act like a hash table for key-value storage.

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

itemInCommon(arr1, arr2);
