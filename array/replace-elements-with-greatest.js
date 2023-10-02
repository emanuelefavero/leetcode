// Replace Elements With Greatest Element on Right Side

/**
 * * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1
 *
 * After doing so, return the array
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

// O(n) time | O(1) space
function replaceElements(arr) {
  let max = -1

  // loop backwards so we can keep track of the max number to the right
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i]

    arr[i] = max
    max = Math.max(max, current)
  }

  return arr
}

// ------------------
// TESTS

console.log(replaceElements([17, 18, 5, 4, 6, 1])) // [18, 6, 6, 6, 1, -1]
