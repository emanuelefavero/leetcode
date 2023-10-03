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

// TIP: This solution is more efficient time-wise by 98% and about the same memory-wise

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
// TESTS

let nums = [3, 1, 2, 2, 4, 6, 5]
console.log(thirdMax(nums)) // 4
console.log(thirdMax2(nums)) // 4
