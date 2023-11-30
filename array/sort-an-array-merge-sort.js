// * Sort an Array (Merge Sort)

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(n log(n)) time complexity and with the smallest space complexity possible.

// TIP: This solution uses the merge sort algorithm to sort the array (top-down approach)

// TODO jsDoc

function sortArray(nums) {
  if (nums.length <= 1) return nums

  let middle = Math.floor(nums.length / 2)
  let left = nums.slice(0, middle)
  let right = nums.slice(middle)

  return merge(sortArray(left), sortArray(right))
}

function merge(left, right) {
  let result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}

// -----------------------------
// TESTS

console.log(sortArray([5, 2, 3, 1])) // [1, 2, 3, 5]
