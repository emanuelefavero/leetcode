/**
 * * Pow(x, n)
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn)
 *
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */

// O(log n) time | O(log n) space
function myPow(x, n) {
  if (n === 0) return 1

  const pow = Math.abs(n) // always return x positive number

  // The following line efficiently divides the problem of exponentiation into smaller sub problems by exploiting the fact that `x^n` can be expressed as `(x^(n/2))^2` when `n` is even, and as `x * (x^(n-1)/2)^2` when `n` is odd
  const result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x

  // If `n` is negative, we invert the result by dividing 1 by it
  return n < 0 ? 1 / result : result
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses the built-in Math.pow() method

// O(log n) time | O(1) space
const myPow2 = (x, n) => Math.pow(x, n)

// ---------------------
// SOLUTION 3

// TIP: This solution uses binary search

function myPow3(x, n) {
  // BASE CASES
  if (n === 0) return 1
  else if (n === 1) return x
  else if (n === -1) return 1 / x
  // If n is even, recursively compute x^(n/2) and square the result
  else if (n % 2 === 0) {
    const result = myPow3(x, n / 2)
    return result * result

    // If n is odd, recursively compute x^((n-1)/2) and square the result
  } else {
    return x * myPow3(x, n - 1)
  }
}

// ---------------------
// TESTS

// 1
// console.log(myPow(2, 10)) // 1024
// console.log(myPow(2, 4)) // 16
// console.log(myPow2(2, 1)) // 2
// console.log(myPow(2.0, -2)) // 0.25

// // 2
// console.log(myPow2(2, 10)) // 1024
// console.log(myPow2(2, 4)) // 16
// console.log(myPow2(2, 1)) // 2
// console.log(myPow2(2.0, -2)) // 0.25

// 3
console.log(myPow3(2, 10)) // 1024
console.log(myPow3(2, 4)) // 16
console.log(myPow3(2, 1)) // 2
console.log(myPow3(2.0, -2)) // 0.25
