// * Find Minimum in Rotated Sorted Array II

/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums THAT MAY CONTAIN DUPLICATES, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.
*/

function findMin(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    // If nums[middle] < nums[right], it means the minimum element is in the left half
    if (nums[middle] < nums[right]) right = middle
    else if (nums[middle] > nums[right]) left = middle + 1
    // If nums[middle] === nums[right], we decrease right by 1 to move across duplicates
    // TIP: This is the only difference between this problem and the previous one (binary-search/find-minimum-in-rotated-sorted-array.js)
    else if (nums[middle] === nums[right]) right--
  }

  return nums[left]
}

// -------------------------
// TESTS

console.log(findMin([1, 3, 5])) // 1
console.log(findMin([2, 2, 2, 0, 1])) // 0
console.log(findMin([1, 1])) // 1
