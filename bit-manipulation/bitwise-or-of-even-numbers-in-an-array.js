// * Bitwise OR of Even Numbers in an Array

// You are given an integer array nums.

// Return the bitwise OR of all even numbers in the array.

// If there are no even numbers in nums, return 0.

function evenNumberBitwiseORs(nums) {
  let result = 0

  for (const num of nums) {
    if (num % 2 === 0) result |= num
  }

  return result
}

// ----------------------
// SOLUTION 2

function evenNumberBitwiseORs2(nums) {
  return nums.reduce((acc, num) => (num % 2 === 0 ? acc | num : acc), 0)
}

// ----------------------
// TESTS

// 1
console.log(evenNumberBitwiseORs([1, 2, 3, 4, 5, 6])) // 6
// Explanation: The even numbers are 2, 4, and 6. Their bitwise OR equals 6.
console.log(evenNumberBitwiseORs([7, 9, 11])) // 0

// 2
console.log(evenNumberBitwiseORs2([1, 2, 3, 4, 5, 6])) // 6
console.log(evenNumberBitwiseORs2([7, 9, 11])) // 0
