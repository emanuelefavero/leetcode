/**
 * Loop through each element in array and find if there is another value that equals to target - array[i]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n)
function twoSum(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    // if the map has the complement, return the key of the complement and the current index
    if (map.has(complement)) return [map.get(complement), i]

    // if the map does not have the complement, add the current number and its index to the map
    map.set(nums[i], i)
  }
}

// --------------------------
// SOLUTION 2 - same but using object instead of map

function twoSum2(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    // NOTE: We need to check if the value is undefined when using object
    if (map[complement] !== undefined) return [map[complement], i]

    map[nums[i]] = i
  }
}

// --------------------------
// TESTS

console.log(twoSum([2, 3, 4, 5], 6))
// OUTPUT: [0, 2] - returns the key of 2, 4

console.log(twoSum2([2, 3, 4, 5], 6)) // [0, 2]
