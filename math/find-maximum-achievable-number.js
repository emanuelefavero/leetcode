// * Find the Maximum Achievable Number

/*
You are given two integers, num and t.

An integer x is called achievable if it can become equal to num after applying the following operation no more than t times:

Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
Return the maximum possible achievable number. It can be proven that there exists at least one achievable number.
*/

/**
 * @param {number} num
 * @param {number} t
 * @returns {number}
 */

// O(1) time | O(1) space
function theMaximumAchievableX(num, t) {
  // TIP: the maximum achievable number is num+2t as it is impossible to obtain a higher number within t steps
  return num + 2 * t
}

// -------------------------
// SOLUTION 2

// O(t) time | O(1) space
function theMaximumAchievableX2(num, t) {
  let x = t

  while (t > 0) {
    num++
    t--
  }

  num += x

  return num
}

// -------------------------
// TESTS

console.log(theMaximumAchievableX(4, 1)) // 6
// Explanation: The maximum achievable number is x = 6; it can become equal to num after performing this operation:
// 1- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
// It can be proven that there is no achievable number larger than 6.

console.log(theMaximumAchievableX2(4, 1)) // 6
