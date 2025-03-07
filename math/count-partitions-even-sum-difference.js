// * Count Partitions with Even Sum Difference

/*
You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

- Left subarray contains indices [0, i].
- Right subarray contains indices [i + 1, n - 1].

Return the number of partitions where the difference between the sum of the left and right subarrays is even.
*/

function countPartitions(nums) {
  let count = 0

  for (let i = 1; i < nums.length; i++) {
    let left = nums.slice(0, i)
    let right = nums.slice(i)

    let leftSum = left.reduce((num, acc) => num + acc, 0)
    let rightSum = right.reduce((num, acc) => num + acc, 0)

    if (Math.abs(leftSum - rightSum) % 2 === 0) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(countPartitions([10, 10, 3, 7, 6])) // 4
/*
Explanation:

The 4 partitions are:

[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
*/
