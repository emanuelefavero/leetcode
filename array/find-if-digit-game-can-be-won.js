// * Find if Digit Game Can Be Won

/*
You are given an array of positive integers nums.

Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false.
*/

function canAliceWin(nums) {
  let sum1 = 0
  let doubleDigitSum = 0

  for (let num of nums) {
    if (num < 10) {
      sum1 += num
    } else doubleDigitSum += num
  }

  return sum1 !== doubleDigitSum
}

// -------------------------
// TESTS

console.log(canAliceWin([1, 2, 3, 4, 10])) // false
// Explanation: Alice cannot win by choosing either single-digit or double-digit numbers.
