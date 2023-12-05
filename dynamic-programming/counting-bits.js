/**
 * * Counting Bits
 *
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i
 *
 * @param {number} n
 * @returns {number[]}
 */

// TIP: This is not a dynamic programming problem but it os one of the top answers on LeetCode

// O(n) time | O(n) space
function countBits(n) {
  let ans = []

  for (let i = 0; i <= n; i++) {
    let binary = i.toString(2)
    let count = 0

    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === '1') count++
    }

    ans.push(count)
  }

  return ans
}

// -----------------------------
// TESTS

// 1
console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]
