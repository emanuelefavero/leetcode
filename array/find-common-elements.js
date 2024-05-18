// * Find Common Elements Between Two Arrays

/*
You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

Consider calculating the following values:

The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
Return an integer array answer of size 2 containing the two values in the above order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */

// TIP: This is an hash table solution

// O(n + m) time | O(n + m) space
function findIntersectionValues(nums1, nums2) {
  let result = []
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let count1 = 0
  let count2 = 0

  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) count1++
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) count2++
  }

  result[0] = count1
  result[1] = count2

  return result
}

// -------------------------
// TESTS

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]))
// [3, 4]
