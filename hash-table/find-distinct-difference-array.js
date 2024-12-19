// * Find the Distinct Difference Array

/*
You are given a 0-indexed array nums of length n.

The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted from the number of distinct elements in the prefix nums[0, ..., i].

Return the distinct difference array of nums.

Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.
*/

function distinctDifferenceArray(nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let left = new Set(nums.slice(0, i + 1))
    let right = new Set(nums.slice(i + 1))
    result.push(left.size - right.size)
  }

  return result
}

// -----------------------------
// TESTS

console.log(distinctDifferenceArray([1, 2, 3, 4, 5])) // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])) // [-2,-1,0,2,3]
