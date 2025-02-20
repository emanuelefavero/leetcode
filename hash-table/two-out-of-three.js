// * Two Out of Three

// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @returns
 */

// TIP: We can use the constraint that the values are between 1 and 100 to loop through all the values and check if they are present in at least two arrays

// O(n) time | O(1) space
function twoOutOfThree(nums1, nums2, nums3) {
  let result = []

  for (let i = 1; i <= 100; i++) {
    if (nums1.includes(i) && nums2.includes(i)) result.push(i)
    else if (nums2.includes(i) && nums3.includes(i)) result.push(i)
    else if (nums3.includes(i) && nums1.includes(i)) result.push(i)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses a set to store the values that are present in each array and then checks if the value is present in at least two sets

function twoOutOfThree2(nums1, nums2, nums3) {
  let result = []
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let set3 = new Set(nums3)

  for (let num of set1) {
    if (set2.has(num) || set3.has(num)) {
      result.push(num)
    }
  }

  for (let num of set2) {
    // NOTE: We also have to check if the value is already in the result array to avoid duplicates
    if ((set1.has(num) || set3.has(num)) && !result.includes(num)) {
      result.push(num)
    }
  }
  return result
}

// -----------------------------
// TESTS

// 1
console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])) // [3,2]

/* Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
*/

// 2
console.log(twoOutOfThree2([1, 1, 3, 2], [2, 3], [3])) // [3,2]
