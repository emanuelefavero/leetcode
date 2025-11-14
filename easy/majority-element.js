// * Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time complexity
function majorityElement(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    if (!map.has(current)) {
      map.set(current, 1)
    } else {
      map.set(current, map.get(current) + 1)
    }
  }

  for (const [key, value] of map) {
    if (value > nums.length / 2) return key
  }
}

// -----------------------------
// SOLUTION 2

// TIP: This solution is i O(1) space complexity, but is less readable

function majorityElement2(nums) {
  let candidate = null
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    // If the count is 0, the current number is the candidate
    if (count === 0) {
      candidate = nums[i]
    }

    // If the current number is the candidate, increment the count, otherwise decrement it
    if (nums[i] === candidate) {
      count++
    } else {
      count--
    }
  }

  return candidate
}

// -----------------------------
// TESTS

// 1
console.log(majorityElement([3, 2, 3])) // 3
// Explanation: 3 appears twice in nums and the length of nums / 2 is 1

// 2
console.log(majorityElement2([3, 2, 3])) // 3
