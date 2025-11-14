// * Number of Common Factors

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

// O(n) time | O(1) space
function commonFactors(a, b) {
  const min = Math.min(a, b)
  let count = 0

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(commonFactors(12, 6)) // 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

console.log(commonFactors(25, 30)) // 2
console.log(commonFactors(885, 885)) // 8
