//

/**
 * @param {number} n
 * @returns {number}
 */

function fib(n) {
  if (n === 0 || n === 1) return n

  return fib(n - 2) + fib(n - 1)
}

// -----------------------
// SOLUTION 2

// TIP: This solution uses memoization (dynamic programming) to improve performance

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
console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(10)) // 5

// 2
console.log(fib2(2)) // 1
console.log(fib2(3)) // 2
console.log(fib2(4)) // 3
console.log(fib2(10)) // 5

// 3
console.log(fib3(2)) // 1
console.log(fib3(3)) // 2
console.log(fib3(4)) // 3
console.log(fib3(10)) // 5
