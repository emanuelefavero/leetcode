// * Calculate Money in Leetcode Bank

/*
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.

Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
*/

/**
 * @param {number} n
 * @returns {number}
 */

// O(n) time | O(1) space
function totalMoney(n) {
  let result = 0
  let day = 1
  let week = 1

  for (let i = 1; i <= n; i++) {
    result += day
    day++

    if (i % 7 === 0) {
      week++
      day = week
    }
  }

  return result
}

// -------------------------
// TESTS

console.log(totalMoney(4)) // 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
console.log(totalMoney(10)) // 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
