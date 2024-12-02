// * Find Greatest Common Divisor of Array

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(1) space
function findGCD(nums) {
  let smallest = Math.min(...nums)
  let largest = Math.max(...nums)
  let divisor = 1

  for (let i = 1; i <= smallest; i++) {
    if (smallest % i === 0 && largest % i === 0) {
      divisor = i
    }
  }

  return divisor
}

// -------------------------
// TESTS

console.log(findGCD([2, 5, 6, 9, 10])) // 2
/*
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
*/
console.log(findGCD([7, 5, 6, 8, 3])) // 1
console.log(findGCD([3, 3])) // 3
