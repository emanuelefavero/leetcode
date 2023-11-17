// * Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n, memo = {}) {
  if (n === 0 || n === 1) return 1

  if (!memo[n]) {
    // ? this problem is similar to fibonacci number
    return (memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo))
  }

  return memo[n]
}

// -----------------------
// TESTS

console.log(climbStairs(2)) // 2, 1 + 1 = 2, 2 = 2
console.log(climbStairs(3)) // 3, 1 + 1 + 1 = 3, 1 + 2 = 3, 2 + 1 = 3
console.log(climbStairs(4)) // 5, 1 + 1 + 1 + 1 = 4, 1 + 1 + 2 = 4, 1 + 2 + 1 = 4, 2 + 1 + 1 = 4, 2 + 2 = 4
