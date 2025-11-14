// * Find if Digit Game Can Be Won

/*
You are given an array of positive integers nums.

Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false.
*/

/**
 * @param {number[]} nums
 * @returns {boolean}
 */

// O(n) time | O(1) space
function canAliceWin(nums) {
  let singleDigitSum = 0
  let doubleDigitSum = 0

  for (const num of nums) {
    if (num < 10) {
      singleDigitSum += num
    } else doubleDigitSum += num
  }

  return singleDigitSum !== doubleDigitSum
}

// -------------------------
// TESTS

console.log(canAliceWin([1, 2, 3, 4, 10])) // false
// Explanation: Alice cannot win by choosing either single-digit or double-digit numbers.
