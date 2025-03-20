// * Partition Array According to Given Pivot

/*
You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

- Every element less than pivot appears before every element greater than pivot.
- Every element equal to pivot appears in between the elements less than and greater than pivot.
- The relative order of the elements less than pivot and the elements greater than pivot is maintained.
  - More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.

Return nums after the rearrangement.
*/

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @returns {number[]}
 */

// O(n) time | O(n) space
function pivotArray(nums, pivot) {
  let left = []
  let equal = []
  let right = []

  for (let num of nums) {
    if (num < pivot) left.push(num)
    else if (num > pivot) right.push(num)
    else equal.push(num)
  }

  return [...left, ...equal, ...right]
}

// -------------------------
// SOLUTION 2

// TIP: This is a two pointer approach. It is more efficient than the previous solution but less readable

function pivotArray2(nums, pivot) {
  let result = new Int32Array(nums.length).fill(pivot)
  let left = 0
  let right = nums.length - 1

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] < pivot) {
      result[left] = nums[i]
      left++
    }

    if (nums[j] > pivot) {
      result[right] = nums[j]
      right--
    }
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)) // [9,5,3,10,10,12,14]
/*
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
*/

// 2
console.log(pivotArray2([9, 12, 5, 10, 14, 3, 10], 10)) // [9,5,3,10,10,12,14]
