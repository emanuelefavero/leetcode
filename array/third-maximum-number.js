/**
 * * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number
 *
 * @param {number[]} nums
 * @returns {number}
 */

// -------------------------
// SOLUTION 1

// TIP: This solution is easy to understand but is not very efficient memory-wise

// O(n log n) time | O(n) space
function thirdMax(nums) {
  let set = new Set(nums) // remove duplicates
  let result = [...set] // convert set to array
  result.sort((a, b) => a - b) // sort result array

  // return third max if it exists, otherwise return max
  if (result.length >= 3) return result[result.length - 3]
  else return result[result.length - 1]
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient time-wise by 98% and about the same as solution 1 memory-wise

// O(n) time | O(1) space
function thirdMax2(nums) {
  let first = -Infinity
  let second = -Infinity
  let third = -Infinity

  for (let num of nums) {
    if (num > first) {
      third = second
      second = first
      first = num
    } else if (num > second && num < first) {
      third = second
      second = num
    } else if (num > third && num < second) {
      third = num
    }
  }

  if (third === -Infinity) return first
  else return third
}

// -------------------------
// SOLUTION 3

// TIP: This solution is more efficient than 85% memory-wise

function thirdMax3(nums) {
  nums.sort((a, b) => b - a) // sort in descending order
  let index = 1 // keep track of the index to find the third max
  let prev = nums[0] // keep track of the previous number

  for (let i = 1; i < nums.length; i++) {
    // if the current number is not equal to the previous number, increment the index
    if (nums[i] !== prev) {
      index++
      prev = nums[i] // update the previous number
    }

    // if we are at the third distinct number, return it
    if (index === 3) return nums[i]
  }

  return nums[0] // if there is no third max, return the max
}

// -------------------------
// TESTS

let nums = [3, 1, 2, 2, 4, 6, 5]
console.log(thirdMax(nums)) // 4
console.log(thirdMax2(nums)) // 4
console.log(thirdMax3(nums)) // 4
