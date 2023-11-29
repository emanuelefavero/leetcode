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
// TESTS

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
