// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums, k) {
  k = k % nums.length // In case k is larger than the array length
  reverse(nums, 0, nums.length - 1) // Reverse the entire array
  reverse(nums, 0, k - 1) // Reverse the first k elements
  reverse(nums, k, nums.length - 1) // Reverse the rest of the elements
  return nums
}

function reverse(nums, start, end) {
  while (start < end) {
    // Swap elements at start and end indices
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

// -------------------------
// SOLUTION 2

// TIP: Using JavaScript built-in functions

function rotate2(nums, k) {
  // Remove the last k elements and add them to the beginning of the array
  return nums.unshift(...nums.splice(-k % nums.length))

  // ? Splice removes elements from an array and returns the removed elements
  // ? -k % nums.length ensures that k is never larger than the array length
}

// -------------------------
// TESTS

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
console.log(rotate(nums, k)) // [5, 6, 7, 1, 2, 3, 4]

nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
console.log(rotate2(nums, k)) // [5, 6, 7, 1, 2, 3, 4]
