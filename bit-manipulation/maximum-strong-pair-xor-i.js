// * Maximum Strong Pair XOR I

/*
You are given a 0-indexed integer array nums. A pair of integers x and y is called a strong pair if it satisfies the condition:

- |x - y| <= min(x, y)

You need to select two integers from nums such that they form a strong pair and their bitwise XOR is the maximum among all strong pairs in the array.

Return the maximum XOR value out of all possible strong pairs in the array nums.

Note that you can pick the same integer twice to form a pair.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// TIP: A strong pair is a pair of integers such that the absolute difference between them is less than or equal to the minimum of the two integers

// O(n^2) time | O(1) space
function maximumStrongPairXor(nums) {
  let max = 0

  for (let x of nums) {
    for (let y of nums) {
      // Check if x and y form a strong pair
      if (Math.abs(x - y) <= Math.min(x, y)) {
        max = Math.max(max, x ^ y) // update max
      }
    }
  }

  return max
}

// -----------------------------
// TESTS

console.log(maximumStrongPairXor([1, 2, 3, 4, 5])) // 7
/*
Explanation: There are 11 strong pairs in the array nums: (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5) and (5, 5).
The maximum XOR possible from these pairs is 3 XOR 4 = 7.
*/
