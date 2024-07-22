// * Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

/**
 * @param {number} n
 * @returns {boolean}
 */

// O(log3(n)) time | O(1) space
function isPowerOfThree(n) {
  while (n > 1) n /= 3
  return n === 1
}

// -------------------------
// SOLUTION 2

// TIP: Recursive solution

function isPowerOfThree2(n) {
  if (n === 1) return true
  if (n < 1) return false

  return isPowerOfThree(n / 3)
}

// -------------------------
// TESTS

// 1
console.log(isPowerOfThree(27)) // true, 27 = 3^3
console.log(isPowerOfThree(0)) // false, there is no x such that 0 == 3^x
console.log(isPowerOfThree(-1)) // false, there is no x where 3x = (-1)

// 2
console.log(isPowerOfThree2(27)) // true
console.log(isPowerOfThree2(0)) // false
console.log(isPowerOfThree2(-1)) // false
