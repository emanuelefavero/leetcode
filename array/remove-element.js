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
// SOLUTION 2

function removeElement2(nums, val) {
  let k = 0

  // loop through the array and if the current element is not equal to val, add it to the beginning of the array (increase k only when the current element is not equal to val so that the elements that are equal to val are overwritten)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  nums.length = k // to remove the extra elements

  return nums.length
}

// -------------------------
// TESTS

let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val)) // 2
console.log(nums) // [2, 2]

nums = [3, 2, 2, 3]
val = 3
console.log(removeElement2(nums, val)) // 2
console.log(nums) // [2, 2]
