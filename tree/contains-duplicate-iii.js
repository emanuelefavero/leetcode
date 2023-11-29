// * Contains Duplicate III

/*
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.
*/

// TIP: This is a brute force solution (inefficient)

function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + indexDiff; j++) {
      if (Math.abs(nums[i] - nums[j]) <= valueDiff) return true
    }
  }
  return false
}

// -----------------------------
// SOLUTION 2

// TIP: This is a more efficient solution using bucket sort (it also can be solved using BST, but the code is more complex)
// TIP: Bucket sort, also known as bin sort, is a sorting algorithm that divides an array's elements into several buckets. The buckets are then sorted one at a time, either using a different sorting algorithm or by recursively applying the bucket sorting algorithm
// @see https://www.geeksforgeeks.org/bucket-sort-2

function containsNearbyAlmostDuplicate2(nums, indexDiff, valueDiff) {
  let buckets = new Map()

  for (let i = 0; i < nums.length; i++) {
    // get bucket number
    let bucket = Math.floor(nums[i] / (valueDiff + 1))

    // check if bucket already exists
    if (buckets.has(bucket)) return true

    // check if adjacent buckets have values
    if (
      buckets.has(bucket - 1) &&
      Math.abs(nums[i] - buckets.get(bucket - 1)) <= valueDiff
    )
      return true

    // check if adjacent buckets have values
    if (
      buckets.has(bucket + 1) &&
      Math.abs(nums[i] - buckets.get(bucket + 1)) <= valueDiff
    )
      return true

    // add value to bucket
    buckets.set(bucket, nums[i])

    // remove value from bucket if it's out of range
    if (i >= indexDiff)
      buckets.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)))
  }

  return false
}

// -----------------------------
// TESTS

// 1
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)) // true
/*
EXPLANATION: 
We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
*/

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)) // false
// EXPLANATION: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

// 2
console.log(containsNearbyAlmostDuplicate2([1, 2, 3, 1], 3, 0)) // true
console.log(containsNearbyAlmostDuplicate2([1, 5, 9, 1, 5, 9], 2, 3)) // false
