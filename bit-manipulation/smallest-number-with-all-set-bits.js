// * Smallest Number With All Set Bits

// You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits (a set bit refers to a bit in the binary representation of a number that has a value of 1)

/**
 * @param {number} n
 * @returns {number}
 */

// O(n) time | O(1) space
function smallestNumber(n) {
  while (true) {
    const binary = n.toString(2)
    if (!binary.includes('0')) return n
    n++
  }
}

// ----------------------
// SOLUTION 2

// TIP: This solution is based on the fact that the smallest number with all set bits is 2^x - 1 (e.g. 1, 3, 7, 15, ...). We can find the smallest number with all set bits greater than or equal to n by finding the smallest power of 2 greater than or equal to n and subtracting 1 from it.

function smallestNumber2(n) {
  let x = 2

  while (x <= n) {
    x *= 2 // ? *= 2 is equivalent to x = x * 2
  }

  return x - 1
}

// ----------------------
// TESTS

// 1
console.log(smallestNumber(5)) // 7
// Explanation: The binary representation of 7 is "111"
console.log(smallestNumber(10)) // 15
// Explanation: The binary representation of 15 is "1111"

// 2
console.log(smallestNumber2(5)) // 7
console.log(smallestNumber2(10)) // 15
