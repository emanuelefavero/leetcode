// * Find the Integer Added to Array I

/*
You are given two arrays of equal length, nums1 and nums2.

Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer x.
*/

// TIP: We sort the arrays to get the smallest number in each array. Then we subtract the smallest number in nums1 from the smallest number in nums2. This will give us the integer that was added to each element in nums1 to get nums2 at each index.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */

// O(n log n) time | O(1) space
function addedInteger(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  return nums2[0] - nums1[0]
}

// -------------------------
// TESTS

console.log(addedInteger([2, 6, 4], [9, 7, 5])) // 3
// Explanation: The integer added to each element of nums1 is 3.
console.log(addedInteger([10], [5])) // -5
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])) // 0
