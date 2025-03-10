// * Construct the Minimum Bitwise Array I

/*
You are given an array nums consisting of n prime integers.

You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].

Additionally, you must minimize each value of ans[i] in the resulting array.

If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(1) space
function minBitwiseArray(nums) {
  let ans = []

  for (let n of nums) {
    let num = n
    let ones = 0

    // Count the number of 1s (if the number is odd, it will have 1s)
    while (num > 0 && num % 2 === 1) {
      ones += 1
      num >>= 1 // right shift, equivalent to Math.floor(num / 2)
    }

    if (ones === 0) {
      ans.push(-1)
      continue
    }

    // The smallest number that satisfies the condition is n - 2^(ones - 1)
    ans.push(n - 2 ** (ones - 1))
  }

  return ans
}

// ----------------------
// TESTS

console.log(minBitwiseArray([2, 3, 5, 7])) // [-1,1,4,3]
/*
Explanation:

- For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
- For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
- For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
- For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.
*/
