// * The Two Sneaky Numbers of Digitville

/*
In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function getSneakyNumbers(nums) {
  const set = new Set()
  const result = []

  for (const num of nums) {
    if (set.has(num)) result.push(num)
    else set.add(num)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses a map instead of a set

function getSneakyNumbers2(nums) {
  const map = new Map()
  const result = []

  for (const num of nums) {
    if (map.has(num)) result.push(num)
    else map.set(num, true)
  }

  return result
}

// -----------------------------
// SOLUTION 3

// TIP: You can also sort the array and then compare the current number with the next one

// O(n log n) time | O(n) space
function getSneakyNumbers3(nums) {
  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) result.push(nums[i])
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(getSneakyNumbers([0, 1, 1, 0])) // [0, 1]
// Explanation: The numbers 0 and 1 each appear twice in the array

// 2
console.log(getSneakyNumbers2([0, 1, 1, 0])) // [0, 1]

// 3
console.log(getSneakyNumbers3([0, 1, 1, 0])) // [0, 1]
