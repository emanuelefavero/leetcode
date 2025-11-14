// * Left and Right sum Differences

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
  const result = []

  let left = 0
  let right = nums.length - 1
  let leftSum = 0
  let rightSum = 0
  const leftArray = []
  const rightArray = []

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
// SOLUTION 2

// O(n) time | O(n) space
function leftRightDifference2(nums) {
  let leftSum = 0

  // Find sum of all elements and assign it to rightSum
  let rightSum = nums.reduce((sum, num) => (sum += num), 0)

  // Iterate through nums array and calculate leftSum and rightSum
  return nums.map((num) => {
    rightSum -= num
    const result = Math.abs(leftSum - rightSum) // Calculate difference
    leftSum += num

    return result
  })
}

// -----------------------------
// TESTS

// 1
console.log(leftRightDifference([10, 4, 8, 3])) // [15,1,11,22]

// 2
console.log(leftRightDifference2([10, 4, 8, 3])) // [15,1,11,22]
