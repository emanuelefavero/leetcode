// * 3Sum

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/**
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */

// O(n^2) time | O(n) space
function threeSum(nums) {
  const result = []
  const length = nums.length

  nums.sort((a, b) => a - b) // Sort the array to use two-pointer technique

  for (let i = 0; i < length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // Two-pointer approach
    let left = i + 1
    let right = length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum > 0) {
        right-- // Move the right pointer to the left to decrease the sum
      } else if (sum < 0) {
        left++ // Move the left pointer to the right to increase the sum
      } else {
        // Found a triplet, add it to the result
        result.push([nums[i], nums[left], nums[right]])

        // Move both pointers to find the next potential triplet
        left++
        right--

        // Skip duplicates for the second element
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      }
    }
  }

  return result
}

// -------------------------
// TESTS

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
/* Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

console.log(threeSum([0, 1, 1])) // []
// Explanation: The only possible triplet does not sum up to 0.

console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]
// Explanation: The only possible triplet sums up to 0.
