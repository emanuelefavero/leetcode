/**
 * * Given an integer n, return the least number of perfect square numbers that sum to n
 *
 * A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not
 *
 * @param {number} n
 * @returns {number}
 */

/*
EXAMPLE 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

EXAMPLE 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9
*/

// O(n * sqrt(n)) time | O(n) space
function numSquares(n) {
  const queue = [n]
  const visited = new Set()

  let counter = 0

  while (queue.length > 0) {
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift()

      if (current === 0) return counter

      for (let j = 1; j * j <= current; j++) {
        const next = current - j * j

        if (!visited.has(next)) {
          queue.push(next)
          visited.add(next)
        }
      }
    }

    counter++
  }

  return -1
}

// --------------------------
// SOLUTION 2

// NOTE: This is a mathematical solution

function numSquares2(n) {
  // check if x is a perfect square
  function isSquare(x) {
    return Math.floor(Math.sqrt(x)) ** 2 === x
  }

  // if n is a perfect square, return 1
  if (isSquare(n)) return 1

  // if n is divisible by 4, n /= 4 divides n by 4 and assigns the result back to n
  while (n % 4 === 0) n /= 4

  // if at this point the remainder of n / 8 is 7, return 4
  if (n % 8 === 7) return 4

  // check if n can be written as the sum of two perfect squares
  for (let i = 0; i <= n; i++) {
    // if n - i * i is a perfect square, return 2
    if (isSquare(n - i * i)) return 2
  }

  return 3
}

// --------------------------
// SOLUTION 3

// NOTE: This is a dynamic programming solution

function numSquares3(n) {
  // TIP: db means dynamic programming

  // dp[i] represents the least number of perfect square numbers that sum to i
  let dp = new Array(n + 1)

  // base case
  dp[0] = 0 // 0 is the sum of 0 perfect squares

  // fill the dp array from 1 to n
  for (let i = 1; i <= n; i++) {
    dp[i] = i // the worst case is 1 + 1 + ... + 1

    // for each i, it must be the sum of some number (i - j * j) and a perfect square number (j * j)
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(1 + dp[i - j * j], dp[i])
    }
  }

  return dp[n] // the least number of perfect square numbers that sum to n
}

// --------------------------
// TESTS

// Solution 1
console.log(numSquares(12)) // 3, 12 = 4 + 4 + 4
console.log(numSquares(13)) // 2, 13 = 4 + 9

// Solution 2
console.log(numSquares2(12)) // 3, 12 = 4 + 4 + 4
console.log(numSquares2(13)) // 2, 13 = 4 + 9

// Solution 3
console.log(numSquares3(12)) // 3, 12 = 4 + 4 + 4
console.log(numSquares3(13)) // 2, 13 = 4 + 9
