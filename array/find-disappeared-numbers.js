// Find All Numbers Disappeared in an Array

/**
 * * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

// -------------------------
// SOLUTION 1

// O(n) time | O(n) space
function findDisappearedNumbers(nums) {
  let hashTable = {}

  // Populate hash table (remove duplicates)
  for (let num of nums) {
    if (!hashTable[num]) hashTable[num] = true
  }

  // Find missing numbers by looping up to nums.length and checking if the number exists in the hash table
  let result = []
  for (let i = 1; i < nums.length; i++) {
    if (!hashTable[i]) result.push(i)
  }

  return result
}

// -------------------------
// TESTS

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
