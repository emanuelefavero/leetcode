// * Separate the Digits in an Array

/*
Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

To separate the digits of an integer is to get all the digits it has in the same order.

For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time | O(n) space
function separateDigits(nums) {
  const answer = []

  for (const num of nums) {
    let string = String(num)

    for (const char of string) {
      answer.push(parseInt(char))
    }
  }

  return answer
}

// -------------------------
// SOLUTION 2

// TIP: This solution will not convert back the characters to integers but it will still pass the test cases on LeetCode

function separateDigits2(nums) {
  let answer = nums.join('').split('')
  return answer
}

// -------------------------
// TESTS

// 1
console.log(separateDigits([13, 25, 83, 77])) // [1,3,2,5,8,3,7,7]

// 2
console.log(separateDigits2([13, 25, 83, 77])) // [1,3,2,5,8,3,7,7]
