// * Minimum Element After Replacement With Digit Sum

// You are given an integer array nums.

// You replace each element in nums with the sum of its digits.

// Return the minimum element in nums after all replacements.

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n log n) time | O(1) space
function minElement(nums) {
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i]
      .toString()
      .split('')
      .reduce((acc, num) => acc + parseInt(num), 0)

    nums[i] = sum
  }

  nums.sort((a, b) => a - b)
  return nums[0]
}

// -----------------------
// SOLUTION 2

// TIP: We can avoid sorting the array by keeping track of the minimum element while iterating through the array

// O(n) time | O(1) space
function minElement2(nums) {
  let result = Infinity

  for (const num of nums) {
    const sum = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0)

    result = Math.min(result, sum)
  }

  return result
}

// -----------------------
// TESTS

// 1
console.log(minElement([10, 12, 13, 14])) // 1
// Explanation: nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1

// 2
console.log(minElement([10, 12, 13, 14])) // 1
