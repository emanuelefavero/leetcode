// * Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//  You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

// O(n)
function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (map.has(difference)) return [map.get(difference), i]

    map.set(nums[i], i)
  }
}

// -----------------------------
// SOLUTION 2

// O(n)
function twoSum2(nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (map[difference] !== undefined) return [map[difference], i]

    map[nums[i]] = i
  }
}

// -----------------------------
// SOLUTION 3

// TIP: This solution is not recommended because it has a time complexity of O(n^2) but it is a good solution to know for interviews

// O(n^2)
function twoSum3(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // ?     j = i + 1 because we don't want to use the same element twice
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

// -----------------------------
// TESTS

// 1
console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]

// 2
console.log(twoSum2([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum2([3, 2, 4], 6)) // [1, 2]

// 3
console.log(twoSum3([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum3([3, 2, 4], 6)) // [1, 2]
