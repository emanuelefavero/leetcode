// * Sum of Digits in Base K

// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

/**
 * @param {number} n
 * @param {Number} k
 * @returns {number}
 */

// O(log(n)) time | O(1) space
function sumBase(n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// ----------------------
// SOLUTION 2

// TIP: We can also solve this problem without converting the number to a different base

// O(log(n)) time | O(1) space
function sumBase2(n, k) {
  let sum = 0

  while (n > 0) {
    sum += n % k // add the remainder
    n = Math.floor(n / k) // update n to the quotient
  }

  return sum
}

// ----------------------
// TESTS

// 1
console.log(sumBase(34, 6)) // 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

// 2
console.log(sumBase2(34, 6)) // 9
