// HT: Group Anagrams ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named groupAnagrams.

// The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

// Your function should return an array of arrays, where each inner array contains a group of anagram strings.

// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].

// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

// Your goal is to implement this function using both a Map and an Object to understand the nuances of the syntax of these different hash table types.

function groupAnagrams(strings) {
  const anagramGroups = new Map();

  for (const string of strings) {
    const chars = Array.from(string);
    chars.sort();
    const canonical = chars.join("");
    console.log("cano:::: ", canonical);
    if (anagramGroups.has(canonical)) {
      console.log("PUSHING::::: ", string);
      anagramGroups.get(canonical).push(string);
    } else {
      console.log("STRING::::: ", [string]);
      const group = [string];
      anagramGroups.set(canonical, group);
    }
  }
  console.log("anagramGroups", anagramGroups);
  return Array.from(anagramGroups.values());
}

// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
);
console.log("---------------");

// Lowercase Anagrams:
//  Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
//  cano::::  aet
//  STRING:::::  ['eat']
//  cano::::  aet
//  PUSHING:::::  tea
//  cano::::  ant
//  STRING:::::  ['tan']
//  cano::::  aet
//  PUSHING:::::  ate
//  cano::::  ant
//  PUSHING:::::  nat
//  cano::::  abt
//  STRING:::::  ['bat']
//  anagramGroups Map(3) {'aet' => Array(3), 'ant' => Array(2), 'abt' => Array(1)}
//  Output:  [["eat","tea","ate"],["tan","nat"],["bat"]]
//  ---------------
