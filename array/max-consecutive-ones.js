/**
 * * Given a binary array nums, return the maximum number of consecutive 1's in the array
 *
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(1) space
function findMaxConsecutiveOnes(nums) {
  let max = 0
  let counter = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++
    } else {
      counter = 0
    }

    // if counter is greater than maxValue, set maxValue to counter
    if (counter > max) max = counter
  }

  return max
}

// -------------------------------
// SOLUTION 2

// O(n) time | O(1) space
function findMaxConsecutiveOnes2(nums) {
  let currentSum = 0
  let maxSum = 0

  for (const n of nums) {
    if (n === 1) {
      currentSum++
    } else {
      maxSum = Math.max(maxSum, currentSum)
      currentSum = 0
    }
  }

  maxSum = Math.max(maxSum, currentSum) // in case the last element is 1

  return maxSum
}

// -------------------------------
// SOLUTION 3

// O(n) time | O(n) space
function findMaxConsecutiveOnes3(nums) {
  const result = []
  let consecutiveOnes = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      result.push(consecutiveOnes)
      consecutiveOnes = 0
    } else {
      consecutiveOnes++
    }
  }

  if (nums[nums.length - 1] === 1) result.push(consecutiveOnes)

  return Math.max(...result)
}

// -------------------------------
// TEST CASES

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 0])) // 2
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 0])) // 2
console.log(findMaxConsecutiveOnes3([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes3([1, 1, 0, 1, 1, 0])) // 2
