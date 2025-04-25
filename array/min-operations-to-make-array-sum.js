// * Minimum Operations to Make Array Sum Divisible by K

/*
You are given an integer array nums and an integer k. You can perform the following operation any number of times:

- Select an index i and replace nums[i] with nums[i] - 1.

Return the minimum number of operations required to make the sum of the array divisible by k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

// O(n) time | O(1) space
function minOperations(nums, k) {
  let sum = nums.reduce((num, acc) => num + acc, 0)

  let count = 0

  while (sum % k !== 0) {
    count++
    sum--
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: We can also solve the problem using the remainder

function minOperations2(nums, k) {
  let sum = nums.reduce((num, acc) => num + acc, 0)
  let remainder = sum % k
  return remainder
}

// -------------------------
// SOLUTION 3

// TIP: This is a one liner solution

function minOperations3(nums, k) {
  return nums.reduce((num, acc) => num + acc, 0) % k
}

// -------------------------
// TESTS

// 1
console.log(minOperations([3, 9, 7], 5)) // 4
/* Explanation:
Perform 4 operations on nums[1] = 9. Now, nums = [3, 5, 7].
The sum is 15, which is divisible by 5.
*/

// 2
console.log(minOperations2([3, 9, 7], 5)) // 4

// 3
console.log(minOperations3([3, 9, 7], 5)) // 4
