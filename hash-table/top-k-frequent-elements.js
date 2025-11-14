/**
 * * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */

// O(n log n) time | O(n) space
function topKFrequent(nums, k) {
  const map = new Map()
  const result = []

  // loop through nums and add each element to map
  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }

  // convert map to sorted array
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

  // loop from 0 to k
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0])
  }

  return result
}

// --------------------------
// TESTS

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
