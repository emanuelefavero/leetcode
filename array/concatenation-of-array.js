// * Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

function getConcatenation(nums) {
  return [...nums, ...nums]
}

// ---------------------------------------------------
// SOLUTION 2

function getConcatenation2(nums) {
  return nums.concat(nums)
}

// ---------------------------------------------------
// SOLUTION 3
function getConcatenation3(nums) {
  nums.push(...nums)
  return nums
}

// ---------------------------------------------------
// TESTS

// 1
console.log(getConcatenation([1, 2, 1])) // [1,2,1,1,2,1]

// 2
console.log(getConcatenation2([1, 3, 2, 1])) // [1,3,2,1,1,3,2,1]

// 3
console.log(getConcatenation3([1, 2, 1])) // [1,2,1,1,2,1]
