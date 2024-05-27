// * Find the Integer Added to Array I

/*
You are given two arrays of equal length, nums1 and nums2.

Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer x.
*/

function addedInteger(nums1, nums2) {
  let sum1 = nums1.reduce((a, b) => a + b, 0)
  let sum2 = nums2.reduce((a, b) => a + b, 0)

  return (sum2 - sum1) / nums1.length
}

// -------------------------
// TESTS

console.log(addedInteger([2, 6, 4], [9, 7, 5])) // 3
// Explanation: The integer added to each element of nums1 is 3.

console.log(addedInteger([10], [5])) // -5
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])) // 0
