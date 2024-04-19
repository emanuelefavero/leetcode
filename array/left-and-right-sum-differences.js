// * Left and Right Sum Differences

/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.
*/

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function leftRightDifference(nums) {
  let result = []

  let left = 0
  let right = nums.length - 1
  let leftSum = 0
  let rightSum = 0
  let leftArray = []
  let rightArray = []

  while (left < nums.length) {
    leftArray.push(leftSum)
    rightArray.push(rightSum)

    leftSum += nums[left]
    rightSum += nums[right]

    left++
    right--
  }

  rightArray.reverse()

  for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftArray[i] - rightArray[i]))
  }

  return result
}

// -----------------------------
// TESTS

console.log(leftRightDifference([10, 4, 8, 3])) // [15,1,11,22]
