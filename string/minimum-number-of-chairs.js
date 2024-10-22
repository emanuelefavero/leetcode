// * Minimum Number of Chairs in a Waiting Room

/*
You are given a string s. Simulate events at each second i:

If s[i] == 'E', a person enters the waiting room and takes one of the chairs in it.
If s[i] == 'L', a person leaves the waiting room, freeing up a chair.
Return the minimum number of chairs needed so that a chair is available for every person who enters the waiting room given that it is initially empty.
*/

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(1) space
function minimumChairs(s) {
  let count = 0
  let max = 0

  for (let char of s) {
    if (char === 'E') count++
    else count--
    max = Math.max(max, count)
  }

  return max
}

// -------------------------
// TESTS

console.log(minimumChairs('EEEEEEE')) // 7
// Explanation: After each second, a person enters the waiting room and no person leaves it. Therefore, a minimum of 7 chairs is needed.

console.log(minimumChairs('ELELEEL')) // 2
