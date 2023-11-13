// * Find Minimum in Rotated Sorted Array

/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

/**
 * @param {number[]} nums
 * @returns {number} minimum element
 */

function findMin(nums) {
  for (let i = 0; i < nums.length; i++) {
    // Check if current element is less than previous element, if so, return current element
    if (nums[i] < nums[i - 1]) return nums[i]

    // ? Why do we check if current element is less than previous element?
    // ? Because the array is sorted in ascending order, so if the current element is less than the previous element, it means the array has been rotated and the current element is the actual first element of the array
  }

  return nums[0]
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses binary search

// O(log n) time | O(1) space
function findMin2(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] < nums[right]) right = middle
    else left = middle + 1
  }

  return nums[left]
}

// -------------------------
// TESTS

// 1
console.log(findMin([3, 4, 5, 1, 2])) // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin([11, 13, 15, 17])) // 11

// 2
console.log(findMin2([3, 4, 5, 1, 2])) // 1
console.log(findMin2([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin2([11, 13, 15, 17])) // 11
