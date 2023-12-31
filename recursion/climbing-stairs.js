/**
 * * Climbing Stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * @param {number} n
 * @param {object} memo
 * @returns {number}
 */

// TIP: This solution is identical to fibonacci number

// O(2^n) time | O(n) space
function climbStairs(n, memo = {}) {
  if (n === 0 || n === 1) return 1

  if (!memo[n]) {
    return (memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo))
  }

  return memo[n]
}

// -----------------------
// SOLUTION 2

function climbStairs2(n) {
  let result = [1, 1]

  for (let i = 2; i <= n; i++) {
    // ? add previous and current numbers up until n
    result.push(result[i - 1] + result[i - 2])
  }

  return result[n]
}

// -----------------------
// TESTS

// 1
console.log(climbStairs(2)) // 2, 1 + 1 = 2, 2 = 2
console.log(climbStairs(3)) // 3, 1 + 1 + 1 = 3, 1 + 2 = 3, 2 + 1 = 3
console.log(climbStairs(4)) // 5, 1 + 1 + 1 + 1 = 4, 1 + 1 + 2 = 4, 1 + 2 + 1 = 4, 2 + 1 + 1 = 4, 2 + 2 = 4

// 2
console.log(climbStairs2(2)) // 2, 1 + 1 = 2, 2 = 2
console.log(climbStairs2(3)) // 3, 1 + 1 + 1 = 3, 1 + 2 = 3, 2 + 1 = 3
console.log(climbStairs2(4)) // 5, 1 + 1 + 1 + 1 = 4, 1 + 1 + 2 = 4, 1 + 2 + 1 = 4, 2 + 1 + 1 = 4, 2 + 2 = 4
