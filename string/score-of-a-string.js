// * Score of a String

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(1) space
function scoreOfString(s) {
  let sum = 0

  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0))
  }

  return sum
}

// -------------------------
// TESTS

console.log(scoreOfString('hello')) // 13
// Explanation: The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
