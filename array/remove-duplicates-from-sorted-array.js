/**
 * * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums
 *
 * TIP: This solution is more efficient than others but only works for sorted arrays (where duplicates are next to each other)
 *
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(1) space
function removeDuplicates(nums) {
  let index = 1 // index of the next unique number

  for (let i = 0; i < nums.length - 1; i++) {
    // if the current number is not equal to the next number, then the next number is unique
    if (nums[i] !== nums[i + 1]) {
      // move the next unique number to the previous unique number's index
      nums[index] = nums[i + 1]
      index++
    }
  }

  // return the number of unique numbers (the index of the next unique number)
  return index
}

// -------------------------
// TESTS

let nums = [1, 1, 2]
console.log(removeDuplicates(nums)) // 2
console.log(nums) // [1, 2]
