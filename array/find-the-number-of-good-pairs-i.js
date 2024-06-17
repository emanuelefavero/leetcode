// * Find the Number of Good Pairs I

// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

function numberOfPairs(nums1, nums2, k) {
  let count = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        count++
      }
    }
  }

  return count
}

// -------------------------
// TESTS

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1)) // 5
