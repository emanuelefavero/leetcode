// * Sort By

/*
Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */

// O(n log n) time | O(1) space
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b))
}

// -------------------------
// TESTS

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)) // [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
// [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

console.log(
  sortBy(
    [
      [3, 4],
      [5, 2],
      [10, 1],
    ],
    (x) => x[1]
  )
) // [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.
