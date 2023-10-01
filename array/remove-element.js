// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums, val) {
  let i = 0

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }

  return nums.length
}

// -------------------------
// TESTS

let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val)) // 1
console.log(nums) // [2, 2]
