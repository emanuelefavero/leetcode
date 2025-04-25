// * Minimum Operations to Make Array Sum Divisible by K

/*
You are given an integer array nums and an integer k. You can perform the following operation any number of times:

- Select an index i and replace nums[i] with nums[i] - 1.

Return the minimum number of operations required to make the sum of the array divisible by k.
*/

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
// TESTS

console.log(minOperations([3, 9, 7], 5)) // 4
/* Explanation:
Perform 4 operations on nums[1] = 9. Now, nums = [3, 5, 7].
The sum is 15, which is divisible by 5.
*/
