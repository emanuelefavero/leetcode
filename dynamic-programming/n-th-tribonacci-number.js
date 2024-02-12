// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0
// Given n, return the value of Tn

/**
 * *  N-th Tribonacci Number
 *
 * @param {number} n
 * @returns {number}
 */

// NOTE: Do not use this solution for large values of n, it's not efficient

// O(3^n) time | O(n) space
function tribonacci(n) {
  if (n === 2) return 1
  if (n <= 1) return n

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}

// -----------------------------
// TESTS

// 1
console.log(tribonacci(4)) // 4
console.log(tribonacci(25)) // 1389537
