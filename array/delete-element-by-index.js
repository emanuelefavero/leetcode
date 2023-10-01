/**
 * * Delete an element from an array (given the index) - no built in methods
 *
 * @param {number[]} array
 * @param {number} index
 */

// O(n) time | O(1) space
function deleteElement(array, index) {
  index++ // we need to start from the next element

  for (let i = index; i < array.length; i++) {
    array[i - 1] = array[i]
  }
  array.length = array.length - 1 // remove last element
}

// -----------------------------
// TESTS

let array = [1, 2, 3, 4, 5]
deleteElement(array, 2)

console.log(array) // [1, 2, 4, 5]
