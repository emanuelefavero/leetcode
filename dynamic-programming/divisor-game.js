// * Divisor Game

/*
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.
*/

function divisorGame(n) {
  return n % 2 === 0

  // TIP: Since Alice goes first, if n is even, she can always choose x = 1 and win the game so if n is even, Alice wins every time
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses dynamic programming (bottom-up approach) but is not as efficient as the first solution

// TODO jsDoc

function divisorGame2(n) {
  let dp = new Array(n + 1).fill(false)

  dp[0] = false
  dp[1] = false

  // We start at 2 because we already know the answer for 0 and 1
  // We use a nested loop to check if there is a divisor of i that will make the next player lose and if so, we set dp[i] to true
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true
        break
      }
    }
  }

  return dp[n]
}

// -----------------------------
// TESTS

// 1
console.log(divisorGame(2)) // true
console.log(divisorGame(3)) // false

// 2
console.log(divisorGame2(2)) // true
console.log(divisorGame2(3)) // false
