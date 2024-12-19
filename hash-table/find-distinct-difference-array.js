// * Find the Distinct Difference Array

/*
You are given a 0-indexed array nums of length n.

The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elements in the right nums[i + 1, ..., n - 1] subtracted from the number of distinct elements in the left nums[0, ..., i].

Return the distinct difference array of nums.

Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n^2) time | O(n) space
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
// SOLUTION 2

// TIP: This solution is a little bit more efficient since it doesn't have to slice the left array each time. Instead it will simply add the current element to the left set

// O(n^2) time | O(n) space
function distinctDifferenceArray2(nums) {
  let result = []
  let left = new Set()

  for (let i = 0; i < nums.length; i++) {
    let right = new Set()
    left.add(nums[i]) // add current element to left set

    // add elements from right to right set
    for (let j = nums.length - 1; j > i; j--) {
      right.add(nums[j])
    }

    result.push(left.size - right.size)
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(distinctDifferenceArray([1, 2, 3, 4, 5])) // [-3,-1,1,3,5]
/*
Explanation: For index i = 0, there is 1 element in the left and 4 distinct elements in the right. Thus, diff[0] = 1 - 4 = -3.
For index i = 1, there are 2 distinct elements in the left and 3 distinct elements in the right. Thus, diff[1] = 2 - 3 = -1.
For index i = 2, there are 3 distinct elements in the left and 2 distinct elements in the right. Thus, diff[2] = 3 - 2 = 1.
For index i = 3, there are 4 distinct elements in the left and 1 distinct element in the right. Thus, diff[3] = 4 - 1 = 3.
For index i = 4, there are 5 distinct elements in the left and no elements in the right. Thus, diff[4] = 5 - 0 = 5.
*/
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])) // [-2,-1,0,2,3]

// 2
console.log(distinctDifferenceArray2([1, 2, 3, 4, 5])) // [-3,-1,1,3,5]
console.log(distinctDifferenceArray2([3, 2, 3, 4, 2])) // [-2,-1,0,2,3]
