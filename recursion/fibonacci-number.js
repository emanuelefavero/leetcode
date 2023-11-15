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
    return (memo[n] = fib(n - 2, memo) + fib(n - 1, memo))
  }

  return memo[n]
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
