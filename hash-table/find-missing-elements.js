// * Find Missing Elements

/*
You are given an integer array nums consisting of unique integers.

Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.

The smallest and largest integers of the original range are still present in nums.

Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function findMissingElements(nums) {
  nums.sort((a, b) => a - b)
  const length = nums.length
  const set = new Set()
  const smallest = nums[0]
  const largest = nums[length - 1]
  const result = []

  // Add all numbers to the set
  for (const num of nums) {
    set.add(num)
  }

  // Check for missing numbers in the range
  for (let i = smallest; i <= largest; i++) {
    if (!set.has(i)) result.push(i)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(1) space
function findMissingElements2(nums) {
  nums.sort((a, b) => a - b)
  const min = nums[0]
  const max = nums[nums.length - 1]
  const result = []

  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) result.push(i)
  }

  return result
}

// -----------------------------
// SOLUTION 2

function findMissingElements3(nums) {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const result = []

  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) result.push(i)
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(findMissingElements([1, 4, 2, 5])) // [3]
// Explanation: The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. Among these, only 3 is missing.
console.log(findMissingElements([7, 8, 6, 9])) // []

// 2
console.log(findMissingElements([1, 4, 2, 5])) // [3]
console.log(findMissingElements([7, 8, 6, 9])) // []

// 3
console.log(findMissingElements([1, 4, 2, 5])) // [3]
console.log(findMissingElements([7, 8, 6, 9])) // []
