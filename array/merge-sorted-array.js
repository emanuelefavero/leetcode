/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */

// O(n log n) time | O(1) space
function merge(nums1, m, nums2, n) {
  let i = m // Start at the end of nums1
  j = 0 // Start at the beginning of nums2

  while (i < m + n) {
    nums1[i] = nums2[j] // Add the element from nums2 to nums1
    i++
    j++
  }

  // Sort nums1
  nums1.sort((a, b) => a - b)
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(1) space
function merge2(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}

// -----------------------------
// TESTS

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

merge(nums1, m, nums2, n)
console.log(nums1) // [1, 2, 2, 3, 5, 6]
