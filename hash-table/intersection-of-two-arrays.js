/**
 * * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order
 *
 * @param {number[]} nums1
 * @param {number} nums2
 * @returns {number[]}
 */

function intersection(nums1, nums2) {
  let set = new Set(nums1)
  let result = new Set()

  for (let num of nums2) {
    if (set.has(num)) result.add(num)
  }

  return [...result] // convert set to array
}

// -----------------------------
// SOLUTION 2

function intersection2(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let result = []

  for (let num of set1) {
    if (set2.has(num)) result.push(num) // if num is in both sets, push it
  }

  return result
}

// -----------------------------
// TESTS

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4]
console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4]
