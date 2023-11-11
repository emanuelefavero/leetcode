// * Search for a Range

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value

If target is not found in the array, return [-1, -1]

You must write an algorithm with O(log n) runtime complexity
*/

// TIP: To find the range ios easy. Just run two binary searches. One that starts from the left to find the starting index and one that starts from the right to find the ending index

// TODO: add link to README
// TODO: add jsDoc

function searchRange(nums, target) {
  const result = [-1, -1]

  result[0] = findStartingIndex(nums, target)
  result[1] = findEndingIndex(nums, target)

  return result
}

// TIP: This binary search algorithm searches the starting index of the target staring from the left
function findStartingIndex(nums, target) {
  let index = -1
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] >= target) right = middle - 1
    else left = middle + 1

    if (nums[middle] === target) index = middle
  }

  return index
}

// TIP: This binary search algorithm searches the ending index of the target starting from the right
function findEndingIndex(nums, target) {
  let index = -1
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] <= target) left = middle + 1
    else right = middle - 1

    if (nums[middle] === target) index = middle
  }

  return index
}

// ---------------------
// TEST

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]
