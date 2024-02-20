// * Find the Maximum Achievable Number

/*
You are given two integers, num and t.

An integer x is called achievable if it can become equal to num after applying the following operation no more than t times:

Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
Return the maximum possible achievable number. It can be proven that there exists at least one achievable number.
*/

function theMaximumAchievableX(num, t) {
  // TIP: the maximum achievable number is num+2t as it is impossible to obtain a higher number within t steps
  return num + 2 * t
}

// -------------------------
// TESTS

console.log(theMaximumAchievableX(4, 1)) // 6
// Explanation: The maximum achievable number is x = 6; it can become equal to num after performing this operation:
// 1- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
// It can be proven that there is no achievable number larger than 6.
