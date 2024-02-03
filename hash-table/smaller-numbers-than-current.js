// * How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array

// NOTE: This problem was in the hash-table section because it could be solved using a hash table, but most solutions use a brute force approach

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// TODO link to README

// O(n^2) time | O(n) space
function smallerNumbersThanCurrent(nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0

    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) count++
    }

    result.push(count)
  }

  return result
}

// -----------------------------
// TESTS

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])) // [4, 0, 1, 1, 3]
