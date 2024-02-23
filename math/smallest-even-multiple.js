/**
 * * Smallest Even Multiple
 *
 * Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 * @param {number} n
 * @returns {number}
 */

// O(1) time | O(1) space
function smallestEvenMultiple(n) {
  return n % 2 === 0 ? n : n * 2
}

// -------------------------
// TESTS

console.log(smallestEvenMultiple(10)) // 10
// Explanation: The smallest multiple of both 5 and 2 is 10

console.log(smallestEvenMultiple(6)) // 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself
