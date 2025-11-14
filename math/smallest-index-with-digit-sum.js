// * Smallest Index With Digit Sum Equal to Index

// You are given an integer array nums.

// Return the smallest index i such that the sum of the digits of nums[i] is equal to i.

// If no such index exists, return -1.

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n * m) time | O(1) space, where n is the length of nums and m is the maximum number of digits in any number in nums
function smallestIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    const digits = nums[i].toString().split('')
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0)

    if (sum === i) return sum
  }

  return -1
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses the remainder operator to get the last digit of the number and the floor division to remove the last digit

function smallestIndex2(nums) {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0

    while (nums[i] > 0) {
      sum += nums[i] % 10 // Get the last digit
      nums[i] = Math.floor(nums[i] / 10) // Remove the last digit
    }

    if (sum === i) return i
  }

  return -1
}

// -------------------------
// TESTS

// 1
console.log(smallestIndex([1, 3, 2])) // 2
// Explanation: For nums[2] = 2, the sum of digits is 2, which is equal to index i = 2. Thus, the output is 2.
console.log(smallestIndex([1, 10, 11])) // 1
console.log(smallestIndex([1, 2, 3])) // -1

// 2
console.log(smallestIndex2([1, 3, 2])) // 2
console.log(smallestIndex2([1, 10, 11])) // 1
console.log(smallestIndex2([1, 2, 3])) // -1
