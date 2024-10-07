// * Number of Strings That Appear as Substrings in Word

// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

/**
 * @param {string[]} patterns
 * @param {string} word
 * @returns {number}
 */

// O(n * m) time | O(1) space - where n is the number of strings in patterns and m is the length of the word
function numOfStrings(patterns, word) {
  let count = 0

  for (const string of patterns) {
    if (word.includes(string)) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc')) // 3
/*
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
*/
