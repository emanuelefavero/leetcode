/**
 * * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */

// O(n) time | O(n) space
function intersect(nums1, nums2) {
  const map = new Map()

  // fill the map with the elements of nums1
  for (const num of nums1) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }

  // loop through nums2 and check if the current element is in the map
  const result = []
  for (const num of nums2) {
    // if the current element is in the map and the value is greater than 0, add it to the result
    if (map.has(num) && map.get(num) > 0) {
      result.push(num)
      map.set(num, map.get(num) - 1) // decrement the value because we already added it to the result
    }
  }

  return result
}

// -------------------------------
// SOLUTION 2

// TIP: This solution is more memory efficient but slower

// O(n^2) time | O(n) space
function intersect2(nums1, nums2) {
  const result = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i])
        // remove the element from nums2 to avoid duplicates
        nums2.splice(j, 1)
        break // break the inner loop
      }
    }
  }

  return result
}

// -------------------------------
// TESTS

// Solution 1
console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]

// Solution 2
console.log(intersect2([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect2([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]
