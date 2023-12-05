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
// TESTS

console.log(divisorGame(2)) // true
console.log(divisorGame(3)) // false
