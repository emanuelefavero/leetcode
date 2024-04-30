// * Difference Between Element Sum and Digit Sum of an Array

/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n + m) time | O(1) space, where n is the number of elements in nums and m is the number of digits in nums
function differenceOfSum(nums) {
  let elementSum = 0
  let digitSum = 0

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i]

    let stringNum = nums[i].toString()
    for (let j = 0; j < stringNum.length; j++) {
      digitSum += parseInt(stringNum[j])
    }
  }

  return Math.abs(elementSum - digitSum)
}

console.log(differenceOfSum([1, 15, 6, 3])) // 9
/*
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
*/
