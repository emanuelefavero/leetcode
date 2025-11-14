// * XOR Operation in an Array

/*
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.
*/

/**
 * @param {number} n
 * @param {number} start
 * @returns {number}
 */

// O(n) time | O(n) space
function xorOperation(n, start) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i)
  }
  return arr.reduce((acc, curr) => acc ^ curr)
}

// ----------------------
// SOLUTION 2

// TIP: This solution does not use an array to store the values of nums and it is more efficient

// O(n) time | O(1) space
function xorOperation2(n, start) {
  let result = 0

  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i
  }

  return result
}

// ----------------------
// TESTS

// 1
console.log(xorOperation(5, 0)) // 8
console.log(xorOperation(4, 3)) // 8
/*
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.
*/

// 2
console.log(xorOperation2(5, 0)) // 8
console.log(xorOperation2(4, 3)) // 8
