/**
 * * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */

// O(n) time | O(n) space
function intersect(nums1, nums2) {
  let map = new Map()

  // fill the map with the elements of nums1
  for (let num of nums1) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }

  // loop through nums2 and check if the current element is in the map
  let result = []
  for (let num of nums2) {
    // if the current element is in the map and the value is greater than 0, add it to the result
    if (map.has(num) && map.get(num) > 0) {
      result.push(num)
      map.set(num, map.get(num) - 1) // decrement the value because we already added it to the result
    }
  }

  return result
}

// -------------------------------
// TESTS

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]
