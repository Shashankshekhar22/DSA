// Set: Find Pairs ( ** Interview Question)
// Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

// The function should return these pairs as a list.

// Example

// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7

// Output: [[1, 6], [2, 5], [3, 4]]

// In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7. So, the function returns these pairs.

// Requirements

// The function should take in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should return a list of pairs that sum up to the target.

function findPairs(arr1, arr2, target) {
  let pair = [];
  let aaray1Set = new Set(arr1);
  for (let i = 0; i < arr2.length; i++) {
    for (let j of aaray1Set) {
      if (j + arr2[i] === target) {
        pair.push([j, arr2[i]]);
      }
    }
  }
  return pair;
}

//2nd way

// Declare the function named "findPairs"
// It takes three arguments: two arrays "arr1" and "arr2", and a number "target".
function findPairs(arr1, arr2, target) {
  // Create an empty Set to store numbers from "arr1"
  // Sets hold unique values
  const mySet = new Set();

  // Create an empty array to store pairs of numbers
  // that add up to the "target"
  const pairs = [];

  // Loop through each number in "arr1"
  for (const num of arr1) {
    // Add each number to "mySet"
    mySet.add(num);
  }

  // Loop through each number in "arr2"
  for (const num of arr2) {
    // Calculate what number would be needed
    // to make the current number in "arr2" add up to "target"
    const complement = target - num;

    // Check if this "complement" exists in "mySet"
    if (mySet.has(complement)) {
      // If it does, add the pair [complement, num] to "pairs"
      pairs.push([complement, num]);
    }
  }

  // Return the "pairs" array
  // It contains pairs of numbers that add up to "target"
  return pairs;
}

// -------------------
// Single Pair Matching
// -------------------
console.log("Single Pair Matching:");
console.log("Input: [1, 2, 3], [4, 5, 6], 7");
console.log("Output: ", findPairs([1, 2, 3], [4, 5, 6], 7));
console.log("---------------");

// -------------------
// Multiple Pairs
// -------------------
console.log("Multiple Pairs:");
console.log("Input: [1, 2, 3], [7, 6, 5], 8");
console.log("Output: ", findPairs([1, 2, 3], [7, 6, 5], 8));
console.log("---------------");

// -------------------
// No Matching Pairs
// -------------------
console.log("No Matching Pairs:");
console.log("Input: [1, 2, 3], [7, 8, 9], 5");
console.log("Output: ", findPairs([1, 2, 3], [7, 8, 9], 5));
console.log("---------------");

// -------------------
// Empty Arrays
// -------------------
console.log("Empty Arrays:");
console.log("Input: [], [], 10");
console.log("Output: ", findPairs([], [], 10));
console.log("---------------");

// -------------------
// One Empty Array
// -------------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], [], 4");
console.log("Output: ", findPairs([1, 2, 3], [], 4));
console.log("---------------");
