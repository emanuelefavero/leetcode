// * Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//  You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]

    if (map.has(difference)) return [map.get(difference), i]

    map.set(nums[i], i)
  }
}

// -----------------------------
// TESTS

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
