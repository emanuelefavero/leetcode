// * Fibonacci Number

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

// TIP: This solution uses memoization to store the results of previous calculations (top-down dynamic programming)

/**
 * @param {number} n
 * @returns {number}
 */

// O(n) time | O(n) space
function fib(n, memo = {}) {
  if (n === 0 || n === 1) return n

  if (!memo[n]) return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo))

  return memo[n]
}

// -----------------------------
// SOLUTION 2

// TIP: This solution does not use memoization and is much less efficient

// O(2^n) time (exponential) | O(n) space
function fib2(n) {
  if (n === 0 || n === 1) return n

  return fib2(n - 1) + fib2(n - 2)
}

// -----------------------------
// SOLUTION 3

// TIP: This solution uses tabulation (bottom-up dynamic programming)

// O(n) time | O(n) space
function fib3(n) {
  const table = new Array(n + 1)

  table[0] = 0
  table[1] = 1

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2]
  }

  return table[n]
}

// -----------------------------
// TESTS

// 1
console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(9)) // 34
console.log(fib(10)) // 55

// 2
console.log(fib2(10)) // 55

// 3
console.log(fib3(10)) // 55
