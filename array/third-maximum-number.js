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
// TESTS

let nums = [3, 1, 2, 2, 4, 6, 5]
console.log(thirdMax(nums)) // 4
