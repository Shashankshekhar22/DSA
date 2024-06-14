// Set: Longest Consecutive Sequence ( ** Interview Question)
// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.

// Your function should find and return the length of the longest consecutive sequence of numbers in the list.

// Example 1:

// Input: [1, 2, 3, 4, 5]

// Output: 5

// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

// Example 2:

// Input: [1, 3, 5, 2, 4]

// Output: 5

// Here, even though the numbers are not in order, they still form a consecutive sequence when arranged. So the length is 5.

// Example 3:

// Input: [2, 1, 4, 7, 3]

// Output: 4

// In this example, when arranged in order, the numbers 1, 2, 3, and 4 form a consecutive sequence. So, the length is 4.

// Example 4:

// Input: [9, 1, 3, 10, 2, 20, 21]

// Output: 2

// Here, the longest consecutive sequence is 9 and 10, or 20 and 21, both having a length of 2.

// Example 5:

// Input: [100, 4, 200, 1, 3, 2]

// Output: 4

// In this example, the longest consecutive sequence is 1, 2, 3, and 4. The length is 4.

// Example 6:

// Input: []

// Output: 0

// In this case, the list is empty. Therefore, the length of the longest consecutive sequence is 0.

// Requirements

// Your function should take a list of numbers as input.

// The function should return a single number, which is the length of the longest consecutive sequence.

// Notes

// The numbers in the list can be in any order.

// If the list is empty, the function should return 0.

// The sequence has to be consecutive numbers (e.g., 1, 2, 3...) but they don't have to be in order in the list.

// Declare the function named "longestConsecutiveSequence"
// It takes an array "nums" as its argument
function longestConsecutiveSequence(nums) {
  // Create an empty Set to store unique numbers from "nums"
  const numSet = new Set();

  // Loop through each number in "nums"
  for (const num of nums) {
    // Add each number to "numSet"
    numSet.add(num);
  }

  // Initialize a variable to keep track of the longest consecutive sequence
  let longestStreak = 0;

  // Loop through each unique number in "numSet"
  for (const num of numSet) {
    // Check if the number just smaller than the current number exists
    // If it does not exist, then this number is the start of a new sequence
    if (!numSet.has(num - 1)) {
      // Initialize variables to keep track of the current number
      // and the length of the sequence starting from this number
      let currentNum = num;
      let currentStreak = 1;

      // Check if the number just greater than the current number exists
      // If it does, extend the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update "longestStreak" if "currentStreak" is longer
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  // Return the length of the longest consecutive sequence
  return longestStreak;
}

// -------------------
// No Consecutive Sequence
// -------------------
console.log("No Consecutive Sequence:");
console.log("Input: [1, 3, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 3, 5]));
console.log("---------------");

// -------------------
// Single Element
// -------------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", longestConsecutiveSequence([1]));
console.log("---------------");

// -------------------
// Consecutive Sequence
// -------------------
console.log("Consecutive Sequence:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log("---------------");

// -------------------
// Unordered Input
// -------------------
console.log("Unordered Input:");
console.log("Input: [5, 2, 3, 1, 4]");
console.log("Output: ", longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log("---------------");

// -------------------
// Empty Array
// -------------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", longestConsecutiveSequence([]));
console.log("---------------");

// -------------------
// Multiple Sequences
// -------------------
console.log("Multiple Sequences:");
console.log("Input: [1, 2, 3, 10, 11, 12]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log("---------------");
