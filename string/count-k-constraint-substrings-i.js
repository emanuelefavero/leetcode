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
  let zeros = 0
  let ones = 0

  for (let char of substring) {
    if (char === '0') zeros++
    else if (char === '1') ones++
  }

  if (zeros <= k || ones <= k) return true
  else return false
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more optimized than the previous one

function countKConstraintSubstrings2(s, k) {
  let n = s.length
  let count = 0

  for (let i = 0; i < n; i++) {
    let zeros = 0
    let ones = 0

    // iterate through the substring
    for (let j = i; j < n; j++) {
      // count 0's and 1's in the substring
      if (s[j] === '0') zeros++
      else ones++

      // check if substring satisfies k-constraint
      if (zeros <= k || ones <= k) count++
      else break
    }
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countKConstraintSubstrings('10101', 1)) // 12
// Explanation: Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.

// 2
console.log(countKConstraintSubstrings2('10101', 1)) // 12
