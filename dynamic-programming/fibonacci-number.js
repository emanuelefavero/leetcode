// * Fibonacci Number

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

// TIP: This solution uses memoization to store the results of previous calculations (dynamic programming)

function fib(n, memo = {}) {
  if (n === 0 || n === 1) return n

  if (!memo[n]) return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo))

  return memo[n]
}

// -----------------------------
// TESTS

console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(9)) // 34
console.log(fib(10)) // 55
