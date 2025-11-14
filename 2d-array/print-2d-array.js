/**
 * * Print 2d array
 *
 * @param {number[]} array
 */

// O(n) time | O(1) space - even if we have nested loops, we are still only iterating through each element once

function print2dArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j])
    }
  }
}

// -------------------------
// TESTS

const array2d = [
  [1, 2],
  [3, 4],
]

console.log(print2dArray(array2d)) // 1, 2, 3, 4
