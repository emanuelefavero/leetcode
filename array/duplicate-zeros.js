/**
 * * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right
 *
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0) // Add a 0 at the current index
      arr.pop() // Remove the last element

      // We need to skip the next element because we already added a 0 to it
      i++
    }
  }
}

// -----------------------------
// SOLUTION 2

function duplicateZeros2(arr) {
  let i = 0

  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      arr.pop()

      i++
    }

    // We need to skip the next element because we already added a 0 to it
    i++
  }
}

// -----------------------------
// TESTS

let arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)

console.log(arr) // [1, 0, 0, 2, 3, 0, 0, 4]

let arr2 = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros2(arr2)

// console.log(arr2) // [1, 0, 0, 2, 3, 0, 0, 4]
