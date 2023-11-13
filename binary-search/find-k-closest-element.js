// * Find K Closest Elements

/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
*/

function findClosestElements(arr, k, x) {
  let left = 0
  let right = arr.length - 1

  while (right - left >= k) {
    // If the distance between x and arr[left] is greater than the distance between x and arr[right], it means arr[left] is farther from x than arr[right]
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) right--
    else left++
  }

  // Return k elements starting from arr[left]
  return arr.slice(left, right + 1)
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses binary search

function findClosestElements2(arr, k, x) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    // If the distance between x and arr[mid] is greater than the distance between x and arr[mid + k], it means arr[mid + k] is closer to x than arr[mid]
    if (x - arr[mid] > arr[mid + k] - x) left = mid + 1
    else right = mid
  }

  // Return k elements starting from arr[left]
  return arr.slice(left, left + k)
}

// ---------------------
// TESTS

// 1
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)) // [1, 2, 3, 4]
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)) // [10]

// 2
console.log(findClosestElements2([1, 2, 3, 4, 5], 4, 3)) // [1, 2, 3, 4]
console.log(findClosestElements2([1, 1, 1, 10, 10, 10], 1, 9)) // [10]
