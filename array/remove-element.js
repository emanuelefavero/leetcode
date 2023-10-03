/**
 * * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */

// O(n) time | O(1) space
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i-- // to account for the change in length when splicing
    }
  }

  return nums.length
}

// -------------------------
// TESTS

let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val)) // 2
console.log(nums) // [2, 2]
