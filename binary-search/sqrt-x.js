/**
 * * Sqrt(x)
 *
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well
 * @param {number} x
 * @returns {number}
 */

// O(n) time | O(1) space
function mySqrt(x) {
  let i = 0

  while (i * i <= x) {
    i++
  }

  return i - 1
}

// -------------------------
// SOLUTION 2

// O(log n) time | O(1) space
function mySqrt2(x) {
  let left = 0
  let right = x

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    // Check if middle is the square root
    if (middle * middle <= x && (middle + 1) * (middle + 1) > x) {
      return middle

      // TIP: Why do we also need to check if (middle + 1) * (middle + 1) > x?
      // Because if we don't, we will get an infinite loop.
    }

    if (middle * middle > x) right = middle - 1
    else left = middle + 1
  }
}

// -------------------------
// SOLUTION 3

// TIP: This solution uses built in methods to solve the problem

// O(1) time | O(1) space
function mySqrt3(x) {
  return Math.floor(Math.sqrt(x))
}

// -------------------------
// TESTS

// Solution 1
console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned

// Solution 2
console.log(mySqrt2(4)) // 2
console.log(mySqrt2(8)) // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned

// Solution 3
console.log(mySqrt3(4)) // 2
console.log(mySqrt3(8)) // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned
