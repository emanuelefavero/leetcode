/**
 * * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. (in-place)
 *
 * @param {number[]} nums
 */

// TIP: This first solution is probably more readable and is faster memory-wise

// O(n) time | O(1) space - in-place
function moveZeroes(nums) {
  let numberOfZeroes = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      numberOfZeroes++
    }
  }

  for (let i = 0; i < numberOfZeroes; i++) {
    nums.push(0)
  }
}

// -------------------------
// SOLUTION 2

// TIP: This second solution is slightly faster and uses the two-pointer technique

// O(n) time | O(1) space - in-place
function moveZeroes2(nums) {
  let writePointer = 0

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[writePointer] = nums[readPointer]
      writePointer++
    }
  }

  // fill the rest of the array with 0's
  for (let i = writePointer; i < nums.length; i++) {
    nums[i] = 0
  }
}

// -------------------------
// TESTS

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums) // [1, 3, 12, 0, 0]
