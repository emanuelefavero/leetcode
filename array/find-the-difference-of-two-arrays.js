// * Find the Difference of Two Arrays

/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[][]}
 */

// O(n) time | O(n) space
function findDifference(nums1, nums2) {
  const set1 = new Set([...nums1])
  const set2 = new Set([...nums2])
  const result1 = []
  const result2 = []

  set1.forEach((num) => {
    if (!set2.has(num)) result1.push(num)
  })

  set2.forEach((num) => {
    if (!set1.has(num)) result2.push(num)
  })

  return [result1, result2]
}

// -------------------------
// TESTS

console.log(findDifference([1, 2, 3], [2, 4, 6])) // [[1, 3], [4, 6]]
