// * Fibonacci Number

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

/**
 * @param {number} n
 * @returns {number}
 */

// O(2^n) time | O(n) space
function fib(n) {
  if (n === 0 || n === 1) return n

  return fib(n - 2) + fib(n - 1)
}

// -----------------------
// SOLUTION 2

// TIP: This solution uses memoization (dynamic programming) to improve performance

// O(n) time | O(n) space
function fib2(n, memo = {}) {
  if (n === 0 || n === 1) return n

  if (!memo[n]) {
    return (memo[n] = fib2(n - 2, memo) + fib2(n - 1, memo))
  }

  return memo[n]
}

// -----------------------
// SOLUTION 3

// TIP: This solution does not use recursion

// O(n) time | O(1) space
function fib3(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  let prev = 0
  let curr = 1

  for (let i = 2; i <= n; i++) {
    let next = prev + curr // add previous and current numbers
    prev = curr
    curr = next // update current number to sum of previous and current numbers
  }

  return curr
}

// -----------------------
// TESTS

// 1
console.log(fib(2)) // 1, 1 + 0 = 1
console.log(fib(3)) // 2, 1 + 1 = 2
console.log(fib(4)) // 3, 1 + 2 = 3
console.log(fib(10)) // 55, 34 + 21 = 55

// 2
console.log(fib2(2)) // 1
console.log(fib2(3)) // 2
console.log(fib2(4)) // 3
console.log(fib2(10)) // 55, 34 + 21 = 55

// 3
console.log(fib3(2)) // 1
console.log(fib3(3)) // 2
console.log(fib3(4)) // 3
console.log(fib3(10)) // 55, 34 + 21 = 55
