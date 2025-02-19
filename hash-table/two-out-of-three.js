// * Two Out of Three

// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

// TODO jsDoc
// TODO link to README
// TODO solution 2 (with hash table or set)

// TIP: We can use the constraint that the values are between 1 and 100 to loop through all the values and check if they are present in at least two arrays

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
// TESTS

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])) // [3,2]

/* Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
*/
