// * Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

/**
 * @param {number} n
 * @returns {number[]}
 */

// O(n) time | O(n) space
function sumZero(n) {
  let result = []

  // If n is odd, add 0 to the result array
  if (n % 2 !== 0) result.push(0)

  // Add positive and negative numbers of the same value to the result array
  for (let i = 1; i <= n / 2; i++) {
    result.push(i, -i)
  }

  return result
}

// -------------------------
// TESTS

console.log(sumZero(5)) // [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
