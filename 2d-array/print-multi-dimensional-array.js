/**
 * * Print multi dimensional array
 *
 * @param {number[]} array
 */

// O(n) time | O(1) space
function printMultiDimensionalArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      printMultiDimensionalArray(array[i])
    } else {
      console.log(array[i])
    }
  }
}

// -------------------------
// TESTS

const multiDimensionalArray = [
  [1, 2],
  [3, 4, [5, 6]],
]

console.log(printMultiDimensionalArray(multiDimensionalArray))
