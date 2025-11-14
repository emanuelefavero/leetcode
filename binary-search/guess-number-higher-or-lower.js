// Guess Number Higher or Lower

/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/

/**
 * NOTE: simulate guess function (this function is provided by LeetCode, we don't need to implement it)
 *
 * @param {number} n
 * @returns {number}
 */

function guess(n) {
  const pick = 6

  if (n > pick) return -1
  else if (n < pick) return 1
  else return 0
}

/**
 * * Guess Number Higher or Lower
 *
 * @param {number} n
 * @returns {number}
 */

// O(log n) time | O(1) space
function guessNumber(n) {
  let left = 1
  let right = n

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (guess(middle) === 0) return middle
    else if (guess(middle) === 1) left = middle + 1
    else if (guess(middle) === -1) right = middle - 1
  }
}

// -------------------------
// TESTS

console.log(guessNumber(10)) // 6
