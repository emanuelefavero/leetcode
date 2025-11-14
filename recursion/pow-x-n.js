/**
 * * Pow(x, n)
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn)
 *
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */

// TIP: You can find the same problem in binary-search/pow-x-n.js

function myPow(x, n) {
  // BASE CASES
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x

  // If n is even, recursively compute x^(n/2) and square the result
  if (n % 2 === 0) {
    const result = myPow(x, n / 2)
    return result * result

    // If n is odd, recursively compute x^((n-1)/2) and square the result
  } else {
    return x * myPow(x, n - 1)
  }
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses the built-in Math.pow() method

// O(log n) time | O(1) space
function myPow2(x, n) {
  return Math.pow(x, n)
}

// ---------------------
// TESTS

// 1
console.log(myPow(2, 10)) // 1024
console.log(myPow(2, 4)) // 16
console.log(myPow(2, 1)) // 2
console.log(myPow(2.0, -2)) // 0.25

// 2
console.log(myPow2(2, 10)) // 1024
console.log(myPow2(2, 4)) // 16
console.log(myPow2(2, 1)) // 2
console.log(myPow2(2.0, -2)) // 0.25
