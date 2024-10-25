// * Count Substrings That Satisfy K-Constraint I

// TIP: This is a sliding window problem

/*
You are given a binary string s and an integer k.

A binary string satisfies the k-constraint if either of the following conditions holds:

- The number of 0's in the string is at most k.
- The number of 1's in the string is at most k.

Return an integer denoting the number of 
substrings of s that satisfy the k-constraint.
*/

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

// O(n^3) time | O(1) space
function countKConstraintSubstrings(s, k) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.slice(i, j)
      if (isSatisfied(substring, k)) count++
    }
  }

  return count
}

// O(n) time | O(1) space - helper function to check if substring satisfies k-constraint
function isSatisfied(substring, k) {
  let count0 = 0
  let count1 = 0

  for (let char of substring) {
    if (char === '0') count0++
    else if (char === '1') count1++
  }

  if (count0 <= k || count1 <= k) return true
  else return false
}

// -------------------------
// TESTS

console.log(countKConstraintSubstrings('10101', 1)) // 12
// Explanation: Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.

console.log(countKConstraintSubstrings('1010101', 2)) // 25
// Explanation: Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.
