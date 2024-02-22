// * Divisible and Non-divisible Sums Difference

/*
You are given positive integers n and m.

Define two integers, num1 and num2, as follows:

num1: The sum of all integers in the range [1, n] that are not divisible by m.
num2: The sum of all integers in the range [1, n] that are divisible by m.
Return the integer num1 - num2.
*/

/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

// O(n) time | O(1) space
function differenceOfSums(n, m) {
  let num1 = []
  let num2 = []

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2.push(i)
    } else {
      num1.push(i)
    }
  }

  num1 = num1.reduce((accumulator, value) => accumulator + value, 0)
  num2 = num2.reduce((accumulator, value) => accumulator + value, 0)

  return num1 - num2
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient than the previous one

function differenceOfSums(n, m) {
  let num1 = 0
  let num2 = 0

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2 += i
    } else {
      num1 += i
    }
  }

  return num1 - num2
}

// -------------------------
// TESTS

console.log(differenceOfSums(10, 3)) // 19
// Explanation:
// num1 = 1 + 2 + 4 + 5 + 7 + 8 + 10 = 37
// num2 = 3 + 6 + 9 = 18
// num1 - num2 = 37 - 18 = 19
