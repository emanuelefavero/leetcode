/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1
*/

// -------------------------
// SOLUTION 1

function pivotIndex(nums) {
  // calculate the total sum of the array
  let totalSum = nums.reduce((a, b) => a + b, 0)
  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    // if the left sum is equal to the total sum minus the left sum minus the current number, this means that the left sum is equal to the right sum, return the index
    if (leftSum === totalSum - leftSum - nums[i]) return i

    // otherwise, add the current number to the left sum
    leftSum += nums[i]
  }

  return -1
}

// -------------------------
// SOLUTION 2

function pivotIndex2(nums) {
  let left = 0

  // calculate the right sum and subtract the first number from it
  let right = nums.reduce((a, b) => a + b, 0) - nums[0]

  if (left === right) return 0

  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1] // add the previous number to the left sum
    right -= nums[i] // subtract the current number from the right sum

    if (left === right) return i
  }

  return -1
}

// -------------------------
// TESTS

console.log(pivotIndex([1, 7, 3, 6, 5, 6])) // 3
console.log(pivotIndex([1, 2, 3])) // -1
console.log(pivotIndex([2, 1, -1])) // 0

console.log(pivotIndex2([1, 7, 3, 6, 5, 6])) // 3
console.log(pivotIndex2([1, 2, 3])) // -1
console.log(pivotIndex2([2, 1, -1])) // 0
