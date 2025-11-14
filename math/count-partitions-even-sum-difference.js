// * Count Partitions with Even Sum Difference

/*
You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

- Left subarray contains indices [0, i].
- Right subarray contains indices [i + 1, n - 1].

Return the number of partitions where the difference between the sum of the left and right subarrays is even.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n^2) time | O(n) space
function countPartitions(nums) {
  let count = 0

  for (let i = 1; i < nums.length; i++) {
    const left = nums.slice(0, i)
    const right = nums.slice(i)

    const leftSum = left.reduce((num, acc) => num + acc, 0)
    const rightSum = right.reduce((num, acc) => num + acc, 0)

    if (Math.abs(leftSum - rightSum) % 2 === 0) count++
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: We can also solve the problem without creating subarrays by calculating the sum of the left and right subarrays on the fly

// O(n) time | O(1) space
function countPartitions2(nums) {
  let count = 0
  let leftSum = 0
  let rightSum = nums.reduce((num, acc) => num + acc, 0)

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i]
    rightSum -= nums[i] // subtract the current element from the right sum

    if (Math.abs(leftSum - rightSum) % 2 === 0) count++
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countPartitions([10, 10, 3, 7, 6])) // 4
/*
Explanation:

The 4 partitions are:

[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
*/

// 2
console.log(countPartitions2([10, 10, 3, 7, 6])) // 4
