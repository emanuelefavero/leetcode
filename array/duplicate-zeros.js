// TODO: jsDoc and comments
// TODO: Solution 2
// TODO: Add link to README

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

function duplicateZeros(arr) {
  let i = 0

  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0) // Insert 0 at index i, remove 0 elements
      arr.pop() // Remove last element
      i++
    }

    // We need to also increment i here because we don't want to check the newly added 0
    i++
  }
}

// -----------------------------
// TESTS

let arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)

console.log(arr) // [1, 0, 0, 2, 3, 0, 0, 4]
